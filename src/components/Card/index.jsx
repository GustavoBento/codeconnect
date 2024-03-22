import './styles.css'
// import Capa from "./assets/Capa.png";
import Code from "./assets/code.svg";
import Share from "./assets/share.svg";
import Chat from "./assets/chat.svg";
// import Usuario from "./assets/Usuario.svg";

export default function Card({ id, imagemUrl, titulo, resumo, linhasDeCodigo, compartilhamentos, comentarios, usuarioImagem, usuarioNome }) {
  return (
      <article className="card">
          <div className="card__imagem">
              <img src={imagemUrl} alt='imagem do post' />
          </div>
          <div className='card__conteudo'>
              <div className='conteudo__texto'>
                  <h3>{titulo}</h3>
                  <p>{resumo}</p>
              </div>

              <div className='conteudo__rodape'>
                  <ul>
                      <li>
                          <img src={Code} alt='códigos' />
                          {linhasDeCodigo}
                      </li>
                      <li>
                          <img src={Share} alt='compartilhamentos' />
                          {compartilhamentos}
                      </li>
                      <li>
                          <img src={Chat} alt='comentários' />
                          {comentarios}
                      </li>
                  </ul>

                  <div className='rodape__usuario'>
                      <img src={usuarioImagem} alt='imagem do usuário' />
                      {usuarioNome}
                  </div>
              </div>
          </div>
      </article>
  )
}