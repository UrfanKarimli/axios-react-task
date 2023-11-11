const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
const { request, response } = require("express");
app.use(express.json());
app.use(cors());

let userDataBase = [];

app.get("/get-data", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: userDataBase,
  });
});
app.get("/get-data/:id", (request, response) => {
  console.log("🚀 ~ file: server.js ~ line 19 ~ app.get:id ~ userDataBase", userDataBase);
  const id = request.params.id;
  let userItem = userDataBase.findIndex((user) => user.id === Number(id));
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: userDataBase[userItem],
  });
  // console.log("bura bax ------------",userDataBase[userItem])
});


app.post("/create-data", (request, response) => {
  userDataBase.push(request.body);
  console.log(
    "🚀 ~ file: server.js ~ line 34 ~ app.post ~ request.body",
    request.body
  );
  response.status(200).send({
    success: "OK",
    message: "Successful date creation",
  });
});

app.put("/update-data/:id", (request, response) => {
  console.log("🚀 ~ file: server.js ~ line 44 ~ app.put ~ request.body", request.body);
  const id = request.params.id;
  let userItem = userDataBase.findIndex((user) => user.id === Number(id));
  userDataBase.splice(userItem, 1, request.body); 
  response.status(200).send({
    success: "OK",
    message: "Successful date update",
  });
});


app.delete("/delete-data/:id", (request, response) => {
  console.log("🚀 ~ file: server.js ~ line 56 ~ app.delete ~ request.params", request.params);
  const id1 = request.params.id;
  let userItem = userDataBase.findIndex((user) => user.id === Number(id1));
  userDataBase.splice(userItem, 1);
  response.status(200).send({
    success: "OK", 
    message: "Successful date Delete",
  });

});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Start server on  http://localhost:${PORT} !`);
});
