import { Component } from 'react';
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
  async _addWebAppAction (buttonID) {
    try {
      if(this.props.customerAccount == "Your connected address will show up here")
        addWebAppAction(buttonID, "0x45e16b7B5799fd41B02Fee05e6A9BCD202208B28", this.props.userAccount, this.props.sessionID);
      else
        addWebAppAction(buttonID, this.props.customerAccount, 0, this.props.sessionID);
    } catch(error) {
      console.log("Error addWebAppAction: " + error);
    }
  }
  render() {
      if (this.props.customerAccount == "Your connected address will show up here") {
      this.state.text = 
        <h3>
          Congratulations! You have created an address for ethereum and minted a NFT<br/><br/>
          The private key to manifest ownership will show up below, best praxis is to write it on a paper<br/><br/>
          For workshop & project requests as well as how to claim the newly generated NFT & ERC20-Tokens 
          contact us via the
          <br/><br/>
          <a href="mailto:hello@laubenheimer.eu"
          onClick={() => this._addWebAppAction(6)}> 'Inspirator & Consultent' - button</a>
          <br/><br/><br/>
          <h4>{this.props.seed}</h4>
        </h3>
    } else {
      this.state.text = 
        <h3>
          Congratulations! You have minted a 
            <a href="https://moonscan.io/address/0x6C9D8a2Ff94D84679383DC06646165743B766940"
              onClick={() => this._addWebAppAction(7)} target="_blank" rel="noreferrer">Website NFT</a> 
          on the polkadot moonbeam network<br/><br/>
          The NFT will be accessible through your wallet provider. Every click-action on this site will create ERC20-token<br/><br/>
          To enhance & exchange your knowledge in web3, blockchain technology, solidity and for project requests contact via the<br/><br/>
          <a href="mailto:hello@laubenheimer.eu"
          onClick={() => this._addWebAppAction(8)}>'Inspirator & Consultent' - button</a>
          <br/><br/><br/>
          {this.props.customerAccount}
        </h3>
    }
    return (
      <section id="contact">
        <div id="contact-top">
          <h2>Analyze | Consult | Design | Develop | Educate </h2>
          <a href="https://wa.me/message/AAIDX7NDPAJ3J1" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(1)}><FaWhatsapp/></a>
          <a href="https://twitter.com/iem_wll" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(2)}><FaTwitter/></a>
          <a href="https://github.com/iemwill" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(3)}><FaGithub/></a>
          <a href="https://t.me/iemwill" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(4)}><FaTelegram/></a>
          <a href="https://linkedin.com/in/w-ll" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(5)}><FaLinkedin/></a>
        </div>
        <div id="c0n74c7">
          <a href="mailto:hello@laubenheimer.eu" 
            onClick={() => this._addWebAppAction(9)}><h3>Inspirator<br/>&<br/>Consultent</h3></a>
        </div>
        <div id="text">
          {this.state.text}
        </div>
      </section>
    );
  }
}
export default Contact;