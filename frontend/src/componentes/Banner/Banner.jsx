const Banner = () => {
    return (
        <section className="container-fluid d-flex align-items-end mb-5" style={{height: "85vh", backgroundImage: "url('./src/assets/imagens/banner.png')", backgroundSize: 'cover'}}>
            <button className="btn btn-success btn-lg border-0 mb-4" style={{backgroundColor: "#7b98db", marginLeft: "25vw"}}><b>Realizar o Quiz</b></button>
        </section>
    );
}