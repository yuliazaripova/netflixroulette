import * as React from 'react';
import Logo from '../../components/logo';
import BackBtn from '../../components/back-btn';

import './header.css';

interface IHeader {
  renderBtn?: boolean,
  onClick?: () => void
 
}

const Header:React.FC<IHeader> = ({renderBtn, onClick}) => {
  let btn:React.ReactNode;
  if (renderBtn) {
    btn = <BackBtn onClick={onClick}/>
  } 
  return(
    <header>
      <Logo />
      {btn}
    </header>
  )
}

export default Header;
