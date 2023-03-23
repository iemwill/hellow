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
    this.state = {
      text: { },
    }
  }
  _addWebAppAction (buttonID) {
    try {
      if(this.props.customerAccount == "Your connected address will show up here")
        addWebAppAction(buttonID, "0x77754bdda8a6391f340bb2ffe2da6a58a30b7228", this.props.sessionID);
      else
        addWebAppAction(buttonID, this.props.customerAccount, this.props.sessionID);
    } catch(e) {
      console.log("Error addWebAppAction: " + e);
    }
  }
  render() {
      if (this.props.customerAccount == "Your connected address will show up here") {
      this.state.text = 
        <h3>
          Congratulations! You have created an address for ethereum and minted a NFT<br/><br/>
          The private key to manifest ownership will show up below, best praxis is to write it on a paper<br/><br/>
          For workshop & project requests as well as how to claim the newly generated NFT & ERC20-tokens 
          write an email via the<br/><br/>
          <a href="mailto:hello@laubenheimer.eu"
          onClick={() => this._addWebAppAction(9)}> 'Inspirator & Consultent' - button</a>
          <br/><br/><br/><br/><br/>
          {this.props.seed}
        </h3>
    } else {
      this.state.text = 
        <h3>
          Congratulations! You have minted a 
            <a href="https://moonbase.moonscan.io/address/0x7436841fcf89cad2ca359a489924d5b5cf08804c"
              onClick={() => this._addWebAppAction(10)} target="_blank" rel="noreferrer">Website NFT</a> 
          on the moonbase test-network<br/><br/>
          The NFT will be accessible through your wallet provider and every click-action on this site will create ERC20-token<br/><br/>
          To enhance your knowledge in web3, blockchain technology and solidity write a workshop request via the<br/><br/>
          <a href="mailto:hello@laubenheimer.eu"
          onClick={() => this._addWebAppAction(9)}>'Inspirator & Consultent' - button</a>
          <br/><br/><br/><br/><br/>
          {this.props.customerAccount}
        </h3>
    }
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
        </div>
        <div id="text">
          {this.state.text}
        </div>
      </section>
    );
  }
}
export default Contact;