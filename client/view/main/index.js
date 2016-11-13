var React = require('react');
var ReactDOM = require('react-dom');

var Form = require('react-bootstrap').Form;
var FormGroup = require('react-bootstrap').FormGroup;
var Col = require('react-bootstrap').Col;
var Button = require('react-bootstrap').Button;
var FormControl = require('react-bootstrap').FormControl;
var Checkbox = require('react-bootstrap').Checkbox;
var ControlLabel = require('react-bootstrap').ControlLabel;
var DropdownButton = require('react-bootstrap').DropdownButton;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var MenuItem = require('react-bootstrap').MenuItem;

var CategoryDropdown = require('./components/CategoryDropdown')

var categories = ['Abs', 'Biceps', 'Calves', 'Chest',
  'Forearms', 'Glutes', 'Hamstrings', 'Lats', 'Lower Back',
  'Middle Back', 'Quads', 'Shoulders', 'Traps', 'Triceps'];

var strengthTypes = ['Strength'];

var equipmentTypes = ['Bodyweight', 'Machine', 'Barbell', 'Dumbbell', 'Cable']

var mechanicTypes = ['Isolation', 'Compound']

var forceTypes = ['Pull', 'Push']

var experienceLevels = ['Advanced', 'Intermediate', 'Beginner']

var secondaryMuscles = ['Forearms', 'Lats', 'Shoulders', 'Triceps']

var category
var strengthType
var exerciseTitle
var equipmentType
var mechanicType
var forceType
var experienceLevel
var secondaryMuscle

function categoriesSelect(data) {
  category = data
}

function strengthSelect(data) {
  strengthType = data
}

function equipmentSelect(data) {
  equipmentType = data
}

function mechanicSelect(data) {
  mechanicType = data
}

function forceSelect(data) {
  forceType = data
}

function experienceLevelSelect(data) {
  experienceLevel = data
}

function handleTitleChange(e) {
  exerciseTitle = e.target.value
}

function handleSecondaryMuscleChange(e) {
  secondaryMuscle = e.target.value
}

function createExercise() {
  $.ajax({
    method: "POST",
    url: "/gym",
    data: {
      category: category,
      strengthType: strengthType,
      exerciseTitle: exerciseTitle,
      equipmentType: equipmentType,
      mechanicType: mechanicType,
      forceType: forceType,
      experienceLevel: experienceLevel,
      secondaryMuscle: secondaryMuscle
    },
    dataType: 'json'
  })
  .done(function( msg ) {
    alert( "Data Saved: " + msg );
  });
}

var formInstance = (
  <Form horizontal>
    <FormGroup controlId="formHorizontalEmail2">
      <Col componentClass={ControlLabel} sm={4}>
        Exercise Guides Categories
      </Col>
      <Col sm={8}>
        <CategoryDropdown dropDownOptions={categories} dropdownonSelect={categoriesSelect} />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontal1">
      <Col componentClass={ControlLabel} sm={4}>
        Exercise Title
      </Col>
      <Col sm={8}>
        <FormControl placeholder="Hanging Leg Raise"
            type="text"
            value={exerciseTitle}
            onChange={handleTitleChange}/>
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontal2">
      <Col componentClass={ControlLabel} sm={4}>
        Exercise TYPE
      </Col>
      <Col sm={8}>
        <CategoryDropdown dropDownOptions={strengthTypes} dropdownonSelect={strengthSelect}/>
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontal3">
      <Col componentClass={ControlLabel} sm={4}>
        Equipment
      </Col>
      <Col sm={8}>
        <CategoryDropdown dropDownOptions={equipmentTypes} dropdownonSelect={equipmentSelect}/>
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontal4">
      <Col componentClass={ControlLabel} sm={4}>
        Mechanics
      </Col>
      <Col sm={8}>
        <CategoryDropdown dropDownOptions={mechanicTypes} dropdownonSelect={mechanicSelect}/>
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontal5">
      <Col componentClass={ControlLabel} sm={4}>
        Force Type
      </Col>
      <Col sm={8}>
        <CategoryDropdown dropDownOptions={forceTypes} dropdownonSelect={forceSelect}/>
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontal6">
      <Col componentClass={ControlLabel} sm={4}>
        Experience Level
      </Col>
      <Col sm={8}>
        <CategoryDropdown dropDownOptions={experienceLevels} dropdownonSelect={experienceLevelSelect}/>
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontal7">
      <Col componentClass={ControlLabel} sm={4}>
        Secondary Muscle(s)
      </Col>
      <Col sm={8}>
        <FormControl placeholder="Forearms" type="text"
          value={secondaryMuscle}
          onChange={handleSecondaryMuscleChange}/>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={4} sm={10}>
        <Button onClick={createExercise}>
          Create
        </Button>
      </Col>
    </FormGroup>
  </Form>
);

class GYMForm extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return formInstance;
  }
}

ReactDOM.render(
  <GYMForm />,
  document.getElementById('main-container')
)
