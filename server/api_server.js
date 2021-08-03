var jsonServer = require("json-server");
var server = jsonServer.create();

var dbs = {
  abbrev: require("./db/abbrev.json"),
  deriv_cd: require("./db/deriv_cd.json"),
  footnote: require("./db/footnote.json"),
  nut_data: require("./db/nut_data.json"),
  weight: require("./db/weight.json"),
  data_src: require("./db/data_src.json"),
  fd_group: require("./db/fd_group.json"),
  langdesc: require("./db/langdesc.json"),
  nutr_def: require("./db/nutr_def.json"),
  datsrcln: require("./db/datsrcln.json"),
  food_des: require("./db/food_des.json"),
  langual: require("./db/langual.json"),
  src_cd: require("./db/src_cd.json")
};

var router = jsonServer.router(dbs);
var middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3430, function () {
  console.log("JSON Server is running at 3430");
});
