import React from 'react';

class Botao extends React.Component {

    render() {
        const valor = this.props.valor;
        const funcao = this.props.acao;

		return (
            <div className="botao" onClick={()=>funcao(valor)}>
                <div>{this.props.valor}</div>
            </div>
        );
	}
}

export default Botao;