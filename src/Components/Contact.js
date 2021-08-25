import React, { Component } from 'react';
import addWebAppAction from './Cookies/addWebAppAction';
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
          <br/><br/><br/><br/>
        </div>
        <div id="c0n74c7">
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><a id="bitcoin" href="bitcoin:bc1qmupy24nxjr822smvq8a2x33vd5tc6dth56p897"
            onClick={() => this._addWebAppAction(9)}>bc1qmupy24nxjr822smvq8a2x33vd5tc6dth56p897</a>
          <br/><br/><a id="ethereum" href="ethereum:0x7Cbd7A31cF11643b985DaE722bc996A69eDdC5AF"
            onClick={() => this._addWebAppAction(10)}>0x7Cbd7A31cF11643b985DaE722bc996A69eDdC5AF</a>
          <br/><hr/>We collect innovative and open source, as well as the code to these lines here, every click action and your ip-address.<br/>
          To see how and where the data is collected click the "Ropsten"-link on top.<br/>
          Thank you for visiting this Application !
        </div>
  	  </section>
    );
  }
}
export default Contact;