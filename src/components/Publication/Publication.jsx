import React from 'react';
import T from 'prop-types';
import styles from './Publication.module.css';

const publication = [styles.publication];

const Publication = ({ items }) => {
  const { id, title, text } = items;

  return (
    <article key={id} className={publication}>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
};

Publication.propTypes = {
  items: T.shape({
    id: T.string,
    title: T.string,
    text: T.string,
  }),
};

export default Publication;
