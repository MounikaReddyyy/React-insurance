import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };

    }
    componentDidMount() {
        this.timerID = setInterval(() => this.UpdateTime(), 1000);

    }
    componentWillUnmount() {

        clearTimeout(this.timerID);

    }
UpdateTime()
{
this.setState({
    date: new Date()
}
);

}




    render() {

        return ( <div>
            <h1 > HELLO WORLD!! </h1>
            <h2 > it is {this.state.date.toLocaleTimeString()
        }. </h2>
        <button onClick={this.componentWillUnmount.bind(this)
    } > stop </button>
     </div >
);


}
}
export default Timer;