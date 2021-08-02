import React, { Component } from 'react';
import { 
  FaWhatsapp,
  FaGithub,
  FaTwitter,
  FaTelegram,
  FaLinkedin,
} from 'react-icons/fa';
class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="contact">
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <a href="https://wa.me/message/AAIDX7NDPAJ3J1" target="_blank" rel='noreferrer'><FaWhatsapp/></a>
          <a href="https://twitter.com/iem_wll" target="_blank" rel='noreferrer'><FaTwitter/></a>
          <a href="https://github.com/iemwill" target="_blank" rel='noreferrer'><FaGithub/></a>
          <a href="https://t.me/whatuup" target="_blank" rel='noreferrer'><FaTelegram/></a>
          <a href="https://linkedin.com/in/w-ll" target="_blank" rel='noreferrer'><FaLinkedin/></a>
          <br/><br/><br/><br/>
        </div>
        <div id="c0n74c7">
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><a id="bitcoin" href="bitcoin:bc1qmupy24nxjr822smvq8a2x33vd5tc6dth56p897">bc1qmupy24nxjr822smvq8a2x33vd5tc6dth56p897</a>
          <br/><br/><a id="ethereum" href="ethereum:0x7Cbd7A31cF11643b985DaE722bc996A69eDdC5AF">0x7Cbd7A31cF11643b985DaE722bc996A69eDdC5AF</a>
          <br/><hr/>We have not implemented any cookies nor collecting any data, except your ip-address. Thank you for visiting this Application !
        </div>
  	  </section>
    );
  }
}
export default Contact;