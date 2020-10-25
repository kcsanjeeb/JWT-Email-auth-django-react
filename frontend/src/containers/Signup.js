import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup } from '../actions/auth'


const Signup = ({ signup, isAuthenticated}) => {
    const [accountCreated, setAccountCreated] = useState(false)
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        password: '',
        re_password:''
    });
    const { name,email, password,re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if(password === re_password){
            signup(name,email, password,re_password);
            setAccountCreated(true)
        }
    }

    //Is user authenticated ? 
    // Redirect to home page. 
    if(isAuthenticated){
        return <Redirect to = '/'/>
    }
    if(accountCreated){
        return <Redirect to='/login'/> 
    }

    return (
        <>

            <section class="banner-area organic-breadcrumb">
                <div class="container">
                    <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div class="col-first">
                            <h1>Sign Up</h1>
                            <nav class="d-flex align-items-center">
                                <a href="index.html">Home<span class="lnr lnr-arrow-right"></span></a>
                                <a href="category.html">Sign Up</a>
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
                                <h3>CREATE YOUR ACCOUNT</h3>
                                <form class="row login_form" onSubmit={e => onSubmit(e)}>
                                <div class="col-md-12 form-group">
                                        <input
                                            className='form-control'
                                            type='text'
                                            placeholder='name'
                                            name='name'
                                            value={name}
                                            onChange={e => onChange(e)}
                                            required
                                            placeholder="name"
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'name'"
                                        />
                                    </div>
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
                                            onblur="this.placeholder = 'Email'"
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
                                    <div class="col-md-12 form-group">
                                        <input
                                            className='form-control'
                                            type='password'
                                            placeholder='Confirm password'
                                            name='re_password'
                                            value={re_password}
                                            onChange={e => onChange(e)}
                                            minLength='6'
                                            required
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Confirm Password'" />
                                    </div>
                                    <div> 
                                    <button className='btn primary-btn' type='submit'>Register</button>
                                    </div>
                                    <div class="mt-2">
                                    <p className='mt-3'>
                                        Already have an account? <Link to='/login'>Sign in </Link>
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


export default connect(mapStateToProps, { signup })(Signup); 