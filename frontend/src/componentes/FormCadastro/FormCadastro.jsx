const FormCadastro = () => {
    const [cadastro, setCadastro] = React.useState(false);

    function registrarUsuaria(event) {
        event.preventDefault();
        let formData = new FormData(event.target);

        const url = "http://projetos/Projeto/backend/Models/Usuaria/cadastra-usuaria.php";

        fetch(url, {
            method: "POST",
            body: formData
        }).then((response) => response.json()).then((dados) => {
            setCadastro(dados);
        })
    }

    return (
        <React.Fragment>
            { (cadastro === false) &&
                <div className="container w-50 my-5 p-5 border">
                    <h1 className="text-center mb-4">Cadastrar-se</h1>
                    <form onSubmit={registrarUsuaria}>
                        <div className="form-group">
                            <input className="form-control mb-2" placeholder="Nome" type="text" name="nome" id="nome" required />
                            <input className="form-control mb-2" placeholder="Data de nascimento" type="date" name="dataDeNascimento" id="dataDeNascimento" required />
                            <input className="form-control mb-2" placeholder="Telefone" type="number" name="telefone" id="telefone" />
                            <input className="form-control mb-2" placeholder="Telefone de contato" type="number" name="telefoneContato" id="telefoneContato" />
                            <input className="form-control mb-2" placeholder="Qual região de SP você reside? (Ex.: Sul)" type="text" name="regiao" id="regiao" />
                            <input className="form-control mb-2" placeholder="E-mail" type="email" name="email" id="email" required />
                            <input className="form-control mb-2" placeholder="Senha" type="password" name="senha" id="senha" required />
                            <p className="text-center text-secondary my-3">Ao clicar em Cadastrar-se, eu concordo que li e aceito os<br /><a href="#">Termos de Uso</a> e a <a href="#">Política de Privacidade.</a></p>
                        </div>
                        <button className="btn w-100" style={{ backgroundColor: '#7b98db', color: '#fff', fontWeight: 'bold' }}>Cadastrar-se</button>
                    </form>
                </div>
            }
            { cadastro &&
                <div className="container my-5 py-5 text-center border w-50" style={{ minHeight: '58vh' }}>
                    <h2 className="mb-5 h1 px-5">Sucesso!</h2>
                    <p className="mb-5 px-5" style={{ fontSize: '18px' }}>Obrigado por ser cadastrar em nosso site, agora você pode fazer login em nossa plataforma e realizar nosso Quiz!</p>
                    <a href="login.html" className="btn btn-lg mb-4 w-50 font-weight-bold" style={{ backgroundColor: '#7b98db', color: '#fff' }}>Faça o Login</a>
                </div>
            }
        </React.Fragment>
    );
}