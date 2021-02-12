const Footer = () => {
    return (
        <footer className="container-fluid" style={{ backgroundColor: 'rgba(240, 240, 240, 0.8)' }}>
            <div className="containe pt-4">
                <nav className="nav justify-content-center mb-2 pt-2">
                    <a className="nav-link mr-4 ml-4 disabled" href="#" style={{color: '#aaa', fontWeight: 'bold'}}>Testemunhos</a>
                    <a className="nav-link mr-4 ml-4 disabled" href="https://www.facebook.com/magnolia.afavel" style={{color: '#aaa', fontWeight: 'bold'}}>Facebook</a>
                    <a className="nav-link mr-4 ml-4 disabled" href="https://twitter.com/magnoli78297555" style={{color: '#aaa', fontWeight: 'bold'}}>Twitter</a>
                    <a className="nav-link mr-4 ml-4 disabled" href="#" style={{color: '#aaa', fontWeight: 'bold'}}>Como ajudar</a>
                    <a className="nav-link mr-4 ml-4 disabled" href="#" style={{color: '#aaa', fontWeight: 'bold'}}>Termos de Uso</a>
                    <a className="nav-link mr-4 ml-4 disabled" href="#" style={{color: '#aaa', fontWeight: 'bold'}}>Política de Privacidade</a>
                </nav>
                <div className="d-flex flex-row">
                    <div className="flex-grow-1">
                        <p className="text-center">&copy;2021 - Squad 3 SP1 - Tarde</p>
                    </div>
                    <div>
                        <img className="mr-1" style={{ width: '20px' }} src="./src/assets/imagens/redesocial01.svg" alt="Rede Social 1" />
                        <img className="mr-1" style={{ width: '20px' }} src="./src/assets/imagens/redesocial02.svg" alt="Rede Social 2" />
                        <img className="mr-1" style={{ width: '20px' }} src="./src/assets/imagens/redesocial03.svg" alt="Rede Social 3" />
                    </div>
                </div>
            </div>
        </footer>
    );
}