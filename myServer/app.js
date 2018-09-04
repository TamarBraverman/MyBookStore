
const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require("body-parser");
var cors = require('cors');
const app = express();
const basePath = path.join(__dirname + "/dist");

app.use(cors());

app.get(`/`, (req, res) => {
    let linkList = "";
    let resPage = fs.readFileSync("links.html", "utf-8");
    console.log(resPage);
    fs.readdir(basePath, (err, files) => {
        files.forEach((file) => {
            linkList += `<li><a href="/${file}" target="blank">${file}</a></li>`;
        })
        res.send(resPage.replace("placeHolder", linkList));
    });

});


fs.readdir(basePath, (err, files) => {
    files.forEach((file) => {
        app.use(express.static(`${basePath}/${file}`));
        app.get(`/${file}`, (req, res) => {
            res.sendFile(`${basePath}/${file}/index.html`);
        });
    })
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//regists the new user
app.post("/api/register", (req, res) => {
    let users = require("./users.json");
    if (ValiditeRegister(req.body) == true) {
        users.push(req.body)
        fs.writeFileSync("users.json", JSON.stringify(users));
        res.status(201).send(JSON.stringify(req.body));
    }
    else { res.status(400).send({ message: "sorry" }) }

})//validation for register
function ValiditeRegister(user) {
    if (user["firstName"].length < 2 || user["firstName"].length > 15 || !user["firstName"].match(/^[a-zA-Z]*$/))
        return false;
    if (user["lastName"].length < 2 || user["lastName"].length > 15 || !user["firstName"].match(/^[a-zA-Z]*$/))
        return false;
    if (user["userName"].length < 3 || user["userName"].length > 15 || !user["firstName"].match(/^[a-zA-Z]*$/))
        return false;
    if (user["Password"].length < 2 || user["Password"].length > 15)
        return false;
    return true;
}


//checking if the user exits
app.post("/api/login", (req, res) => {
    let users = require("./users.json");
    let allUser = JSON.parse(JSON.stringify(users));
    let myUser = allUser.find(element => element['userName'] == req.body.userName && element['Password'] == req.body.Password);
    if (myUser)
        res.status(201).send(JSON.stringify(myUser));
    else res.status(400).send(null);

})
const port = process.env.PORT || 3500;
app.listen(port, () => { console.log(`OK`); });

