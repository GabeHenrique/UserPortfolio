// Importando o React
import React, { Component } from 'react';
import Header from './components/header/header'
import Main from './main'
import Rodape from "./footer/footer";

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Main />
            <Rodape/>
        </div>
    );
  }
}

export default App;
