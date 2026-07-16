import { Component } from 'react';
import addWebAppAction from '../Backend/NFT/addWebAppAction';
import { 
  FaLinkedin,
  FaGithub,
  FaInstagram,
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
          <a href="https://moonscan.io/address/0x45e16b7b5799fd41b02fee05e6a9bcd202208b28" target="_blank" rel="laubenheimer.eu">Congratulations!</a> 
          You have created an address for ethereum and minted a NFT<br/><br/>
          The private key to manifest ownership will show up below, best praxis is to write it on a paper<br/><br/>
          For <a href="https://github.com/iemwill/presentations" target="_blank" rel="laubenheimer.eu">workshop </a> & project requests as well as how to claim the newly generated NFT & 
          <a href="https://moonscan.io/token/0x2af0e2dc4d3896dd1c85d9c2c2780aa43ec1486c#transactions" target="_blank" rel="laubenheimer.eu">ERC20-Tokens </a>
          contact us via the
          <br/><br/>
          <a href="mailto:hello@laubenheimer.eu"
          onClick={() => this._addWebAppAction(55)}> 'Inspirator & Consultent' - button</a>
          <br/><br/>or the (social)links above
          <br/><br/><br/>
          <h4>{this.props.seed}</h4>
          <br/><br/>
          :)
        </h3>
    } else {
      this.state.text = 
        <h3>
          Congratulations! You have minted a 
            <a href="https://moonscan.io/address/0x6C9D8a2Ff94D84679383DC06646165743B766940"
              onClick={() => this._addWebAppAction(1000)} target="_blank" rel="noreferrer">Website NFT</a> 
          on the polkadot moonbeam network<br/><br/>
          The NFT will be accessible through your wallet provider. Every click-action on this site will create <a href="https://moonscan.io/token/0x2af0e2dc4d3896dd1c85d9c2c2780aa43ec1486c#transactions">ERC20-token</a><br/><br/>
          To enhance & exchange your knowledge in web3, blockchain technology, solidity and for project requests contact via the<br/><br/>
          <a href="mailto:hello@laubenheimer.eu"
          onClick={() => this._addWebAppAction(555)}>'Inspirator & Consultent' - button</a>
          <br/><br/><br/>
          {this.props.customerAccount}
          <br/><br/>
          :)
        </h3>
    }
    return (
      <section id="contact">
        <div id="contact-top">
          <h3> _hello by Willie Laszlo Laubenheimer (: </h3>        
          <h2>Analyze | Consult | Design | Develop | Educate </h2>
          <a href="https://wa.me/message/AAIDX7NDPAJ3J1" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(100)}><FaWhatsapp/></a>
          <a href="https://instagram.com/official_flexitclothing" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(200)}><FaInstagram/></a>
          <a href="https://github.com/iemwill" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(300)}><FaGithub/></a>
          <a href="https://linkedin.com/in/w-ll" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(400)}><FaLinkedin/></a>
        </div>
        <div id="c0n74c7">
          <a href="mailto:hello@laubenheimer.eu" 
            onClick={() => this._addWebAppAction(555)}><h3>Inspirator<br/>&<br/>Consultent</h3></a>
        </div>
        <div id="text">
          {this.state.text}
        </div>
      </section>
    );
  }
}
export default Contact;