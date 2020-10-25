import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { verify } from '../actions/auth'


const Activate = ({verify, match}) => {
    const [verified, setVerified] = useState(false);

    const verify_account = e => {
        const uid = match.params.uid;
        const token = match.params.token; 
        verify(uid, token);
        setVerified(true);
    }

    if(verified){
        return <Redirect to = '/'/>
    }

    return (
        <>

            <section class="banner-area organic-breadcrumb">
                <div class="container">
                    <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div class="col-first">
                            <h1>Activate</h1>
                            {/* <nav class="d-flex align-items-center">
                                <a href="index.html">Home<span class="lnr lnr-arrow-right"></span></a>
                                <a href="category.html">Login</a>
                            </nav> */}
                        </div>
                    </div>
                </div>
            </section>

            <section class="login_box_area section_gap">
                <div class="container">
                    <div className='d-flex flex-column justify-content align-items-center'>
                        <h1>Verify your Account:</h1>
                        <button
                            onClick={verify_account}
                            style={{marginTop:25}}
                            type='button'
                            className='btn btn-primary'    
                        >
                            Verify
                        </button>
                    </div>
                </div>
            </section>


        </>


    )
};




export default connect(null, { verify })(Activate); 