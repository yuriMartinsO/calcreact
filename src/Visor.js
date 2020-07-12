import React from 'react';

class Visor extends React.Component {

    render() {
		return (
            <div className="visor">
                <h2>{this.props.valor}</h2>
            </div>
        );
	}
}

export default Visor;