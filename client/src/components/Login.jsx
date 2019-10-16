import React, { Component } from 'react'
import axios from 'axios';
import jwt from 'jwt-decode';

import '../stylesheets/login.scss';

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const request = {"auth": {"email": email, "password": password}};

    axios.post('/api/user_token', request)
      .then(response => {
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("user", JSON.stringify(jwt(response.data.jwt)));
        this.props.history.push("/");
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div className="login">
        <div className="wrapper">
          <div className="container">
            <div className="grid">
              <div className="col-xs-12">
                <figure className="media">
                  <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="sakura" x="0px" y="0px" viewBox="0 0 512.001 512.001">
                      <path className="path1" d="M166.813,145.528l89.188,122.756l89.187-122.756c15.984-22.001,15.984-51.792,0-73.793l-37.55-51.684  c-7.637-10.512-22.958-11.473-31.849-1.997l-10.257,10.931c-5.163,5.503-13.9,5.502-19.063,0l-10.256-10.931  c-8.891-9.476-24.211-8.515-31.849,1.997l-37.551,51.684C150.829,93.736,150.829,123.527,166.813,145.528z"/>
                      <path className="path2" d="M222.348,192.343l33.653,75.941l33.653-75.941  c5.461-12.324,5.694-26.336,0.644-38.835l-13.758-34.051c-1.951-4.83-8.5-5.531-11.43-1.225l-4.096,6.02  c-2.406,3.535-7.617,3.535-10.023,0l-4.096-6.02c-2.93-4.307-9.479-3.605-11.43,1.225l-13.758,34.052  C216.654,166.007,216.887,180.019,222.348,192.343z"/>
                      <path className="path1" d="M111.693,315.173l144.308-46.889l-89.188-122.756c-15.985-22.001-44.318-31.207-70.181-22.803  l-60.758,19.741c-12.358,4.015-18.006,18.289-11.742,29.673l7.226,13.133c3.638,6.611,0.938,14.92-5.891,18.13l-13.565,6.376  c-11.759,5.528-15.58,20.395-7.942,30.908l37.551,51.684C57.496,314.37,85.829,323.576,111.693,315.173z"/>
                      <g>
                        <path className="path4" d="M111.693,315.173l144.308-46.889l-89.188-122.756   c-15.985-22.001-44.318-31.207-70.181-22.803l-60.758,19.741c-12.358,4.015-18.006,18.289-11.742,29.673l7.226,13.133   c3.638,6.611,0.938,14.92-5.891,18.13l-13.565,6.376c-11.759,5.528-15.58,20.395-7.942,30.908l37.551,51.684   C57.496,314.37,85.829,323.576,111.693,315.173z"/>
                        <path className="path2" d="M173.378,276.823l82.623-8.539l-61.825-55.473   c-10.033-9.003-23.288-13.553-36.735-12.613l-36.636,2.562c-5.196,0.363-7.887,6.374-4.697,10.492l4.459,5.756   c2.619,3.381,1.008,8.337-3.097,9.533l-6.991,2.036c-5.001,1.456-6.357,7.901-2.367,11.249l28.133,23.607   C146.571,274.1,159.969,278.209,173.378,276.823z"/>
                      </g>
                      <path className="path1" d="M256.001,420.019V268.284l-144.308,46.889c-25.864,8.404-43.374,32.505-43.374,59.7v63.885  c0,12.994,11.829,22.776,24.592,20.336l14.723-2.815c7.411-1.417,14.479,3.719,15.422,11.205l1.873,14.872  c1.623,12.892,14.582,21.12,26.94,17.105l60.758-19.742C238.49,471.315,256.001,447.213,256.001,420.019z"/>
                      <path className="path3" d="M256.001,420.019V268.284l-144.308,46.889  c-25.864,8.404-43.374,32.505-43.374,59.7v63.885c0,12.994,11.829,22.776,24.592,20.336l14.723-2.815  c7.411-1.417,14.479,3.719,15.422,11.205l1.873,14.872c1.623,12.892,14.582,21.12,26.94,17.105l60.758-19.742  C238.49,471.315,256.001,447.213,256.001,420.019z"/>
                      <path className="path2" d="M238.59,349.502l17.411-81.218l-71.863,41.657  c-11.662,6.76-20.086,17.96-23.347,31.04l-8.884,35.635c-1.26,5.054,3.625,9.471,8.527,7.71l6.853-2.462  c4.024-1.446,8.241,1.617,8.109,5.892l-0.224,7.278c-0.161,5.206,5.55,8.488,9.967,5.728l31.146-19.461  C227.716,374.155,235.764,362.683,238.59,349.502z"/>
                      <path className="path1" d="M400.309,315.173l-144.308-46.889l89.187-122.756c15.984-22.001,44.318-31.207,70.181-22.803  l60.758,19.741c12.358,4.015,18.006,18.289,11.742,29.673l-7.226,13.133c-3.638,6.611-0.938,14.92,5.891,18.13l13.565,6.376  c11.759,5.528,15.58,20.395,7.942,30.908L470.49,292.37C454.506,314.37,426.173,323.576,400.309,315.173z"/>
                      <path className="path3" d="M400.309,315.173l-144.308-46.889l89.187-122.756  c15.984-22.001,44.318-31.207,70.181-22.803l60.758,19.741c12.358,4.015,18.006,18.289,11.742,29.673l-7.226,13.133  c-3.638,6.611-0.938,14.92,5.891,18.13l13.565,6.376c11.759,5.528,15.58,20.395,7.942,30.908L470.49,292.37  C454.506,314.37,426.173,323.576,400.309,315.173z"/>
                      <path className="path2" d="M338.624,276.823l-82.623-8.539l61.825-55.473  c10.033-9.003,23.288-13.553,36.735-12.613l36.636,2.562c5.196,0.363,7.887,6.374,4.697,10.492l-4.459,5.756  c-2.619,3.381-1.008,8.337,3.097,9.533l6.991,2.036c5.001,1.456,6.358,7.901,2.367,11.249l-28.133,23.607  C365.431,274.1,352.033,278.209,338.624,276.823z"/>
                      <path className="path1" d="M256.001,420.019V268.284l144.308,46.889c25.863,8.404,43.374,32.505,43.374,59.7v63.885  c0,12.994-11.829,22.776-24.592,20.336l-14.723-2.815c-7.411-1.417-14.479,3.719-15.422,11.205l-1.872,14.872  c-1.623,12.892-14.582,21.12-26.94,17.105l-60.758-19.742C273.512,471.315,256.001,447.213,256.001,420.019z"/>
                      <path className="path2" d="M273.412,349.502l-17.411-81.218l71.863,41.657  c11.663,6.76,20.086,17.96,23.347,31.04l8.884,35.635c1.26,5.054-3.625,9.471-8.527,7.71l-6.853-2.462  c-4.024-1.446-8.241,1.617-8.109,5.892l0.224,7.278c0.161,5.206-5.55,8.488-9.967,5.728l-31.146-19.461  C284.286,374.155,276.238,362.683,273.412,349.502z"/>
                      <g className="path5">
                        <path d="M256.001,93.248c-4.142,0-7.5-3.358-7.5-7.5V62.465c0-4.142,3.358-7.5,7.5-7.5s7.5,3.358,7.5,7.5v23.283   C263.501,89.891,260.143,93.248,256.001,93.248z"/>
                        <path d="M82.401,219.379c-0.768,0-1.549-0.119-2.319-0.369l-22.144-7.195c-3.939-1.28-6.096-5.511-4.815-9.45   c1.28-3.94,5.511-6.097,9.45-4.815l22.144,7.195c3.939,1.28,6.096,5.511,4.815,9.45C88.502,217.364,85.562,219.379,82.401,219.379z   "/>
                        <path d="M135.018,442.295c-1.528,0-3.071-0.466-4.402-1.433c-3.351-2.435-4.094-7.124-1.659-10.476l13.686-18.836   c2.434-3.352,7.124-4.095,10.476-1.659c3.351,2.435,4.094,7.125,1.659,10.476l-13.686,18.836   C139.624,441.223,137.337,442.295,135.018,442.295z"/>
                        <path d="M376.984,442.295c-2.319,0-4.606-1.072-6.074-3.092l-13.686-18.836c-2.435-3.351-1.692-8.041,1.659-10.476   c3.352-2.435,8.042-1.691,10.476,1.659l13.686,18.836c2.435,3.351,1.692,8.041-1.659,10.476   C380.055,441.83,378.513,442.295,376.984,442.295z"/>
                        <path d="M429.601,219.379c-3.162,0-6.102-2.015-7.131-5.185c-1.28-3.939,0.876-8.17,4.815-9.45l22.143-7.195   c3.938-1.282,8.17,0.875,9.45,4.815c1.28,3.939-0.876,8.17-4.815,9.45l-22.144,7.195   C431.15,219.261,430.369,219.379,429.601,219.379z"/>
                      </g>
                    </svg>
                  </div>
                  <figcaption className="logo-content">
                    <h2>Sakura Performance Manager</h2>
                    <h4 className="subheader">Please Login</h4>
                  </figcaption>
                </figure>
              </div>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="grid">
                <div className="col-xs-12 col-md-6">
                    <input name="email" id="email" placeholder="Enter Email" type="email" />
                </div>
                <div className="col-xs-12 col-md-6">
                  <input name="password" id="password" placeholder="Enter Password" type="password" />
                </div>
                <div className="col-xs-12">
                  <button type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;