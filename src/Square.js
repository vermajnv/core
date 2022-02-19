import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        console.log(this);
        this.state = {
            value : null
        }
    }
    render() {
        return (
            <button className="square" onClick={() => { this.setState({value : 'X'}) }}>
                {this.state.value}
            </button>
        );
    }
}

export default Square