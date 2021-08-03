var fs = require("fs");

const { AccessParser } = require("accessdb-parser");
const _ = require("lodash");

fs.readFile("./sr28.accdb", function (err, data) {
  const db = new AccessParser(data);
  const tables = db.getTables();
  for (let table of tables) {
    console.log(`generating data from the table: ${table}`);
    const tab = db.parseTable(table); // -> { fields: ["Name", "Age], lines: [["John", "23"], ["Bill", "56"]] }
    const formatted = [];

    const keys = tab.fields.map((i) => {
      let key = i;
      if (table !== "FOOD_DES" && key === "NDB_No") {
        key = "foodDescription_id";
      } else if (table !== "FD_GROUP" && key === "FdGrp_Cd") {
        key = "foodGroup_id";
      } else if (table !== "NUTR_DEF" && key === "Nutr_No") {
        key = "nutrientDefinition_id";
      } else if (table !== "SRC_CD" && key === "Src_Cd") {
        key = "sourceCode_id";
      } else if (table !== "DERIV_CD" && key === "Deriv_CD") {
        key = "derivationCode_id";
      } else if (table !== "LANGDESC" && key === "Factor") {
        key = "langFactorDefinition_id";
      } else if (table !== "DATA_SRC" && key === "DataSrc_ID") {
        key = "dataSource_id";
      } else {
        key = i.replace(/[(]/g, "_unit_");
        key = key.replace(/[)]/g, "");
        key = key.replace(/[µ]/g, "u");
        key = _.camelCase(key);
      }
      return key;
    });

    tab.lines.forEach((row, i) => {
      const formattedRow = { id: i };
      row.forEach((col, i) => {
        formattedRow[keys[i]] = col;
      });
      if (table === "FOOD_DES") {
        formattedRow.id = formattedRow.ndbNo;
      } else if (table === "FD_GROUP") {
        formattedRow.id = formattedRow.fdGrpCd;
      } else if (table === "NUTR_DEF") {
        formattedRow.id = formattedRow.nutrNo;
      } else if (table === "SRC_CD") {
        formattedRow.id = formattedRow.srcCd;
      } else if (table === "DERIV_CD") {
        formattedRow.id = formattedRow.derivCd;
      } else if (table === "LANGDESC") {
        formattedRow.id = formattedRow.factor;
      } else if (table === "DATA_SRC") {
        formattedRow.id = formattedRow.dataSrcId;
      }
      formatted.push(formattedRow);
    });

    fs.writeFileSync(
      `./db/${table.toLowerCase().trim()}.json`,
      JSON.stringify(formatted, null, "\t")
    );
  }
});
