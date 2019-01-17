import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";

import icon from '../static/images/icon.svg';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Head/>
        <div className="center">
          <img className="logo" src={icon} />
          <span className="title">Rice Blockchain</span>
          <span className="description">Our mission is to demystify the world of blockchains & cryptocurrencies.</span>
        </div>

        <style jsx>{`

          @import url("https://use.typekit.net/ben1ckd.css");

          html, body {
            width: 100%;
            height: 100%;
            overflow: hidden !important;
          }

          .center {
            width: 50%;
            margin-left: 25%;
            margin-right: 25%;
            margin-top: 8%;
            text-align: center;
          }

          @media screen and (max-width: 800px) {
            .logo {
              width: 50% !important;
              margin: 1em;
            }

            .center {
              width: 75%;
              margin: 10% 12.5%;
            }

          }

          .logo { 
            width: 30%;
          }

          .title {
            text-transform: uppercase;
            width: 100%;
            padding-top: 7%;
            line-height: 1.15;
            font-size: 2rem;
            font-family: 'Rhode';
            font-weight: 600;
          }

          .description {
            font-family: axia, sans-serif;
            font-size: 1.6rem;
            font-weight: 300;
            width: 75%;
            margin: 0.5em 12.5%;
          }

          .title,
          .description {
            display: block;
          }

          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
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
        `}</style>
      </div>
    );
  }
}

export default Home;
