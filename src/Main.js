//@ts-check
import { useState } from "react";
import seta from "./images/play-outline.svg";
import setinha from "./images/setinha.png"

const deck = [
  {
    nome: <p>Pergunta 1</p>,
    img: <img src={seta} />,
    perguntaFrente: <p>O que é JSX?</p>,
    id: 1,
    perguntaCosta: <p>Uma extensão de linguagem do JavaScript</p>,
    imgCard: <img src={setinha} />
  },
  {
    nome: <p>Pergunta 2</p>,
    img: <img src={seta} />,
    perguntaFrente: <p>O React é __</p>,
    id: 2,
    perguntaCosta: <p>uma biblioteca JavaScript para construção de interfaces</p>,
    imgCard: <img src={setinha} />
  },
  {
    nome: <p>Pergunta 3</p>,
    img: <img src={seta} />,
    perguntaFrente: <p>Componentes devem iniciar com __</p>,
    id: 3,
    perguntaCosta: <p>Letra maiúscula</p>,
    imgCard: <img src={setinha} />
  },
  {
    nome: <p>Pergunta 4</p>,
    img: <img src={seta} />,
    perguntaFrente: <p>Podemos colocar __ dentro do JSX</p>,
    id: 4,
    perguntaCosta: <p>expressões</p>,
    imgCard: <img src={setinha} />
  },
  {
    nome: <p>Pergunta 5</p>,
    img: <img src={seta} />,
    perguntaFrente: <p>O ReactDOM nos ajuda __</p>,
    id: 5,
    perguntaCosta: <p>nteragindo com a DOM para colocar componentes React na mesma</p>,
    imgCard: <img src={setinha} />
  },
  {
    nome: <p>Pergunta 6</p>,
    img: <img src={seta} />,
    perguntaFrente: <p>Usamos o npm para __</p>,
    id: 6,
    perguntaCosta: <p>gerenciar os pacotes necessários e suas dependências</p>,
    imgCard: <img src={setinha} />
  },
  {
    nome: <p>Pergunta 7</p>,
    img: <img src={seta} />,
    perguntaFrente: <p>Usamos props para __</p>,
    id: 7,
    perguntaCosta: <p>passar diferentes informações para componentes</p>,
    imgCard: <img src={setinha} />
  },
  {
    nome: <p>Pergunta 8</p>,
    img: <img src={seta} />,
    perguntaFrente: <p>Usamos estado (state) para __</p>,
    id: 8,
    perguntaCosta:
        <p>
        dizer para o React quais informações quando atualizadas devem renderizar
        a tela novamente
        </p>,
    imgCard: <img src={setinha} />
  },
];

export default function Main() {
  return (
    <main className="deck">
      {deck.map((item) => (
        <PerguntaItem
          nome={item.nome}
          img={item.img}
          perguntasFrente={item.perguntaFrente}
          perguntasCosta={item.perguntaCosta}
          imgCard={item.imgCard}
        />
      ))}
    </main>
  );
}

function PerguntaItem(props) {
  const [frente, setFrente] = useState(false);
  if (frente) {
    return <div className="perguntasCard">{props.perguntasFrente} {props.imgCard}</div>;
  }
  return (
    <div className="perguntas" onClick={() => setFrente(!frente)}>
      {props.nome} {props.img}
    </div>
  );


}

function PerguntaItem(props){
  const[aberta, setAberta] = useState(false);
  if(aberta){
    return <div className="perguntasCardAberta">{props.perguntaCosta}</div>;
  }
  return (
    <div className="perguntasCard" onClick={()=> setAberta(!aberta)}>{props.perguntasFrente} {props.imgCard}</div>
  )
}