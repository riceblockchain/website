import React from "react";
import Link from "next/link";
import Signup from "../components/signup";
import Blurbs from "../components/blurbs";
import Footer from "../components/footer";
import icon from '../static/images/icon.svg';
import line from '../static/icons/hr.svg';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="signup">
          <Signup />
        </div>
        <div className="center">
          <img className="logo" src={icon} />
          <span className="title">Rice Blockchain</span>
          <span className="subtitle">Our mission is to demystify the world of blockchains & cryptocurrencies.</span>
          <img className="line" src={line} />
        </div>
        <div className="row-wide">
          <Blurbs />
          <Footer />
        </div>

        <style jsx global>{`

          @import url("https://use.typekit.net/ben1ckd.css");

          html, body {
            width: 100%;
            height: 100%;
            font-family: 'Axia', sans-serif;
          }

          .container {
            margin: 1%;
            display: flex;
            flex-flow: column nowrap;
          }

          a {
            text-decoration: none;
            color: rgba(3, 190, 194, 0.9);
            transition: border 0.15s ease-in-out;
            background: rgba(3, 190, 194, 0.1)
          }

          a:hover {
            border-bottom: 1px solid rgba(3, 190, 194, 0.9);
            text-decoration: none;
          }

          .signup {
            font-family: 'Axia', sans-serif !important;
            position: fixed;
            right: 8%;
            top: 8%;
          }

          .line {
            margin-top: 5%;
          }

          .center {
            width: 50%;
            margin-left: 25%;
            margin-right: 25%;
            margin-top: 7%;
            text-align: center;
          }

          @media screen and (max-width: 1000px) {
            .signup {
              position: relative;
              left: 0%;
              right: 0%;
              margin-top: 5%;
            }
          }

          @media screen and (max-width: 800px) {
            .center {
              width: 75%;
              margin: 10% 12.5%;
            }

            .title {
              font-size: 1.6em !important;
            }

            .subtitle {
              font-size: 1.3em !important;
              width: 90% !important;
              margin: 5% 5% !important;
            }

            .logo {
              width: 30% !important;
              margin: 1em;
            }

          }

          .logo { 
            width: 22%;
          }

          .title {
            text-transform: uppercase;
            width: 100%;
            padding-top: 4%;
            line-height: 1.15;
            font-size: 2rem;
            font-family: 'Rhode';
            font-weight: 600;
          }

          .subtitle {
            font-family: axia, sans-serif;
            font-size: 1.6rem;
            font-weight: 300;
            width: 75%;
            margin: 0.5em 12.5%;
          }

          .title,
          .subtitle {
            display: block;
          }

          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
          }

          .card:hover {
            border-color: #067df7;
          }

          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }

          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }

          .row-wide {
            margin-left: 7.5%;
            margin-right: 7.5%;
            margin-top: 3%;
            max-width: 85%;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
