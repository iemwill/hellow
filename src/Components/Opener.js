import React, { Component } from 'react';
import publicIP from 'react-native-public-ip';

class Opener extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      ip: 'Your ip address could not be set. Maybe your privacy settings, well done :)'
    }
  }
  render() {
  publicIP()
    .then(ip => {
      const count = 1;
      this.setState({count, ip});
    })
    .catch(error => {
      console.log(error);
      // 'Unable to get IP address.'
    });
    return (
      <section id="opener">
        <div className="opener">
        <h3>{this.state.ip}</h3>
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