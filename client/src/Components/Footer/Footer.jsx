/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import Logo from "../../assets/images/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content pt-5 pb-1">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>ItemsDeQualité</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">A propos de nous</a>
                  </li>
                  <li>
                    <a href="#">Notre galerie</a>
                  </li>
                  <li>
                    <a href="#">Processus de sélection</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>

                  <li>
                    <a href="#">Notre politique</a>
                  </li>
                  <li>
                    <a href="#">Notre team</a>
                  </li>
                  <li>
                    <a href="#">Contactez nous</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Contactez-nous</h3>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <i className="fab fa-telegram-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright &copy; 2023, Tout droit réservé.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
