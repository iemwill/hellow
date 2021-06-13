import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import EthereumDataMin from './Components/EthereumDataMin';
import Contact from './Components/Contact';
import Opener from './Components/Opener';

class Application extends Component {
  render() {
    return (
      <div className="App">
        <Opener/>
        <EthereumDataMin/>
        <Contact/>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('Application')
);
