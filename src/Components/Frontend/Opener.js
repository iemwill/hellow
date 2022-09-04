import React, { Component } from 'react';
import addWebAppAction from '../Backend/Cookies/addWebAppAction';
class Opener extends Component {
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
      <section id="opener">
        <div className="opener">
          <h3>{this.props.ipp}<br/>Your visit could've been "cookied" anonymized at the Ethereum Blockchain 
          <a href="https://ropsten.etherscan.io/address/0xd2cf9f677f361f23c576825978338c4a21291646" 
            target='_blank' rel='noreferrer' onClick={() => this._addWebAppAction(1)} > Ropsten.
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