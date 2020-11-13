import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toMainPage } from '../../../../services/navigation/actions';

import './back-btn.css';

const BackBtn:React.FC = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const goToMainPage = () => {
    dispatch(toMainPage());
    history.push('/');
  }
  return (
      <button className="back-btn" type="button" onClick={goToMainPage}>Search</button>
  )
}

export default BackBtn;
