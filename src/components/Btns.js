import React from 'react';
import styles from '../styles/Styles.module.css';

const Btns = ({ id, src, value, onClick }) => {
  return (
    <div>
      <label comentsShare={id}>
        <img src={src} />
      </label>
      <input type="button" value={value} className={styles.comentar} onClick={onClick}/>
    </div>
  );
};

export default Btns;

