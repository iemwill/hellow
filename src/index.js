import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import EthereumDataMin from './Components/EthereumDataMin';
import Contact from './Components/Contact';

class Application extends Component {
  render() {
    return (
      <div className="App">
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
