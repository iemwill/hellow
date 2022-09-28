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
          <h3>{this.props.ipp}<br/>Your visit could've been "cookied" anonymized on the Polkadot Parachain 
          <a href="https://moonbase.moonscan.io/address/0x48bfb22ebb07d897ceb7b7328400ba3f1651f0ae" 
            target='_blank' rel='noreferrer' onClick={() => this._addWebAppAction(1)} > Moonbase.
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