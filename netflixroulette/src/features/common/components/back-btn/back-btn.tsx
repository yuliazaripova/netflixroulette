import * as React from 'react';
import { useDispatch } from 'react-redux';
import { toMainPage } from '../../../../services/navigation/actions';

import './back-btn.css';

const BackBtn:React.FC = () => {
  const dispatch = useDispatch();
  return (
    <button className="back-btn" type="button" onClick={() => dispatch(toMainPage())}>Search</button>
  )
}

export default BackBtn;
