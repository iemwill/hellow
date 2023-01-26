import React, { Component } from 'react';
import addWebAppAction from '../Backend/NFT/addWebAppAction';
import { 
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
class Contact extends Component {
  constructor() {
    super();
  }
  _addWebAppAction (buttonID) {
    addWebAppAction(buttonID, this.props.sessionID);
  }
  render() {
    return (
      <section id="contact">
        <div className="contact">
          <h2>Analysis | Consultancy | Design | Development | Education </h2>
          <br/><br/><br/><br/><br/>
          <a href="https://wa.me/message/AAIDX7NDPAJ3J1" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(1)}><FaWhatsapp/></a>
          <a href="https://twitter.com/iem_wll" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(2)}><FaTwitter/></a>
          <a href="https://github.com/iemwill" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(3)}><FaGithub/></a>
          <a href="https://t.me/whatuup" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(4)}><FaTelegram/></a>
          <a href="https://linkedin.com/in/w-ll" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(5)}><FaLinkedin/></a>
          <br/><br/><br/><br/>
        </div>
        <div id="c0n74c7">
          <a href="mailto:hello@laubenheimer.eu" 
            onClick={() => this._addWebAppAction(6)}><h3>Inspirator</h3></a>
          <a href="mailto:hello@laubenheimer.eu"
            onClick={() => this._addWebAppAction(7)}><h3> & </h3></a>
          <a href="mailto:hello@laubenheimer.eu"
            onClick={() => this._addWebAppAction(8)}><h3>Consultent</h3></a>
          <br/><br/><br/><br/>
          <h3>
            Congratulations! You have created an address for ethereum and minted a NFT <br/><br/>
            The private key to manifest ownership will show up below, best praxis is to write it on a paper (doublecheck)<br/><br/>
            For more information, workshop & project requests as well as how to claim new generated ERC20-tokens 
            please write an email via the <br/><br/>
            <a href="mailto:hello@laubenheimer.eu"
            onClick={() => this._addWebAppAction(9)}> 'Inspirator & Consultent' - button</a>
            <br/><br/><br/><br/><br/>
            {this.props.seed}
          </h3>
        </div>
      </section>
    );
  }
}
export default Contact;