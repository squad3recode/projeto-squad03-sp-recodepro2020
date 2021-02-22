import React from 'react';

const FormLogin = () => {
    const [login, setLogin] = React.useState(false);
    const [usuaria, setUsuaria] = React.useState([]);

    function logar(event) {
        event.preventDefault();
        let formData = new FormData(event.target);

        const url = "http://projetos/Projeto/backend/Models/Usuaria/login.php";

        fetch(url, {
            method: "POST",
            body: formData
        }).then((response) => response.json()).then((dados) => {
            setLogin(true);
            setUsuaria(dados);
        })
    }

    return (
        <>
            { (login === false) &&
                < div className="container w-50 my-5 p-5 border">
                    <h1 className="text-center mb-4">Faça seu login</h1>
                    <form onSubmit={logar}>
                        <div className="form-group">
                            <input className="form-control mb-2" placeholder="E-mail" type="email" name="email" style={{}} />
                            <input className="form-control mb-2" placeholder="Senha" type="password" name="senha" style={{}} />
                            <button className="btn w-100" type="submit" value="Entrar" name="submit" style={{ backgroundColor: '#7b98db', color: '#fff', fontWeight: 'bold' }}>Entrar</button>
                        </div>
                    </form>
                    <hr />
                    <p className="text-dark text-center">Não possui uma conta?</p>
                    <a className="nav-item d-flex justify-content-center" href="./cadastro.html">Cadastre-se</a>
                </div>
            }
            { (login === true) &&
                usuaria.map((element) => {
                    return (
                        <div className="container w-50 my-5 p-5 border">
                            <h1 className="text-center mb-4">Perfil</h1>
                            <form>
                                <div className="form-group">
                                    <input className="form-control mb-2" value={element.nome} placeholder="Nome" type="text" name="nome" id="nome" disabled />
                                    <input className="form-control mb-2" value={element.nascimento} placeholder="Data de nascimento" type="date" name="dataDeNascimento" id="dataDeNascimento" disabled />
                                    <input className="form-control mb-2" value={element.telefone} placeholder="Telefone" type="number" name="telefone" id="telefone" disabled/>
                                    <input className="form-control mb-2" value={element.telefone_contato} placeholder="Telefone de contato" type="number" name="telefoneContato" id="telefoneContato" disabled />
                                    <input className="form-control mb-2" value={element.regiao} placeholder="Qual região de SP você reside? (Ex.: Sul)" type="text" name="regiao" id="regiao" disabled />
                                    <input className="form-control mb-2" value={element.email} placeholder="E-mail" type="email" name="email" id="email" disabled />
                                </div>
                                <button className="btn w-100" style={{ backgroundColor: '#7b98db', color: '#fff', fontWeight: 'bold' }}>Sair</button>
                            </form>
                        </div>
                    );
                })
            }
        </>
    );
}

export default FormLogin;
