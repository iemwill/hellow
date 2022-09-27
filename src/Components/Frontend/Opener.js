import React, { Component } from 'react';
import addWebAppAction from '../Backend/Cookies/addWebAppAction';
class Opener extends Component {
  constructor() {
    super();
  }
  _addWebAppAction (buttonID) {
    addWebAppAction(this.props.ip, buttonID, this.props.sessionID);      
  }
  render() {
    return (
      <section id="opener">
        <div className="opener">
          <h3>{this.props.ipp}<br/>Your visit could've been "cookied" anonymized on the RSKsmart Blockchain 
          <a href="https://explorer.testnet.rsk.co/address/0x971f995fd58e79bdf9ca701abe0f0350d90f5682" 
            target='_blank' rel='noreferrer' onClick={() => this._addWebAppAction(1)} > RSK Testnet.
          </a></h3>
          <br/><br/>
          <h1>
          A fair trade satisfies all participants <br/><br/>
          Bitcoin is here to help trade fair <br/><br/>
          Bitcoin enables open democracy mixed with technocracy <br/><br/>
          Ethereum can be seen as Bitcoin's twin and a "playground" for more unsecure procedures, not just because it is turing complete <br/><br/><br/><hr/>
          </h1>
        </div>
  	  </section>
    );
  }
}
export default Opener;