import React from 'react';
import FeeValue from './../feeValue/index';

import css from './index.module.css';

type Props = {
  firstVal: number;
  secondVal: number;
};

const Fees: React.FC<Props> = ({ firstVal, secondVal }) => {
  return (
    <div className={css.root}>
      <p className={css.title}>Fees</p>
      <div className={css.feesCalc}>
        <FeeValue val={firstVal} name='Network Fee' />
        <span className={css.operator}>+</span>
        <FeeValue val={secondVal} name='C14 Fee' />
        <span className={css.operator}>=</span>
        <FeeValue val={+(firstVal + secondVal).toFixed(2)} name='Total Fee' />
      </div>
    </div>
  );
};

export default Fees;
