import * as React from 'react';

import './back-btn.css';

interface IBackBtn {
  onClick: () => void
}

const BackBtn:React.FC<IBackBtn> = ({onClick}) => {
  return (
    <button className="back-btn" type="button" onClick={onClick}>Search</button>
  )
}

export default BackBtn;
