const QuizVoce = () => {
    const [login, setLogin] = React.useState(true);
    const [quiz, setQuiz] = React.useState(0);

    const enviarQuiz = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);

        console.log(formData);

        const url = "" //url da classe do model

        fetch(url, {
            method: "POST",
            body: formData
        }).then((response) => response.json()).then((dados) => {
            setQuiz(2)
            console.log(dados);
        })
    }

    return (
        <React.Fragment>
            { (login === false) &&
                <div className="container my-5 py-5 text-center border w-50" style={{ minHeight: '58vh' }}>
                    <h2 className="mb-5 h1">Olá tudo bem?</h2>
                    <p className="mb-5 px-5" style={{ fontSize: '18px' }}>Você esta prestes a realizar o nosso Quiz, mas antes pedimos para que crie uma conta ou faça o login em nossa plataforma.</p>
                    <button className="btn btn-lg mb-4 w-50 font-weight-bold" style={{ backgroundColor: '#7b98db', color: '#fff' }}>Faça o Login</button>
                </div>
            }
            { (quiz === 0) && login &&
                <div className="container my-5 pt-5 px-5 text-center border w-50" style={{ minHeight: '58vh' }}>
                    <h2 className="mb-5 h1">Olá tudo bem?</h2>
                    <p className="mb-5" style={{ fontSize: '18px' }}>Você esta prestes a realizar o nosso Quiz, pedimos para que você separa de 5 a 10 minutos, para que você possa responder com calma e com sinceridade.</p>
                    <h4 className="mb-4">Vamos começar?</h4>
                    <button className="btn btn-lg w-50 font-weight-bold" onClick={() => { setQuiz(1) }} style={{ backgroundColor: '#7b98db', color: '#fff' }}>Iniciar</button>
                </div>
            }
            { (quiz === 1) && login &&
                <div className="container my-5" style={{ minHeight: '58vh' }}>
                    <h2 className="h1">Sobre você</h2>
                    <p className="mb-5" style={{ fontSize: '18px' }}>Nesta primeira etapa, queremos saber um pouco mais sobre você, então vamos lá?</p>
                    <form onSubmit={enviarQuiz}>
                        <PerguntaComImagem
                            num="1"
                            pergunta="Escolha a cor que representa você:"
                            respostaA="Vermelho."
                            respostaB="Rosa."
                            respostaC="Roxo."
                            respostaD="Verde."
                            respostaE="Azul."
                            imagemA="./src/assets/imagens/vermelhoquiz.png"
                            imagemB="./src/assets/imagens/rosaquiz.png"
                            imagemC="./src/assets/imagens/roxoquiz.png"
                            imagemD="./src/assets/imagens/verdequiz.png"
                            imagemE="./src/assets/imagens/azulquiz.png"
                        />
                        <PerguntaSimples
                            num="2"
                            pergunta="Você gosta que seu parceiro sinta ciúmes de você?"
                            respostaA="Claro! Sem ciúmes, quer dizer que ele não se importa comigo!"
                            respostaB="Claro. É um jeito dele cuidar do que ele têm."
                            respostaC="Gosto. Dá um sentimento bo, de que sou a mulher mais valorizada do mundo!"
                            respostaD="Não me importo. Ouço o que ele diz, mas logo esqueço."
                            respostaE="Não gosto, acho muito chato ouvir esse tipo de cobrança ou brigar por isso."
                        />
                        <PerguntaComImagem
                            num="3"
                            pergunta="Escolha a cena que mais combina com o tipo de relacionamento amoroso você gostaria de viver:"
                            imagemA="https://img.wattpad.com/2860530a658966a6867f7dd6c96512e5e4b759d1/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7a45544f67496956466952415f673d3d2d3536393934343731312e313532626634623936303531343965303638343630393733383634372e676966?s=fit&w=720&h=720"
                            imagemB="https://www.acritica.com/uploads/news/image/596582/show_1.jpg"
                            imagemC="https://i.makeagif.com/media/2-20-2017/AlXHCL.gif"
                            imagemD="https://i.pinimg.com/474x/41/14/aa/4114aa6063cd6835677927340f0d0aaf.jpg"
                            imagemE="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmjSimC3j824FbbtvCnLnasA75Tl2V0EP4w&usqp=CAU"
                        />
                        <PerguntaSimples
                            num="4"
                            pergunta="Qual seria a quantidade de vezes ideal de ver suas amigas (os) por semana para conversar?"
                            respostaA="Todos os dias!"
                            respostaB="4 a 5 vezes por semana"
                            respostaC="3 a 4 vezes por semana"
                            respostaD="Aos finais de semana"
                            respostaE="O importante nem é se encontrar pra conversar, mas ter aquele tempinho no dia a dia pra colocar o papo em dia, nem que for por aplicativo de mensagens."
                            imagem="https://4.bp.blogspot.com/_D7FIFFupHYA/TAaVCM3PajI/AAAAAAAACD0/5lbq9Xr1tJw/s1600/anim_fofocasfofoqueiras.gif"
                            imagemAlt="Ilustração de mulheres conversando"
                        />
                        <PerguntaSimples
                            num="5"
                            pergunta="Você sonhava se casar desde criança?"
                            respostaA="Sim, de véu e grinalda, com uma grande celebração na Igreja e uma festança gigante de recepção."
                            respostaB="Sim, na Igreja e com festa, como é a tradição da minha família."
                            respostaC="Sim, mas no lugar da festa, viajar."
                            respostaD="Me casar nunca foi o principal, sempre me importei mais em achar um parceiro legal."
                            respostaE="Nunca tive essa fantasia. Gostava mais de imaginar sair de casa e ter uma vida melhor."
                            imagem="https://media.giphy.com/media/mZ425OhEp1VhS/giphy.gif"
                            imagemAlt="Noiva em Fuga"
                        />
                        <PerguntaSimples
                            num="6"
                            pergunta="Como é sua relação com a sua mãe?"
                            respostaA="Não a conheci. (Por motivos de abandono ou falecimento precoce materno)."
                            respostaB="Não é muito bom. Temos muitos mágoas que é impossível de conversar."
                            respostaC="Médio. Gosto dela, mas procuro não conviver muito para não ouvir tanta implicância comigo."
                            respostaD="Boa, nos damos bem."
                            respostaE="Muito boa, normalmente a procuro para conselhos."
                        />
                        <PerguntaComImagem
                            num="7"
                            pergunta="Com qual desses personagens você escolheria namorar?"
                            respostaA="Cristian Grey (50 Tons de Cinza)"
                            respostaB="Edward Cullen (Crepúsculo)"
                            respostaC="Edward (Uma Linda Mulher)"
                            respostaD="William Tracker (Um Lugar Chamado Notting Hill)"
                            respostaE="Tim (Questão de Tempo)"
                            imagemA="https://i.pinimg.com/originals/8d/45/0a/8d450af0d7069c75be841f38f703aab8.gif"
                            imagemB="https://i.pinimg.com/originals/f0/5f/57/f05f5716d99bdd8b63679e2a0a0f043a.gif"
                            imagemC="https://i.pinimg.com/originals/ca/b1/c7/cab1c7dd901352040ea7fe9e1c72a21a.gif"
                            imagemD="https://64.media.tumblr.com/d9e5890ba258f912b41cb2ef12099cfd/3700be569f9c78ab-66/s400x600/3a40fc812c37f690b56ef756939ee5958a9bbbe3.gifv"
                            imagemE="https://i.pinimg.com/originals/fa/c2/85/fac285d893594897448836e8fcb4d03c.gif"
                        />
                        <PerguntaSimples
                            num="8"
                            pergunta="Qual é a sua opinião mais frequente sobre os parceiros de suas amigas?"
                            respostaA="'Ela dá muita brecha. Precisa cuidar melhor dele pra não perder!'"
                            respostaB="'Tá na cara que ela não merece ele. Ele é lindo e ela nem tanto.'"
                            respostaC="'Ele deve ser maluquinho igual ela.'"
                            respostaD="'Espero que dessa vez ela tenha escolhido melhor que o anterior.'"
                            respostaE="'Ela é legal demais pra ele.'"
                            imagem="https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif"
                            imagemAlt="Mulher pensativa"
                        />
                        <PerguntaComImagem
                            num="9"
                            pergunta="Qual cor você usa para definir o amor?"
                            respostaA="Vermelho"
                            respostaB="Rosa"
                            respostaC="Roxo"
                            respostaD="Lilás"
                            respostaE="Dourado"
                            imagemA="./src/assets/imagens/vermelhoquiz.png"
                            imagemB="./src/assets/imagens/rosaquiz.png"
                            imagemC="./src/assets/imagens/roxoquiz.png"
                            imagemD="./src/assets/imagens/lilasquiz.png"
                            imagemE="./src/assets/imagens/douradoquiz.png"

                        />
                        <PerguntaSimples
                            num="10"
                            pergunta="Quantos relacionamentos você já 'estragou'?"
                            respostaA="'Nossa, nem foram muitos, mas empre faço muita besteira e o cara me deixa.'"
                            respostaB="'Alguns, até tento me policiar pra não fazer bobagens que desagradem ele, mas acabo relaxando e fazendo."
                            respostaC="'Não cheguei a estragar, mas acabo irritando demais os caras.'"
                            respostaD="'Não sei se estraguei, acho mais que foi uma combinação errada de duas pessoas que não era para estarem juntas.'"
                            respostaE="'Não sei se estraguei, sempre dei o meu melhor. Creio que ele fez mais coisas para que o relacionamento acabasse.'"
                        />
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-lg w-25 font-weight-bold" onClick={() => { setQuiz(2) }} style={{ backgroundColor: '#7b98db', color: '#fff' }}>Enviar</button>
                            <button className="btn border" onClick={() => { setQuiz(0) }} style={{ backgroundColor: 'rgba(0,0,0,0)', color: '#7b98db' }}>Cancelar</button>
                        </div>
                    </form>
                </div>
            }
            { (quiz === 2) && login &&
                <div className="container my-5 py-5 text-center border w-50" style={{ minHeight: '58vh' }}>
                    <h2 className="mb-5 h1">Que bom que você chegou até aqui!</h2>
                    <h4 className="mb-2"> Estávamos a sua espera.</h4>
                    <p className="mb-3 px-5" style={{ fontSize: '18px' }}>
                        Conseguimos identificar alguns pontos importantes sobre você e/ou sobre seu relacionamento que nos
                        levaram a decisão de te contatar para uma conversa entre amigas, com café e bolo. Que tal? Qual
                        melhor horário do dia para te ligarmos?
                    </p>
                    <form>
                        <div className="d-flex justify-content-center mb-3">
                            <div className="form-check mx-2">
                                <input className="form-check-input" type="checkbox" name="horario" id="manha" value="manha" />
                                <label className="form-check-label" htmlFor="manha">Manhã</label>
                            </div>
                            <div className="form-check mx-2">
                                <input className="form-check-input" type="checkbox" name="horario" id="tarde" value="tarde" />
                                <label className="form-check-label" htmlFor="tarde">Tarde</label>
                            </div>
                            <div className="form-check mx-2">
                                <input className="form-check-input" type="checkbox" name="horario" id="noite" value="noite" />
                                <label className="form-check-label" htmlFor="noite">Noite</label>
                            </div>
                        </div>
                        <button className="btn btn-lg mb-3" style={{ backgroundColor: '#7b98db', color: '#fff' }}>Até breve!</button>
                    </form>


                </div>
            }
        </React.Fragment>

    );
}