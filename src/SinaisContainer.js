import React from 'react';
import Botao from './Botao.js';

class SinaisContainer extends React.Component {
	constructor(props) {
		super(props);
		this.sinais = this.props.sinais;
	}

	exibirBotoes(array) {
		let lista = array.map((valor) =>
			<Botao acao={this.props.acao} key={valor} valor={valor}/>
		);
		return lista;
	}    
	render() {
		const botoes= this.exibirBotoes(this.sinais);

		return (
			<div>
				{botoes}
			</div>
		);
	}
}

export default SinaisContainer;