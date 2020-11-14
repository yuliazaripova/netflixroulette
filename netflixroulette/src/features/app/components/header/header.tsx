import * as React from 'react';
import { useSelector } from 'react-redux';
import Logo from '../../../common/components/logo';
import BackBtn from '../../../common/components/back-btn';
import { getPage } from '../../../../services/navigation/selectors';

import './header.css';

const Header:React.FC = () => {
  const page = useSelector(getPage);
  let btn:React.ReactNode;
  if (page === 'movie') {
    btn = <BackBtn/>
  } 
  return(
    <header>
      <Logo />
      {btn}
    </header>
  )
}

export default Header;
