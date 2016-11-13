var express = require('express');
var ejs = require('ejs');
var path = require('path');
var bodyParser = require('body-parser')
var app = module.exports = express();
var jsonfile = require('jsonfile');

var low = require('lowdb')

var db = low('data.json')

// var datafile = "data.json";
// jsonfile.spaces = 2;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.render('index')
})

app.set('views', './client')
app.set('view engine', 'html')
app.engine('.html', ejs.__express)
// app.set('html', ejs.renderFile)

app.use(express.static(path.join(__dirname, 'client')));

app.post('/gym', function(req, res) {
    var data = req.body
    // console.log(data.category)
    // res.send(data.category);

    // console.log(db.has('category').value())

    updateData(data)
});

function updateCategory(value) {
  return {
    "name": value.category.toUpperCase(),
    "exercises": []
  }
}

function updateExercise(value) {
  var abc = db.get('category').find({ name: value.category.toUpperCase() })
              .get('exercises').find({ id: value.exerciseTitle.split(' ').join('_') })

console.log(db.get('category').find({ name: value.category.toUpperCase() }).value())
  if(!abc.value()) {
    db.get('category').find({ name: value.category.toUpperCase() })
      .get('exercises')
      .push({
        "id": value.exerciseTitle.split(' ').join('_'),
        "exercise_profile": {
          "main_muscle_group": value.category,
          "exercise_type": value.strengthType,
          "equipment_required": value.equipmentType,
          "mechanics": value.mechanicType,
          "force_type": value.forceType,
          "experience_level": value.experienceLevel,
          "secondary_muscles": value.secondaryMuscle.split(',')
        }
      })
      .value()
  }else {
    db.get('category').find({ name: value.category.toUpperCase() })
      .get('exercises').find({ id: value.exerciseTitle.split(' ').join('_') })
      .assign({
        "id": value.exerciseTitle.split(' ').join('_'),
        "exercise_profile": {
          "main_muscle_group": value.category,
          "exercise_type": value.strengthType,
          "equipment_required": value.equipmentType,
          "mechanics": value.mechanicType,
          "force_type": value.forceType,
          "experience_level": value.experienceLevel,
          "secondary_muscles": value.secondaryMuscle.split(',')
        }
      })
      .value()
  }
}

function updateData(value) {

  // 1. check the category
  if(!db.has('category').value()) {
    db.set('category', [])
  }

  // 2. check exercise
  var category = db.get('category')
                   .find({ name: value.category.toUpperCase() })
                   .value()

  if(!category) {
    db.get('category')
      .push(updateCategory(value))
      .value()
  }

  // var exerciseTitle = value.exerciseTitle.split(' ').join('_')

  updateExercise(value)

  // var exercise = category.find({ name: value.exerciseTitle.toUpperCase() })
  //
  // if(!exercise.value()) {
  //
  // }
  //
  // var exer = exercise.get('exercises')
  //                    .find({ id: value.exerciseTitle.split(' ').join('_') })
  //
  // if(!exer.value()) {
  //   exercise.get('exercises').push(updateExercise(value))
  // }else {
  //   exer.assign(updateExercise(value))
  // }
    // .push({
    //   "name": "",
    //   "exercises": []
    // })
}

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
