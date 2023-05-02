import express from "express";
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.text({type: 'application/xml'}));



app.post("/test", express.text(), (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000.");
});