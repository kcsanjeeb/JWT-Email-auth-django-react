import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import logout from '../../actions/auth'

const Navbar = ({ logout, isAuthenticated }) => {

    const guestLinks = () => 
        (
            <Fragment>
            <li class="nav-item ">
                <Link class="nav-link" to="/login">Login</Link>
            </li>
            <li class="nav-item ">
                <Link class="nav-link" to="/signup">Sign Up</Link>
            </li>
        </Fragment>
        )
      
   

    const authLinks = () => (
            <li class="nav-item ">
            <a class="nav-link"  href="/#!" onClick={logout}>Logout</a>
        </li>
        )
  


    return (
        <header class="header_area sticky-header">
            <div class="main_menu">
                <nav class="navbar navbar-expand-lg navbar-light main_box">
                    <div class="container">
                        <a class="navbar-brand logo_h" href="index.html">
                            <img src="img/logo.png" alt=""></img>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul class="nav navbar-nav menu_nav ml-auto">
                                <li class="nav-item ">
                                    <Link class="nav-link" to='/'>Home</Link>
                                </li>
                                {isAuthenticated ? authLinks() : guestLinks()}


                            </ul>
                            <ul class="nav navbar-nav navbar-right">
                                <li class="nav-item">
                                    <button class="search"><span class="lnr lnr-magnifier" id="search"></span></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div class="search_input" id="search_input_box">
                <div class="container">
                    <form class="d-flex justify-content-between">
                        <input type="text" class="form-control" id="search_input" placeholder="Search Here" />
                        <button type="submit" class="btn"></button>
                        <span class="lnr lnr-cross" id="close_search" title="Close Search"></span>
                    </form>
                </div>

            </div>
        </header>

    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);
