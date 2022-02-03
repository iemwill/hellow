import React, { Component } from 'react';
import addWebAppAction from '../Backend/Cookies/addWebAppAction';
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
    if (this.props.count == 2) {
      addWebAppAction('HiddenIP', buttonID, this.props.sessionID);
    } else {
      addWebAppAction(this.props.ip, buttonID, this.props.sessionID);      
    }
  }
  render() {
    return (
      <section id="contact">
        <div className="contact">
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <a href="https://wa.me/message/AAIDX7NDPAJ3J1" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(4)}><FaWhatsapp/></a>
          <a href="https://twitter.com/iem_wll" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(5)}><FaTwitter/></a>
          <a href="https://github.com/iemwill" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(6)}><FaGithub/></a>
          <a href="https://t.me/whatuup" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(7)}><FaTelegram/></a>
          <a href="https://linkedin.com/in/w-ll" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(8)}><FaLinkedin/></a>
          <br/><br/><br/><br/><br/><br/>
        </div>
        <div id="c0n74c7">
          <a id="bitcoin" href="mailto:hello@laubenheimer.eu" 
            onClick={() => this._addWebAppAction(9)}>Inspirator</a>
          <a href="mailto:hello@laubenheimer.eu"
            onClick={() => this._addWebAppAction(9)}> & </a>
          <a id="ethereum" href="mailto:hello@laubenheimer.eu"
            onClick={() => this._addWebAppAction(9)}>Consultent</a>
          <br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><a id="bank" href="bank:DE75100100100959924103"
            onClick={() => this._addWebAppAction(10)}>DE75100100100959924103</a>
          <br/><br/><a id="bitcoin" href="bitcoin:bc1qmupy24nxjr822smvq8a2x33vd5tc6dth56p897"
            onClick={() => this._addWebAppAction(11)}>bc1qmupy24nxjr822smvq8a2x33vd5tc6dth56p897</a>
          <br/><br/><a id="ethereum" href="ethereum:0xc3577e1BF219c041306dDa4689a1D1Fb531329A0"
            onClick={() => this._addWebAppAction(12)}>0xc3577e1BF219c041306dDa4689a1D1Fb531329A0</a>
          <br/><br/>
          <hr/><br/>Testnet-Token: <a href="https://ropsten.etherscan.io/address/0x2f6041024c4846A817CaB429e83c6cDCeC22F653" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(13)}>0x2f6041024c4846A817CaB429e83c6cDCeC22F653</a> on Ropsten
          <br/><br/>NFT-Register: <a href="https://ropsten.etherscan.io/address/0x1CE8ac1E22DAf01406F2AdBaB87CF94516d068Eb" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(14)}>0x1CE8ac1E22DAf01406F2AdBaB87CF94516d068Eb</a> on Ropsten
          <br/><br/>
          <hr/><br/>We collect innovative and open source, as well as the code to these lines here, every click action and anonymized ip-address.<br/>
          To see how and where the data is collected click the "Ropsten"-link on top.<br/>
          Thank you for visiting this Application !
        </div>
  	  </section>
    );
  }
}
export default Contact;
