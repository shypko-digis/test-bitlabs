import React, { BaseSyntheticEvent, useEffect, useState } from 'react';

import Fees from '../../components/fees';
import Input from './../../components/input/index';
import Button from '../../components/button';

import { convertValues } from '../../api/api';

import uv from '../../img/uv.png';
import us from '../../img/us.png';

import css from './index.module.css';

type Props = {
  title: string;
};

const Modal: React.FC<Props> = ({ title }) => {
  const [firstVal, setFirstVal] = useState(100);
  const [secondVal, setSecondVal] = useState(0);
  const [otherData, setOtherData] = useState({
    absolute_internal_fee: '0',
    fiat_blockchain_fee: '0'
  });

  useEffect(() => {
    countValues(100, true);
  }, []);

  const onChangeFirst = async (e: BaseSyntheticEvent, isFirst = false) => {
    const newVal = e?.target?.value;
    newVal && countValues(newVal, isFirst);
  };

  const countValues = async (val: number, isFirstVal = false) => {
    (isFirstVal && setFirstVal(val)) || setSecondVal(val);
    const data = await convertValues({ isDollar: isFirstVal, value: val + '' });
    if (!!data) {
      setOtherData(data);
      (isFirstVal && setSecondVal(data.target_amount)) ||
        setFirstVal(data.source_amount);
    }
  };

  return (
    <div className={css.root}>
      <h2 className={css.title}>{title}</h2>
      {(firstVal < 20 || secondVal < 20) && (
        <p className={css.err}>{'Value must be more then 20'}</p>
      )}
      <Input
        id='usd'
        name='You pay'
        value={firstVal}
        currency='usd'
        onChange={(e) => onChangeFirst(e, true)}
        icon={<img className={css.arr} src={us} alt='' />}
      />
      <Fees
        firstVal={+otherData.absolute_internal_fee}
        secondVal={+otherData.fiat_blockchain_fee}
      />
      <Input
        id='crypta'
        name='You Receive'
        value={secondVal}
        currency='usd'
        onChange={(e) => onChangeFirst(e, false)}
        icon={<img className={css.arr} src={uv} alt='' />}
      />
      <Button />
    </div>
  );
};

export default Modal;
