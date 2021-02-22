import React from 'react';

import pqfazeroteste1 from '../../assets/imagens/pqfazeroteste01.svg';
import pqfazeroteste2 from '../../assets/imagens/pqfazeroteste02.svg';


const PQFazer = () => {
    return (
        <section id="pqFazer" className="container-fluid py-4 mb-5" style={{ color: '#b83345', backgroundColor: 'rgba(197, 239, 242, 0.2)' }}>
            <div className="container">
                <h2 className="my-5 d-flex justify-content-center h1">Por que fazer um quiz?</h2>
                <div className="d-flex my-5">
                    <div className="d-flex row w-75 mr-5">
                        <h3 className="ml-5">Você tem dúvidas se o seu relacionamento?</h3>
                        <p>
                            Você tem dúvidas se o seu relacionamento é saudável? Gostaria de saber o motivo
                            de algumas atitudes do seu parceiro te deixam triste?Então você está no lugar certo.
                            Aqui você terá algumas respostas para suas dúvidas e porquê algumas ações dele não
                            te fazem bem. E claro, saber mais sobre você e o que você deseja para o seu futuro
                            nessa relação.
                    </p>
                    </div>
                    <div className="ml-5">
                        <img src={pqfazeroteste1} alt="Icone 1" style={{ height: '30vh' }} />
                    </div>
                </div>
                <div className="d-flex my-5">
                    <div className="mr-5">
                        <img src={pqfazeroteste2} alt="Icone 2" style={{ height: '30vh' }} />
                    </div>
                    <div className="d-flex row w-75 ml-5">
                        <h3 className="ml-5">Você está solteira?</h3>
                        <p>
                            Esse Quiz também é para você! Aqui, você tem a chance de saber um pouco mais
                            de como você se comporta em relacionamentos passados e quais características
                            você sempre procura em um parceiro que não estão te fazendo bem. Vem com a
                            gente que nós te damos as dicas de como não repetir mais isso!
                    </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PQFazer;