import React from 'react';

import Contador from './Contador';
import '../assets/css/App.css';

export default class App extends React.Component{
  render (){
    return (
    <div className="container">
      <h1>React aplicado ao Contador</h1>
      <Contador/>
    </div>
    )
  }
}
