import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { reset_password_confirm } from '../actions/auth'


const ResetPasswordConfirm = ({match,reset_password_confirm}) => {
    const [requestSent, setRequestSent] = useState(false); 
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password:''
    });
    const { new_password, re_new_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const uid = match.params.uid;
        const token = match.params.token

        reset_password_confirm(uid, token , new_password, re_new_password);
        setRequestSent(true)
    }

    //Is user authenticated ? 
    // Redirect to home page. 
    if(requestSent){
        return <Redirect to = '/elami'/>
    }

    return (
        <>

            <section class="banner-area organic-breadcrumb">
                <div class="container">
                    <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div class="col-first">
                            <h1>Reset Password</h1>
                            <nav class="d-flex align-items-center">
                                <a href="index.html">Home<span class="lnr lnr-arrow-right"></span></a>
                                <a href="category.html">Reset Password</a>
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
                                <h3>RESET YOUR PASSWORD</h3>
                                <form class="row login_form" onSubmit={e => onSubmit(e)}>
                                <div class="col-md-12 form-group">
                                        <input
                                            className='form-control'
                                            type='password'
                                            placeholder='New password'
                                            name='new_password'
                                            value={new_password}
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
                                            placeholder='Confirm new password'
                                            name='re_new_password'
                                            value={re_new_password}
                                            onChange={e => onChange(e)}
                                            minLength='6'
                                            required
                                            placeholder="Password"
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Password'" />
                                    </div>
                                
                                    <div> 
                                    <button className='btn primary-btn' type='submit'>Reset Password</button>
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


export default connect(null, { reset_password_confirm })(ResetPasswordConfirm); 