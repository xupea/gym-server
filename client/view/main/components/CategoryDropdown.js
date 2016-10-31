var React = require('react');

var Col = require('react-bootstrap').Col;
var Button = require('react-bootstrap').Button;
var FormControl = require('react-bootstrap').FormControl;
var Checkbox = require('react-bootstrap').Checkbox;
var ControlLabel = require('react-bootstrap').ControlLabel;
var DropdownButton = require('react-bootstrap').DropdownButton;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var MenuItem = require('react-bootstrap').MenuItem;

class CategoryDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Default'
    }

    this.renderDropdown = this.renderDropdown.bind(this);
    this.generateKey = this.generateKey.bind(this);
    this.dropdownonSelect = this.dropdownonSelect.bind(this);
  }

  renderDropdown(title, i) {
    return (
        <MenuItem eventKey={this.generateKey(title)} key={title}
          id={'id-' + title}
          onSelect={this.dropdownonSelect}>{title}</MenuItem>
    );
  }

  generateKey(value) {
    return {
      id: value.split(' ').map(function(currentValue, index, array) {
        return currentValue.toLowerCase()
      }).join('_'),
      title: value
    }
  }

  dropdownonSelect(eventKey, event) {
    console.log(eventKey)
    this.setState({
      title: eventKey.title
    })
  }

  render() {
    return (
      <ButtonToolbar>
        <DropdownButton bsStyle="default"
          title={this.state.title} id="myDropdownButton" key="0-gym">
          {this.props.dropDownOptions.map(this.renderDropdown)}
        </DropdownButton>
      </ButtonToolbar>
    );
  }
}

module.exports = CategoryDropdown
