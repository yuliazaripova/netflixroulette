import * as React from 'react';

import PageInterface from '../PageInterface';
import Img from '../../assets/webpack.svg';


import './App.css';

export default class App extends React.Component<PageInterface, {}> {
  render() {
    return (<div>
      <img src={Img} alt="logo"/>
      <h1 id="flag">Welcome to React with Typescript</h1>
      <p>The color of this page is: {this.props.color}</p>
    </div>
    );
  }
}
