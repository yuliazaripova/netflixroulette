import * as React from 'react';

interface IMainContentProps {

}

const MainContent:React.FC<IMainContentProps> = (props) => {
  return (
    <main>{props.children}</main>
  )
}

export default MainContent;
