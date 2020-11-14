import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toMainPage } from '../../../../services/navigation/actions';
import './logo.css';

const Logo:React.FC = () => {
  const dispatch = useDispatch();
  const goToMainPage = () => {
    dispatch(toMainPage());
  }
  return (
    <Link to="/"><h1 className="logo" onClick={goToMainPage}>Netflixroulette</h1></Link>
  )
};

export default Logo;
