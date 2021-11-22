import React from 'react';
import styles from '../styles/Styles.module.css';
import word from '../imgs/word.png';
import pontos from '../imgs/pontos.png';
import curtir from '../imgs/curtir.png';
import coracao from '../imgs/coracao.png';
import compartilhar from '../imgs/compartilhar.png';
import comentar from '../imgs/comentario.png';
import like from '../imgs/like.png';
import Btns from './Btns';

const Post = ({
  avatar,
  usuario,
  conteudo,
  banner,
  likes,
  comentario,
  compartilhamento,
  comentarios,
}) => {
  const [curtidas, setCurtidas] = React.useState(likes);
  const [coment, setComent] = React.useState(false);
  const comments = React.useState(comentario);
  const [shares, setShares] = React.useState(compartilhamento);
  


  function wrapLine(content) {
    const wrap = content.split('<br/>').join('<br/>');
    return wrap;
  }
  function likeClick() {
    setCurtidas(curtidas + 1);
  }

  function sharesClick() {
    setShares(shares + 1);
  }

  function onComments() {
    const posts = (
      <div>
       <div>
          {comentarios.map((usuario, index) => (
            <div key={index}>
              <div className={styles.comentarios}>
                <img src={usuario.user.avatar} alt="avatar" />
                  <div>
                    <a href="#">{usuario.user.name}</a>
                    <p>{usuario.content}</p>
                  </div>  
              </div>
            </div>
          ))}
        </div>
      </div>
    );
    if (!coment) {
      return setComent(posts);
    } else {
      return setComent(null);
    }
  }

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.header}>
          <img className={styles.avatar} src={avatar} alt="avatar" />
          <div>
            <h2>{usuario}</h2>
            <div className={styles.patrocinado}>
              <p>Patrocinado</p>
              <img src={word} alt="word" />
            </div>
          </div>
          <img className={styles.pontos} src={pontos} alt="" />
        </div>
        <p
          className={styles.conteudo}
          dangerouslySetInnerHTML={{ __html: wrapLine(conteudo) }}
        ></p>
        <img className={styles.banner} src={banner} alt="imagem publicidade" />
        <div className={styles.contagem}>
          <div className={styles.likes}>
            <img className={styles.curtir} src={curtir} alt="curtida" />
            <img className={styles.coracao} src={coracao} alt="amei" />
            <span>{curtidas}</span>
          </div>
          <div className={styles.shares}>
            <label comentsShare="comentar" >{comments}</label>
            <input  className={styles.comentar} onClick={onComments} type="button" value="comentarios" id="comentar"/>
            <label comentsShare="shares">{shares}</label>
            <input
              className={styles.comentar} type="button" value="compartilhamentos"/>
          </div>
        </div>

        <div className={styles.btns}>
          <Btns id="like" src={like} value="like" onClick={likeClick}/>
          <Btns id="comentar" src={comentar} value="Comentar" onClick={onComments}/>
          <Btns id="shares" src={compartilhar} value="Compartilhar" onClick={sharesClick}/>
        </div>

        <div>{coment}</div>
      </div>
    </section>
  );
};

export default Post;


