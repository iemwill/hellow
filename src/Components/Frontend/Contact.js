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
          <br/><br/><br/><br/><br/><br/>
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
          <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        <div id="c0n74c7">
          <a href="mailto:hello@laubenheimer.eu" 
            onClick={() => this._addWebAppAction(6)}>Inspirator</a>
          <a href="mailto:hello@laubenheimer.eu"
            onClick={() => this._addWebAppAction(7)}> & </a>
          <a href="mailto:hello@laubenheimer.eu"
            onClick={() => this._addWebAppAction(8)}>Consultent</a>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <h3>
            You just have created an address on ethereum and have the right TO USE AND OWN an also 
            new created NFT. <br/><br/><br/>
            The private key is below, WRITE IT ON A PAPER AND DOUBLECHECK.<br/><br/><br/>
            For more information and to claim also generated ERC20-tokens write an email via the <br/><br/><br/>
            <a href="mailto:hello@laubenheimer.eu"
            onClick={() => this._addWebAppAction(9)}> 'Inspirator & Consultent' - button:</a>
           <br/><br/><br/>
            {this.props.seed}
          </h3>
        </div>
      </section>
    );
  }
}
export default Contact;