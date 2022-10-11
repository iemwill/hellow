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
    addWebAppAction(this.props.ip, buttonID, this.props.sessionID);
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
          <hr/><br/>Testnet - ERC20-Token <br/><br/><a href="https://moonbase.moonscan.io/address/0x2cbf9e49f920a0e46a4f692c156d1a48f17580a3" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(13)}>0x2cbf9e49f920a0e46a4f692c156d1a48f17580a3</a>
          <br/><br/>Testnet - ERC721-NFT <br/><br/><a href="https://moonbase.moonscan.io/address/0x28312e77537805ff9b00c492e675c9711ef314ce" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(14)}>0x28312e77537805ff9b00c492e675c9711ef314ce</a>
          <br/><br/>
          <hr/><br/>Testnet - Education-Token <br/><br/><a href="https://moonbase.moonscan.io/address/0x8902b44e11773531e8cd3e6f08b446b63a6ddc60" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(15)}>0x8902b44e11773531e8cd3e6f08b446b63a6ddc60</a>
          <br/><br/>Testnet - Education-NFT <br/><br/><a href="https://moonbase.moonscan.io/address/0x29974e44cdaf0fb61467013a46e21ef387cfbb16" target="_blank" rel="noreferrer"
            onClick={() => this._addWebAppAction(16)}>0x29974e44cdaf0fb61467013a46e21ef387cfbb16</a>
          <br/><br/>
          <hr/><br/>We collect innovative and open source, as well as the code to these lines here, every click action and anonymized ip-address.<br/>
          To see how and where the data is collected click the "RSKsmart"-link on top.<br/>
          Thank you for visiting this Application !
        </div>
      </section>
    );
  }
}
export default Contact;