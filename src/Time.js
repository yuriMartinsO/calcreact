import React from 'react';
import BotaoGol from "./BotaoGol.js";

class Time extends React.Component {
  render() {
    return (
        <div>
            <h1>{this.props.nome}</h1>
            <h1>{this.props.gol}</h1>
            <BotaoGol marcarGol={this.props.marcarGol}/>
        </div>
    );
    }
}

export default Time;
