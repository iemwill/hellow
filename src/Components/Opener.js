import React, { Component } from 'react';
import addWebAppAction from './Cookies/addWebAppAction';
class Opener extends Component {
  render() {  
    return (
      <section id="opener">
        <div className="opener">
          <h3>{this.props.ip}<br/>Your visit was registered at the Ethereum Blockchain <a href="https://ropsten.etherscan.io/address/0x91B245abbDC633A0A7dDC25316476e176D42DCc0" target='_blank' rel='noreferrer'>Ropsten.</a></h3>
          <br/><br/>
          <h1>
          Bitcoin is here to free the people. from corruption, fraud, backdoor agreements, ec. <br/><br/>
          Bitcoin enables open democracy mixed with technocracy. <br/><br/>
          Ethereum can be seen as Bitcoin's twin and a "playground" for more unsecure procedures, not just because it is turing complete. <br/><br/>
          </h1>
          <h2>- for&#40;ever&#41;&#123;young&#125; - <br/><br/></h2>
          <h1><br/><br/> ! Power To The People ! <br/><hr/></h1>
        </div>
  	  </section>
    );
  }
}
export default Opener;