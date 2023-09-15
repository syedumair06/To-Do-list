import express from "express";
import bodyParser from "body-parser";

export const app = express();
const port = 3000;

let homework = [];
let officework = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { month: day });
});

app.get("/homework", (req, res) => {
  res.render("homework.ejs", { month: day ,
data1:homework});
});
app.get("/officework", (req, res) => {
  res.render("officework.ejs", { month: day,
data2:officework });
});

app.post("/submit", (req, res) => {

  let keys = Object.keys(req.body)[0];
  let itemToBeAdded = req.body[keys];

  if(keys == "newItem1")
  {
    homework.push(itemToBeAdded);
    res.redirect("/homework")
  }
  else
  {
    officework.push(itemToBeAdded);
    res.redirect("/officework")
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

let day;

switch (new Date().getMonth()) {
  case 0:
    day = "January";
    break;
  case 1:
    day = "Febuary";
    break;
  case 2:
    day = "March";
    break;
  case 3:
    day = "April";
    break;
  case 4:
    day = "May";
    break;
  case 5:
    day = "June";
    break;
  case 6:
    day = "July";
    break;
  case 7:
    day = "August";
    break;
  case 8:
    day = "September";
    break;
  case 9:
    day = "October";
    break;
  case 10:
    day = "November";
    break;
  case 11:
    day = "December";
    break;
}

