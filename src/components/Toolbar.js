import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const toolbar = props => (
  <header className="row border-bottom white-bg">
    <nav className="navbar navbar-static-top">
      <div className="navbar-header">
        <button
          aria-controls="navbar"
          aria-expanded="false"
          data-target="#navbar"
          data-toggle="collapse"
          className="navbar-toggle collapsed"
          type="button"
        >
          <i className="fa fa-reorder" />
        </button>
        <NavLink to="/" className="navbar-brand">
          Hotspot
        </NavLink>
      </div>
      <div className="navbar-collapse collapse" id="navbar">
        <ul className="nav navbar-nav">
          <li className="active">
            <NavLink to="/" aria-expanded="false" role="button">
              {' '}
              Dashboard
            </NavLink>
          </li>
          <li className="dropdown">
            <a
              aria-expanded="false"
              role="button"
              href=""
              className="dropdown-toggle"
              data-toggle="dropdown"
            >
              {' '}
              Companies <span className="caret" />
            </a>
            <ul role="menu" className="dropdown-menu">
              <li>
                <Link to="/companies">All companies</Link>
              </li>
              <li>
                <Link to="/companies/new">Add company</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              aria-expanded="false"
              role="button"
              href=""
              className="dropdown-toggle"
              data-toggle="dropdown"
            >
              {' '}
              Admins <span className="caret" />
            </a>
            <ul role="menu" className="dropdown-menu">
              <li>
                <Link to="/admins">All admins</Link>
              </li>
              <li>
                <Link to="/admins/new">Add admin</Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="nav navbar-top-links navbar-right">
          <li>
            <NavLink to="/sign_out">
              <i className="fa fa-sign-out" /> Sign out
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar
