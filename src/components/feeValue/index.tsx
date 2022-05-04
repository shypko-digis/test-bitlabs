import React from 'react';
import css from './index.module.css';

type Props = {
  name: string;
  val: number;
};

const FeeValue: React.FC<Props> = ({ name, val }) => {
  return (
    <p className={css.root}>
      <span className={css.name}>{name}</span>{' '}
      <span className={css.value}>{val}$</span>
    </p>
  );
};

export default FeeValue;
