const FormLogin = () => {
    return (
        <div className="container w-50 my-5 p-5 border">
            <h1 className="text-center mb-4">Faça seu login</h1>
            <form method="post" action="#">
                <div className="form-group">
                    <input className="form-control mb-2" placeholder="E-mail" type="email" name="email" style={{}} />
                    <input className="form-control mb-2" placeholder="Senha" type="password" name="senha" style={{}} />
                    <button className="btn w-100" type="submit" value="Entrar" name="submit" style={{ backgroundColor: '#7b98db', color: '#fff', fontWeight: 'bold' }}>Entrar</button>
                </div>
            </form>
            <hr />
            <p className="text-dark text-center">Não possui uma conta?</p>
            <a className="nav-item d-flex justify-content-center" href="./cadastramento.php">Cadastre-se</a>
        </div>
    );
}