import * as React from 'react';

import './info-container.css';

interface IInfoContainerProps {
  
}

const InfoContainer:React.FC<IInfoContainerProps> = (props) => {
    return <div className="info-container">{props.children}</div>
}

export default InfoContainer;
