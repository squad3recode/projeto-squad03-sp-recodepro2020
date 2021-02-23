import React from 'react';

import styles from './styles.css';

import logotipo from '../../assets/imagens/logotipo.svg';
import icone from '../../assets/imagens/bars-solid.svg';

const Header = () => {

    function abrirMenu() {
        const width = window.innerWidth;

        if(width < 500){
            document.getElementById('menuLateral').style.width = '60vw';
        } else if (width < 800) {
            document.getElementById('menuLateral').style.width = '40vw';
        } else {
            document.getElementById('menuLateral').style.width = '30vw';
        }
        
    }

    function fecharMenu() {
        document.getElementById('menuLateral').style.width = '0vw';
    }

    return (

        <header>
            <nav>
                <div>
                    <a href="./index.html">
                        <img src={logotipo} alt="Logotipo" />
                    </a>
                </div>
                <div>
                    <a href="#pqFazer">Por que fazer</a>
                    <a href="#pqConfiar" >Por que confiar</a>
                    <a href="#" style={{ color: '#aaa' }}>Contato</a>
                    <a href="./quizUm.html" >Fazer Quiz</a>
                    <a href="./login.html">Login</a>
                    <a href="./cadastro.html">Cadastro</a>
                </div>
                <div>
                    <button id="icone" onClick={abrirMenu}><img src={icone} alt="Menu lateral" /></button>
                    <nav id="menuLateral">
                        <button onClick={fecharMenu}><img src={icone} alt="Menu lateral" /></button>
                        <a className="link" href="#pqFazer">Por que fazer</a>
                        <a className="link" href="#pqConfiar" >Por que confiar</a>
                        <a href="#" style={{ color: '#aaa' }}>Contato</a>
                        <a className="link" href="./quizUm.html" >Fazer Quiz</a>
                        <a className="link" href="./login.html">Login</a>
                        <a className="link" href="./cadastro.html">Cadastro</a>
                    </nav>
                </div>
            </nav>
        </header>
    );
}

export default Header;
