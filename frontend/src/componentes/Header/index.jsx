import React from 'react';

import logotipo from '../../assets/imagens/logotipo.svg';

const Header = () => {
    return (
        <header className="container-fluid" style={{backgroundColor: '#b83345'}}>
            <nav className="nav container">
                <a className="nav-link flex-grow-1" href="./index.html">
                    <img src={logotipo} alt="Logotipo"
                        style={{height: '10vh'}}
                    />
                </a>
                <a className="nav-link active text-light my-auto" href="#pqFazer" style={{fontWeight: 'bold'}}>Por que fazer</a>
                <a className="nav-link active text-light my-auto" href="#pqConfiar" style={{fontWeight: 'bold'}}>Por que confiar</a>
                <a className="nav-link disabled my-auto" href="#" style={{color: '#aaa', fontWeight: 'bold'}}>Contato</a>
                <a className="nav-link active text-light my-auto" href="./quizUm.html" style={{fontWeight: 'bold'}}>Fazer Quiz</a>
                <a className="nav-link active text-light my-auto" href="./login.html" style={{fontWeight: 'bold'}}>Login</a>
                <a className="nav-link active text-light my-auto" href="./cadastro.html" style={{fontWeight: 'bold'}}>Cadastro</a>
            </nav>
        </header>
    );
}

export default Header;
