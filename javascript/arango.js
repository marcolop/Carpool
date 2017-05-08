import arangojs, {Database, aql} from 'arangojs';
let db1 = arangojs();//conveniencie short-hand
let db2 = new Database();
let {query, binVars} = aql`RETURN ${Date.now()}`;

//or plain old Node-style
var arangojs = requiere('arangojs');
var db1 = arangojs.Database();
var db2 = arangojs.aql(['RETURN','']Date.now());
var aql = arangojs.aql(['RETURN',''],Date.now());
var query = aql.query;
var binVars = aql.bindVars;

//using a complex connection string with autentication

let host  = procces.env.ARANGODB_HOST;
let port = procces.env.ARANGODB_PORT;
let database = procces.env.ARANGODB_DB;
let username = procces.env.ARANGODB_USERNAME;
let password = procces.env.ARANGODB_PASSWORD;
let db = arangojs({
  url: 'http://${username}:${password}@${host}:${port}',
  DatabaseName: database
});

//using ArangoDB 2.8 compatibility mode
let db = arangojs({
  arangoVersion: 20800
}):
