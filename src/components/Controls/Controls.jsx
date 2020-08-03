import React from 'react';
import styles from './Controls.module.css';

const controls = [styles.controls];
const button = [styles.button];

const Controls = ({ onCounter, numPage, items }) => (
  <section className={controls}>
    <button
      type="button"
      className={button}
      onClick={onCounter}
      disabled={numPage === 1}
    >
      Назад
    </button>

    <button
      type="button"
      className={button}
      onClick={onCounter}
      disabled={numPage === items}
    >
      Вперед
    </button>
  </section>
);

export default Controls;
