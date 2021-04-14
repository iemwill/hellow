import React, { Component } from 'react';
import { 
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaTelegram,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa';
class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="contact">
          <a href="https://facebook.com/will.i.em.93"><FaFacebook/></a>
          <a href="https://wa.me/message/AAIDX7NDPAJ3J1"><FaWhatsapp/></a>
          <a href="https://instagram.com/iemwill"><FaInstagram/></a>
          <a href="https://twitter.com/iem_wll"><FaTwitter/></a>
          <a href="https://github.com/iemwill"><FaGithub/></a>
          <a href="https://t.me/whatuup"><FaTelegram/></a>
          <a href="https://youtube.com/channel/UCQS7y3i2NgtnwF9RheO2oeQ"><FaYoutube/></a>
          <a href="https://linkedin.com/in/w-ll"><FaLinkedin/></a>
          <br/><br/><br/><br/>bitcoin:36NDXbQcRzqDVKBageBcVcjuuCvSnwSYq5
          <br/><br/>ethereum:0x7Cbd7A31cF11643b985DaE722bc996A69eDdC5AF
          <br/><br/>We haven't implemented any cookies nor collecting any data. Thank you for visiting this Application !
        </div>
  	  </section>
    );
  }
}
export default Contact;
