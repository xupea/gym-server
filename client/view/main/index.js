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

var strengthType = ['Abs'];

var equipmentType = ['Bodyweight', 'Machine', 'Barbell', 'Dumbbell', 'Cable']

var mechanicType = ['Isolation', 'Compound']

var forceType = ['Pull', 'Push']

var experienceLevel = ['Advanced', 'Intermediate', 'Beginner']

var secondaryMuscle = ['Forearms', 'Lats', 'Shoulders', 'Triceps']

var formInstance = (
  <Form horizontal>
    <FormGroup controlId="formHorizontalEmail2">
      <Col componentClass={ControlLabel} sm={4}>
        Exercise Guides Categories
      </Col>
      <Col sm={8}>
        <CategoryDropdown dropDownOptions={categories} />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontal1">
      <Col componentClass={ControlLabel} sm={4}>
        Exercise Title
      </Col>
      <Col sm={8}>
        <FormControl placeholder="Hanging Leg Raise" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontal2">
      <Col componentClass={ControlLabel} sm={4}>
        Exercise TYPE
      </Col>
      <Col sm={8}>
        <FormControl placeholder="Strength" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontal3">
      <Col componentClass={ControlLabel} sm={4}>
        Equipment
      </Col>
      <Col sm={8}>
        <CategoryDropdown dropDownOptions={equipmentType} />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontal4">
      <Col componentClass={ControlLabel} sm={4}>
        Mechanics
      </Col>
      <Col sm={8}>
        <CategoryDropdown dropDownOptions={mechanicType} />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontal5">
      <Col componentClass={ControlLabel} sm={4}>
        Force Type
      </Col>
      <Col sm={8}>
        <CategoryDropdown dropDownOptions={forceType} />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontal6">
      <Col componentClass={ControlLabel} sm={4}>
        Experience Level
      </Col>
      <Col sm={8}>
        <CategoryDropdown dropDownOptions={experienceLevel} />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontal7">
      <Col componentClass={ControlLabel} sm={4}>
        Secondary Muscle(s)
      </Col>
      <Col sm={8}>
        <FormControl placeholder="Forearms" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={4} sm={10}>
        <Button>
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
