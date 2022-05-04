import React from 'react';

import css from './index.module.css';

type Props = {
  title?: string;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ title = 'Buy Now', onClick }) => {
  return (
    <div className={css.root} onClick={onClick}>
      {title}
    </div>
  );
};

export default Button;
