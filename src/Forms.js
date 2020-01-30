import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', tavalue:'', isGames:true, selectValue:'blue'};

    this.handleChange = this.handleChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()});
  }
  handleTextareaChange(event) {
    this.setState({tavalue: event.target.value});
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSelectChange(event) {
    this.setState({selectValue: event.target.value});
  }
  handleSubmit(event) {
    alert('Name: ' + this.state.value + '\n Textarea Value: '
        +this.state.tavalue + '\n Playing Games: '+ this.state.isGames+
           '\n Fav Color: '+ this.state.selectValue );
    event.preventDefault();
  }

  render() {
    return (
       <form onSubmit={this.handleSubmit} >
        <br/>
        <div>
        <label>
          Name: <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        </div>
        <br/>
        <div>
        <label>
        Description:<textarea value={this.state.tavalue} onChange={this.handleTextareaChange} />
        </label>
        </div>
        <br/>
        <label>
          Games:
          <input name="isGames" type="checkbox" checked={this.state.isGames}
             onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Favorite Color:
          <select value={this.state.selectValue} onChange={this.handleSelectChange}>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default  Form;