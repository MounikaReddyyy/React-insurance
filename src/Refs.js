import React from 'react';
import ReactDOM from 'react-dom';
class Refusage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        };

        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {

        this.setState({
            data: ''
        });
        ReactDOM.findDOMNode(this.s).style.backgroundColor = '';
        this.s.focus();

    }
    update(e)
    {
        this.setState({
            data: this.s.value
        });
        ReactDOM.findDOMNode(this.s).style.backgroundcolor='red';
        if(this.s.value > 10)
        {

            ReactDOM.findDOMNode(this.s).style.color = 'blue';
        }
         else
     {
    ReactDOM.findDOMNode(this.s).style.color = 'yellow';

    }

    }

render()
{
return(
<div>
NUMBER:<input type="text" ref={(node) =>{this.s=node}} onChange={this.update.bind(this)} value={this.state.data}/> {this.state.data}
<input type="button" value="clear" onClick={this.focusTextInput}/>
</div>);

}

}
export default Refusage;