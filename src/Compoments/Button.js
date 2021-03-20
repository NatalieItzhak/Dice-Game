import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                <h4>{this.props.name}</h4>
            </button>
        );
    }
}
export default Button;