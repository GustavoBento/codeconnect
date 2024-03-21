import './styles.css'
import Capa from "./assets/Capa.png";
import Code from "./assets/code.svg";
import Share from "./assets/share.svg";
import Chat from "./assets/chat.svg";
import Usuario from "./assets/Usuario.svg";

export default function Cards() {
  return (
    <article className="card">
      <div className="card__imagem">
        <img src={Capa} alt="Capa do card" />
      </div>
      <div className="card__conteudo">
        <h3 className="card__conteudo-subtitulo">
          Título do post em duas linhas
        </h3>
        <p className="card__conteudo-paragrafo">Qualquer coisa</p>
      </div>
      <div className="card__rodape">
        <ul>
          <li>
            <img src={Code} alt="Codigos" />
            12
          </li>
          <li>
            <img src={Share} alt="Compartilhar" />
            12
          </li>
          <li>
            <img src={Chat} alt="Comentarios" />
            12
          </li>
        </ul>
        <div className="card__rodape__usuario">
            <img src={Usuario} alt="Foto do usuario" />
            @julio
        </div>
      </div>
    </article>
  );
}
