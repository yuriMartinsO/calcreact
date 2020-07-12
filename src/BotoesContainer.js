import React from 'react';
import Botao from './Botao.js';

class BotoesContainer extends React.Component {
	constructor(props) {
		super(props);
		this.numeros = this.props.numeros;
	}

	exibirBotoes(array) {
		let lista = array.map((valor) =>
			<Botao acao={this.props.acao} key={valor} valor={valor}/>
		);
		return lista;
	}

	render() {
		const botoes= this.exibirBotoes(this.numeros);

		return (
			<div>
				{botoes}
			</div>
		);
	}
}

export default BotoesContainer;