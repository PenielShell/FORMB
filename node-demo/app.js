var express = require("express");
var app = express();
var router = express.Router();
var port = 3000;
var bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const path = require('path');
const mustacheExpress = require('mustache-express');



app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({ extname: 'hbs', layoutsDir: __dirname + '/views' }));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");

var nameSchema = new mongoose.Schema({
    name: String,
    position: String,
    email: String,
    address: String,
    matric_no: String,
    studentScore: Number,
    dateSubmitted: String

});
var FormB = mongoose.model("FormB", nameSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// app.get("/formbData", (req, res) => {
//     res.sendFile(__dirname + "/formb/formbData.html");
// });





app.post("/addname", (req, res) => {
    var initialScore = 30;


    switch (req.body.performance) {
        case "excellent":
            initialScore = initialScore + 5;
            break;
        case "very_good":
            initialScore = initialScore + 4;
            break;
        case "fair":
            initialScore = initialScore + 3;
            break;
        case "poor":
            initialScore = initialScore + 2;
            break;
    }

    switch (req.body.punctuality) {
        case "excellent":
            initialScore = initialScore + 5;
            break;
        case "very_good":
            initialScore = initialScore + 4;
            break;
        case "fair":
            initialScore = initialScore + 3;
            break;
        case "poor":
            initialScore = initialScore + 2;
            break;
    }

    switch (req.body.integrity) {
        case "excellent":
            initialScore = initialScore + 5;
            break;
        case "very_good":
            initialScore = initialScore + 4;
            break;
        case "fair":
            initialScore = initialScore + 3;
            break;
        case "poor":
            initialScore = initialScore + 2;
            break;
    }


    switch (req.body.contribution) {
        case "5":
            initialScore = initialScore + 5;
            break;
        case "4":
            initialScore = initialScore + 4;
            break;
        case "3":
            initialScore = initialScore + 3;
            break;
        case "2":
            initialScore = initialScore + 2;
            break;
        case "1":
            initialScore = initialScore + 1;
            break;
        default:
            initialScore = initialScore;
    }

    switch (req.body.team) {
        case "5":
            initialScore = initialScore + 5;
            break;
        case "4":
            initialScore = initialScore + 4;
            break;
        case "3":
            initialScore = initialScore + 3;
            break;
        case "2":
            initialScore = initialScore + 2;
            break;
        case "1":
            initialScore = initialScore + 1;
            break;
        default:
            initialScore = initialScore;
    }

    switch (req.body.strength) {
        case "5":
            initialScore = initialScore + 5;
            break;
        case "4":
            initialScore = initialScore + 4;
            break;
        case "3":
            initialScore = initialScore + 3;
            break;
        case "2":
            initialScore = initialScore + 2;
            break;
        case "1":
            initialScore = initialScore + 1;
            break;
        default:
            initialScore = initialScore;
    }

    switch (req.body.communication) {
        case "5":
            initialScore = initialScore + 5;
            break;
        case "4":
            initialScore = initialScore + 4;
            break;
        case "3":
            initialScore = initialScore + 3;
            break;
        case "2":
            initialScore = initialScore + 2;
            break;
        case "1":
            initialScore = initialScore + 1;
            break;
        default:
            initialScore = initialScore;
    }

    switch (req.body.skill) {
        case "5":
            initialScore = initialScore + 5;
            break;
        case "4":
            initialScore = initialScore + 4;
            break;
        case "3":
            initialScore = initialScore + 3;
            break;
        case "2":
            initialScore = initialScore + 2;
            break;
        case "1":
            initialScore = initialScore + 1;
            break;
        default:
            initialScore = initialScore;
    }

    switch (req.body.hire) {
        case "yes":
            initialScore = initialScore + 2;
            break;
        case "no":
            initialScore = initialScore + 0;
            break;
        case "maybe":
            initialScore = initialScore + 1;
            break;
    }

    switch (req.body.response) {
        case "5":
            initialScore = initialScore + 5;
            break;
        case "4":
            initialScore = initialScore + 4;
            break;
        case "3":
            initialScore = initialScore + 3;
            break;
        case "2":
            initialScore = initialScore + 2;
            break;
        case "1":
            initialScore = initialScore + 1;
            break;
        default:
            initialScore = initialScore;
    }

    switch (req.body.more) {
        case "yes":
            initialScore = initialScore + 2;
            break;
        case "no":
            initialScore = initialScore + 0;
            break;
        case "maybe":
            initialScore = initialScore + 1;
            break;
    }

    switch (req.body.resourceful) {
        case "5":
            initialScore = initialScore + 5;
            break;
        case "4":
            initialScore = initialScore + 4;
            break;
        case "3":
            initialScore = initialScore + 3;
            break;
        case "2":
            initialScore = initialScore + 2;
            break;
        case "1":
            initialScore = initialScore + 1;
            break;
        default:
            initialScore = initialScore;
    }

    switch (req.body.about) {
        case "creative":
            initialScore = initialScore + 5;
            break;
        case "resourcefull":
            initialScore = initialScore + 5;
            break;
        case "integrity_inclined":
            initialScore = initialScore + 5;
            break;
        case "honesty":
            initialScore = initialScore + 5;
            break;
        case "curiosity":
            initialScore = initialScore + 5;
            break;
        default:
            initialScore = initialScore;
    }

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;


    var myData = new FormB({ name: req.body.name, position: req.body.position, email: req.body.email, address: req.body.address, matric_no: req.body.matric_no, studentScore: initialScore, dateSubmitted: today });

    myData.save()
        .then(item => {
            // alert("Submitted Sucessfully");
            res.redirect('/view');
            // res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });

});


/* GET formblist. */

app.get("/view", (req, res) => {
    FormB.find((err, docs) => {
        if (!err) {
            res.render('formbData', {
                view: docs
            });

        } else {
            console.log('Error in retrieving formb list :' + err);
        }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var myData = new FormB({ name: req.body.name, position: req.body.position, email: req.body.email, address: req.body.address, matric_no: req.body.matric_no, studentScore: initialScore, dateSubmitted: "Null" });

    Formb.findByIdAndUpdate(req.params.id, { $set: myData }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in FormB Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});