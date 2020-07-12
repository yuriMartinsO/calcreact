import React from 'react';
import Visor from './Visor.js';
import SinaisContainer from './SinaisContainer.js';
import BotoesContainer from './BotoesContainer.js';
import { create, all } from 'mathjs'

const config = { };
const math = create(all, config);

class CalculadoraContainer extends React.Component {
	constructor() {
		super();

		this.state = {
			valor: "",
		}
	}

	acrescentar(caracter) {
		this.setState({
			valor: this.state.valor + caracter,
		});
	}

	apagarUmCaracter() {
		this.setState({
			valor: this.state.valor.substring(0,(this.state.valor.length-1)),
		});
	}

	apagarTudo() {
		this.setState({
			valor: "",
		});
	}

	calcular() {
		try{
			let resultado = math.evaluate(this.state.valor);
			 this.setState({
				valor: resultado,
			});
		}
		  catch(error){
			alert("CONTA INVALIDA");
		}
	}
	//REGISTRA UMA AÇÃO PARA CALCULAR
	fazerUmaAcao(caracter) {
		switch(caracter){
			case '<':
				this.apagarUmCaracter();
				break;
			case 'C':
				this.apagarTudo();
				break;
			case '=':
				this.calcular();
				break;	
			default:
				this.acrescentar(caracter);
		}
	}

	render() {
		const dados = {
			fileira1Sinais: [
				'.',
				'C',
				'<',
				'/'
			],
			fileira2Sinais: [
				'*',
				'-',
				'+',
				'='
			],
			numeros: [1,2,3,4,5,6,7,8,9,'(',0,')']
		}

		return (
			<div className="calculadoraContainer">
				<Visor valor={this.state.valor}/>
				<div className="fileiraSinais1">
					<SinaisContainer sinais={dados.fileira1Sinais} acao={this.fazerUmaAcao.bind(this)}/>
				</div>
				<div className="numeros">
					<BotoesContainer numeros={dados.numeros} acao={this.fazerUmaAcao.bind(this)}/>
				</div>
				<div className="fileiraSinais2">
					<SinaisContainer sinais={dados.fileira2Sinais} acao={this.fazerUmaAcao.bind(this)}/>
				</div>
			</div>
		);
	}
}

export default CalculadoraContainer;