const InfoPerfil = () => {
    return (
        <div className="container w-50 my-5 p-5 border">
            <h1 className="text-center mb-4">Meu perfil</h1>
            <p className="border w-100 px-2"><strong>Nome:</strong> </p>
            <p className="border w-100 px-2"><strong>Data de Nascimento:</strong> </p>
            <p className="border w-100 px-2"><strong>Telefone:</strong> </p>
            <p className="border w-100 px-2"><strong>Telefone de contato:</strong> </p>
            <p className="border w-100 px-2"><strong>Região:</strong> </p>
            <p className="border w-100 px-2"><strong>E-mail:</strong> </p>
            <hr className="my-4" />
            <div className="d-flex justify-content-around">
                <button className="btn w-25" style={{ backgroundColor: '#7b98db', color: '#fff'}}>Alterar perfil</button>
                <button className="btn w-25" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#7b98db', border: 'line', borderColor: '#7b98db'}}>Sair</button>
            </div>
        </div>
    );
}