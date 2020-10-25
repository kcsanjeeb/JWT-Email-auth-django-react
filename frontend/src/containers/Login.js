import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions/auth'


const Login = ({ login, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        login(email, password)
    }

    //Is user authenticated ? 
    // Redirect to home page. 
    if(isAuthenticated){
        return <Redirect to = '/'/>
    }

    return (
        <>

            <section class="banner-area organic-breadcrumb">
                <div class="container">
                    <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div class="col-first">
                            <h1>Login</h1>
                            <nav class="d-flex align-items-center">
                                <a href="index.html">Home<span class="lnr lnr-arrow-right"></span></a>
                                <a href="category.html">Login</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section class="login_box_area section_gap">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="login_box_img">
                                <img class="img-fluid" src="img/login.jpg" alt="" />
                                <div class="hover">
                                    <h4>New to our website?</h4>
                                    <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                                    <a class="primary-btn" href="registration.html">Create an Account</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="login_form_inner">
                                <h3>Log in to enter</h3>
                                <form class="row login_form" onSubmit={e => onSubmit(e)}>
                                    <div class="col-md-12 form-group">
                                        <input
                                            className='form-control'
                                            type='email'
                                            placeholder='email'
                                            name='email'
                                            value={email}
                                            onChange={e => onChange(e)}
                                            required
                                            placeholder="Email"
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Username'"
                                        />
                                    </div>
                                    <div class="col-md-12 form-group">
                                        <input
                                            className='form-control'
                                            type='password'
                                            placeholder='password'
                                            name='password'
                                            value={password}
                                            onChange={e => onChange(e)}
                                            minLength='6'
                                            required
                                            placeholder="Password"
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Password'" />
                                    </div>
                                    <div> 
                                    <button className='btn primary-btn' type='submit'>Login</button>
                                    </div>
                                    <div class="mt-2">
                                    <p className='mt-3'>
                                        Dont have an account? <Link to='/signup'>Sign up </Link>
                                    </p>
                                    <p className='mt-3'>
                                        Forgout youe password? <Link to='/reset_password'>Reset Password</Link>
                                    </p>
                                    </div>

                                </form>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>


    )
};

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, { login })(Login); 