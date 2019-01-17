import React from 'react';

class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: 'blockchain@rice.edu', disabled: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ value: '' });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value == "blockchain@rice.edu") {
      event.preventDefault();
    }
  }

  render() {
    return (
      <div id="mc_embed_signup">
        <form onSubmit={this.handleSubmit} action="https://rice.us20.list-manage.com/subscribe/post?u=5293ceb5a05336e4f57faadf8&amp;id=ddb11bd6ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            <h3>We just launched our mailing list!</h3>
            <input type="email" value={this.state.value} onChange={this.handleChange} onClick={this.handleClick} name="EMAIL" className="required email" id="mce-EMAIL" />
            <div id="mce-responses" className="clear">
              <div className="response" style={{ "visibility": "hidden" }} id="mce-error-response"></div>
              <div className="response" style={{ "visibility": "hidden" }} id="mce-success-response"></div>
            </div>
            <div className="align" aria-hidden="true">
              <input type="text" style={{ "display": "none" }} defaultValue name="b_5293ceb5a05336e4f57faadf8_ddb11bd6ef" tabIndex="-1" />
              <div className="clear">
                <input type="submit" value="SUBSCRIBE" name="submit" id="mc-embedded-subscribe" className="button" />
              </div>
            </div>
          </div>
        </form>
        <style jsx>{`
            h3 {
              font-weight: 300;
              font-size: 1em;
              margin-bottom: 7px;
              margin-left: 3px;
              flex-basis: 100%;
              text-align: right;
            }

            #mc_embed_signup_scroll {
              position: relative;
              display: flex;
              justify-content: flex-end;
              flex-flow: row wrap;
              float: right;
              top: 5%;
              right: 0%;
              z-index: 2;
            }

            @media screen and (max-width: 1000px) {
              #mc_embed_signup_scroll {
                justify-content: center;
                align-items: center;
                top: 10%;
                right: 0%;
                left: 0%;
                margin-bottom: 2em;
              }

              h3 {
                text-align: center;
              }
            }

            .button {
              height: 30px;
              background: #FFFFFF;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
              border-radius: 6px;
              border: 2px solid #EDEDED;
              font-family: 'Axia', sans-serif;
              font-size: 0.8em;
              margin-top: 3px;
              padding-top: 3px;
              margin-left: 3px;
              color: #a8a8a8;
              transition: color 0.1s ease-in-out, background 0.25s ease-in-out;

            }

            .button:hover {
              color: #4F26F7;
              outline: none;
            }

            .button:active {
              background: #e9e9e9;
              outline: none;
              border: 2px #e9e9e9 solid;
            }

            .button:focus {
              outline: none;
            }

            input.email {
              background: #FFFFFF;
              border: 2px solid #EDEDED;
              box-sizing: border-box;
              border-radius: 7px;
              padding: 15px 10px;
              height: 35px;
              font-family: 'Axia', sans-serif;
              font-size: 1em;
              font-weight: 300;
              color: #c8c8c8;
              transition: border 0.2s ease-in-out;
            }

            input.email:focus {
              color: #a8a8a8;
              outline: none;
              border: 2px solid #D8D8D8;
            }

          `}
        </style>
      </div>
    )
  }
}

export default Signup