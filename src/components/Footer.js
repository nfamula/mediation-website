import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <div className="content has-text-centered">
                  <img
                    src={logo}
                    alt="Paul Famula Mediation"
                    style={{ width: '345px' }}
                  />
                </div>
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/services">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                         Articles & Press
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="content has-text-centered">
        <sup> Copyright © 2020 Paul Famula </sup>
        </div>
      </footer>
    )
  }
}

export default Footer
