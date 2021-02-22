import React from 'react';

const PerguntaComImagem = (props) => {
    return (
        <div className="d-flex mb-5 border px-5">
            <div className="form-group w-75" >
                <h3 className="my-4 w-100 pr-5">{props.num}. {props.pergunta}</h3>
                <div className="d-inline-block">
                    <div className="d-flex align-items-center form-check my-1">
                        <input className="form-check-input" type="radio" name={props.num} id={props.num+"a"} value="a" />
                        {props.imagemA && <img className="my-auto" src={props.imagemA} alt={props.imagemAltA} style={{ width: '20vw' }} />}
                        <label className="form-check-label ml-4" htmlFor={props.num+"a"}>{props.respostaA}</label>
                    </div>
                    <div className="d-flex align-items-center form-check my-1">
                        <input className="form-check-input" type="radio" name={props.num} id={props.num+"b"} value="b" />
                        {props.imagemB && <img className="my-auto" src={props.imagemB} alt={props.imagemAltB} style={{ width: '20vw' }} />}
                        <label className="form-check-label ml-4" htmlFor={props.num+"b"}>{props.respostaB}</label>
                    </div>
                    <div className="d-flex align-items-center form-check my-1">
                        <input className="form-check-input" type="radio" name={props.num} id={props.num+"c"} value="c" />
                        {props.imagemC && <img className="my-auto" src={props.imagemC} alt={props.imagemAltC} style={{ width: '20vw' }} />}
                        <label className="form-check-label ml-4" htmlFor={props.num+"c"}>{props.respostaC}</label>
                    </div>
                    <div className="d-flex align-items-center form-check my-1">
                        <input className="form-check-input" type="radio" name={props.num} id={props.num+"d"} value="d" />
                        {props.imagemD && <img className="my-auto" src={props.imagemD} alt={props.imagemAltD} style={{ width: '20vw' }} />}
                        <label className="form-check-label ml-4" htmlFor={props.num+"d"}>{props.respostaD}</label>
                    </div>
                    <div className="d-flex align-items-center form-check my-1">
                        <input className="form-check-input" type="radio" name={props.num} id={props.num+"e"} value="e" />
                        {props.imagemE && <img className="my-auto" src={props.imagemE} alt={props.imagemAltE} style={{ width: '20vw' }} />}
                        <label className="form-check-label ml-4" htmlFor={props.num+"e"}>{props.respostaE}</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PerguntaComImagem;
