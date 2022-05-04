import axios from 'axios';

const base = { source_currency: 'USD', target_currency: 'USDC_EVMOS' };

export const convertValues = ({ isDollar = true, value}: { isDollar: boolean, value: string }) => {
  const data1 = {
    ...base,
    source_amount: value
  };

  const data2 = {
    ...base,
    target_amount: value
  };

  return axios
    .post(
      'https://api-qjoa5a5qtq-uc.a.run.app/quotes',
      isDollar ? data1 : data2
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
};

