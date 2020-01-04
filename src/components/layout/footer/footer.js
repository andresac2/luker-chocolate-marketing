import React from 'react'
import logo from '../../../assets/img/Lukerlogo.svg'
import { Link, withRouter } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { NewContact } from '../../../commons/services/emblueService';
import { notification } from 'antd';

import termsConditions from '../../../assets/documents/policies/Términos y condiciones de uso sitio web CasaLuker inglés 16dic2019.pdf';
import privacyPolicy from '../../../assets/documents/policies/Política privacidad sitio web CasaLuker inglés 16dic2019.pdf';
import antiFraud from '../../../assets/documents/policies/Política antifraude y anticorrupción inglés 16dic2019.pdf';
import dataTreatment from '../../../assets/documents/policies/Política tratamiento datos personales CasaLuker inglés 16dic2019.pdf';

class Footer extends React.Component {
  hideNews = ['moulding', 'dosing', 'panning', 'cocoa-powder', 'casaluker', 'our-services'];//VIstas en las que se ocukta el newsletter
  constructor(props) {
    super(props);
    this.state = {
      emailNewsletter: '',
      newsletterWaiting: false
    };
    this.handleChangeNews = this.handleChangeNews.bind(this);
    this.registerEmailNewsletter = this.registerEmailNewsletter.bind(this);
  }

  handleChangeNews(event) {
    this.setState({ emailNewsletter: event.target.value });
  }

  registerEmailNewsletter(e) {
    e.preventDefault();
    this.setState({ newsletterWaiting: true });
    NewContact(this.state.emailNewsletter).then((response) => this.openNotification(response))
  }

  openNotification = (data) => {
    console.log(data);
    if (data.AggregatedGroups) {
      if (data.Description === "preexistente") {
        notification.warning({
          message: "Already did it",
          description:
            "the email is already registered"
        });
      } else {
        notification.success({
          message: "Welcome to our online community!",
          description:
            "From now on you'll receive top info and news about the world of chocolate",
        });
        this.setState({ emailNewsletter: '' });
      }
    } else {
      notification.error({
        message: "Oh well, something failed",
        description:
          "Please try again"
      });
    }
    this.setState({ newsletterWaiting: false });
  };

  render() {
    const { mode, history } = this.props;
    const { emailNewsletter, newsletterWaiting } = this.state;
    const isNewsletterHidden = this.hideNews.some(function (v) { return history.location.pathname.includes(v); });
    return (
      <div>
        <div className={`footer-component ${mode == 'vertical' && 'footer-component-vertical'} ${mode == 'responsive' && 'footer-component-responsive'}`}>
          <div className="footer-component-logo">
            <Link to="/" className="logo"> <img src={logo} alt="Logo Luker" /></Link>
          </div>
          {mode === 'responsive' &&
            <div className="footer-component-social--btn">
              <a href="https://www.linkedin.com/company/lukerchocolate/" target="_blank" ><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/lukerchocolate/" target="_blank" ><FaInstagram /></a>
              <a href="https://www.facebook.com/LukerChocolate/" target="_blank" ><FaFacebookF /></a>
            </div>}
          <div className="footer-component-data">
            <h2>LUKER CHOCOLATE COLOMBIA</h2>
            <ul>
              <li><a href="https://goo.gl/maps/6Ni5hcRznH8yMznv9" target="_blank">Calle 13 # 68-98</a></li>
              <li>Bogotá, Colombia</li>
              <li><a href="mailto:lukercacao@lukerchocolate.com" target="_blank">lukercacao@lukerchocolate.com</a></li>
              <li><a href="tel:+57(1) 4473700">+57(1) 4473700</a></li>
            </ul>
          </div>
          <div className="footer-component-data">
            <h2>LUKER CHOCOLATE EUROPE</h2>
            <ul>
              <li><a href="https://goo.gl/maps/FvoAnbZQjSMxdRn48" target="_blank">Kortrijksesteenweg 1132</a></li>
              <li>9051 Sint-Denjis-Westrem, Belgium</li>
              <li><a href="mailto:lukereu@lukerchocolate.com" target="_blank">lukereu@lukerchocolate.com</a></li>
              <li><a href="tel:+32(0) 9 2450460">+32(0) 9 2450460</a></li>
            </ul>
          </div>
          {mode === 'vertical' &&
            <div className="footer-component-data">
              <h2>OUR POLICIES</h2>
              <ul>
                <li><a href={termsConditions} target='_blank'>Terms and conditions</a></li>
                <li><a href={privacyPolicy} target='_blank'>Website Privacy Policy</a></li>
                <li><a href={antiFraud} target='_blank'>Anti-fraud and Anti-corruption policy</a></li>
                <li><a href={dataTreatment} target='_blank'>Personal data processing policy</a></li>
              </ul>
            </div>
          }
          <div className="footer-component-link">
            <Link to="/work-with-us">WORK WITH US</Link>
            <Link to="/contact-us">CONTACT US</Link>
            <Link to="/blog">VISIT OUR BLOG</Link>
          </div>
          {(!isNewsletterHidden && mode !== 'responsive') && <div className="footer-component-social">
            <h2>JOIN OUR NEWSLETTER</h2>
            <form onSubmit={this.registerEmailNewsletter}>
              <input type="email" name="email" placeholder="Give us your email!" value={emailNewsletter} onChange={this.handleChangeNews} />
              <input type="submit" value="Send" disabled={newsletterWaiting} />
            </form>
            <div className="footer-component-social--btn">
              <a href="https://www.linkedin.com/company/lukerchocolate/" target="_blank" ><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/lukerchocolate/" target="_blank" ><FaInstagram /></a>
              <a href="https://www.facebook.com/LukerChocolate/" target="_blank" ><FaFacebookF /></a>
            </div>
          </div>}
        </div>
        {(mode === 'vertical' || mode === 'responsive') &&
          <div className="footer-component-bkg" onClick={this.props.handleShowMoreInfo}></div>
        }
      </div>
    )
  }
}

export default withRouter(Footer);