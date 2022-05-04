import React, { SyntheticEvent } from 'react';

import arr from '../../img/arr.png';

import css from './index.module.css';

type Props = {
  id: string;
  name: string;
  value: number;
  currency: string;
  icon?: JSX.Element;
  onChange: (e: SyntheticEvent) => void;
};

const Input: React.FC<Props> = ({
  id,
  name,
  value,
  currency,
  icon,
  onChange
}) => {
  return (
    <div className={css.root}>
      <p>{name}</p>
      <div className={css.field}>
        <div className={css.inputWrap}>
          <input
            id={id}
            type='number'
            className={css.input}
            value={value}
            onChange={onChange}
            min={20}
          />
        </div>
        <div className={css.fakeSelect}>
          <p>{currency}</p>
          <p className={css.img}>{icon}</p>
          <p className={css.img}>
            <img src={arr} alt='' />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Input;
