import React from 'react';

import pqfazeroteste1 from '../../assets/imagens/pqfazeroteste01.svg';
import pqfazeroteste2 from '../../assets/imagens/pqfazeroteste02.svg';

import styles from './styles.css';


const PQFazer = () => {
    return (
        <section id="pqFazer" className="section-2">
            <div>
                <h2>Por que fazer um quiz?</h2>
                <div className="container-pq-fazer">
                    <div>
                        <h3>Você tem dúvidas se o seu relacionamento?</h3>
                        <p>
                            Você tem dúvidas se o seu relacionamento é saudável? Gostaria de saber o motivo
                            de algumas atitudes do seu parceiro te deixam triste?Então você está no lugar certo.
                            Aqui você terá algumas respostas para suas dúvidas e porquê algumas ações dele não
                            te fazem bem. E claro, saber mais sobre você e o que você deseja para o seu futuro
                            nessa relação.
                        </p>
                    </div>
                    <div>
                        <img src={pqfazeroteste1} alt="Icone 1" />
                    </div>
                </div>
                <div className="container-pq-fazer">
                    <div>
                        <img src={pqfazeroteste2} alt="Icone 2" />
                    </div>
                    <div >
                        <h3>Você está solteira?</h3>
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