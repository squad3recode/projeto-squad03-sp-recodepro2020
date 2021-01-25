const FormCadastro = () => {
    return (
        <div className="container w-50 my-5 p-5 border">
            <h1 className="text-center mb-4">Cadastrar-se</h1>
            <form method="post" action="#">
                <div className="form-group">
                    <input className="form-control mb-2" placeholder="Nome" type="text" name="nome" id="nome" />
                    <input className="form-control mb-2" placeholder="Data de nascimento" type="date" name="dataDeNascimento" id="dataDeNascimento" />
                    <input className="form-control mb-2" placeholder="Telefone" type="number" name="telefone" id="telefone" />
                    <input className="form-control mb-2" placeholder="Telefone de contato" type="number" name="telefoneContato" id="telefoneContato" />
                    <input className="form-control mb-2" placeholder="Região" type="number" name="regiao" id="regiao" />
                    <input className="form-control mb-2" placeholder="E-mail" type="email" name="email" id="email" />
                    <input className="form-control mb-2" placeholder="Senha" type="password" name="senha" id="senha" />
                    <p className="text-center text-secondary my-3">Ao clicar em Cadastrar-se, eu concordo que li e aceito os<br /><a href="#">Termos de Uso</a> e a <a href="#">Política de Privacidade.</a></p>
                </div>
                <button className="btn w-100" type="submit" name="cadastrar" style={{ backgroundColor: '#7b98db', color: '#fff', fontWeight: 'bold' }}>Cadastrar-se</button>
            </form>
        </div>
    );
}