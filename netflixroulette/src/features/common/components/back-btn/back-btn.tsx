import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toMainPage } from '../../../../services/navigation/actions';

import './back-btn.css';

const BackBtn:React.FC = () => {
  const dispatch = useDispatch();
  const goToMainPage = () => {
    dispatch(toMainPage());
  }
  return (
      <Link to="/"><p className="back-btn" onClick={goToMainPage}>Search</p></Link>
  )
}

export default BackBtn;
