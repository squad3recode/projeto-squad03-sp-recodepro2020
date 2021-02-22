import React from 'react';

const PerguntaSimples = (props) => {
    return (
        <div className="d-flex mb-5 border px-5">
            <div className="form-group w-75" >
                <h3 className="my-4 w-100 pr-5">{props.num}. {props.pergunta}</h3>
                <div className="form-check my-1">
                    <input className="form-check-input" type="radio" name={props.num} id={props.num+"a"} value="a" />
                    <label className="form-check-label w-75" htmlFor={props.num+"a"}>{props.respostaA}</label>
                </div>
                <div className="form-check my-1">
                    <input className="form-check-input" type="radio" name={props.num} id={props.num+"b"} value="b" />
                    <label className="form-check-label w-75" htmlFor={props.num+"b"}>{props.respostaB}</label>
                </div>
                <div className="form-check my-1">
                    <input className="form-check-input" type="radio" name={props.num} id={props.num+"c"} value="c" />
                    <label className="form-check-label w-75" htmlFor={props.num+"c"}>{props.respostaC}</label>
                </div>
                <div className="form-check my-1">
                    <input className="form-check-input" type="radio" name={props.num} id={props.num+"d"} value="d" />
                    <label className="form-check-label w-75" htmlFor={props.num+"d"}>{props.respostaD}</label>
                </div>
                <div className="form-check my-1">
                    <input className="form-check-input" type="radio" name={props.num} id={props.num+"e"} value="e" />
                    <label className="form-check-label w-75" htmlFor={props.num+"e"}>{props.respostaE}</label>
                </div>
            </div>
            {props.imagem && <img className="my-auto" src={props.imagem} alt={props.imagemAlt} style={{height: '30vh'}} />}
        </div>
    );
}

export default PerguntaSimples;