const express = require("express");
const JsonGraphqlExpress = require("json-graphql-server");

const PORT = 3430;
const app = express();
const data = {
  abbreviations: require("./db/abbrev.json"),
  derivationCodes: require("./db/deriv_cd.json"),
  footnotes: require("./db/footnote.json"),
  nutrients: require("./db/nut_data.json"),
  weights: require("./db/weight.json"),
  dataSources: require("./db/data_src.json"),
  foodGroups: require("./db/fd_group.json"),
  langFactorDefinitions: require("./db/langdesc.json"),
  nutrientDefinitions: require("./db/nutr_def.json"),
  dataSourceLinks: require("./db/datsrcln.json"),
  foodDescriptions: require("./db/food_des.json"),
  langFactors: require("./db/langual.json"),
  sourceCodes: require("./db/src_cd.json")
};

app.use("/graphql", JsonGraphqlExpress.default(data));
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
