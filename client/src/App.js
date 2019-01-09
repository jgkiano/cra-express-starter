import React, { Component } from "react";

class App extends Component {
    state = {
        counter: 0
    };

    render() {
        return <span onClick={this.logClicks}>Hello World!!!!!!</span>;
    }

    logClicks = () => {
        this.setState({ counter: this.state.counter + 1 }, () =>
            console.log(this.state)
        );
    };
}

export default App;
