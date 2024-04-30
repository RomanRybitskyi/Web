import React from "react";
import '../style.css';
function SignUp() {
    return (
        <section className="body-sign-up">
        <section className="signup-form">
            <div className='container-sign-up'>
                <div className="wrapper-sign-up">
                    <h2>Registration</h2>
                    <form className="sign-up-form" action="#">
                        <div className="input-box-sign-up">
                            <input type="text" placeholder="Enter your name" required/>
                        </div>
                        <div className="input-box-sign-up">
                            <input type="text" placeholder="Enter your email" required/>
                        </div>
                        <div className="input-box-sign-up">
                            <input type="password" placeholder="Create password" required/>
                        </div>
                        <div className="input-box-sign-up">
                            <input type="password" placeholder="Confirm password" required/>
                        </div>
                        <div className="policy-sign-up">
                            <input type="checkbox"/>
                                <h3>I accept all terms & condition</h3>
                        </div>
                        <div className="input-box-sign-up button-sign-up">
                            <input type="Submit" value="Register Now"/>
                        </div>
                        <div className="text">
                            <h3>Already have an account? <a href="#">Login now</a></h3>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </section>
    );
}

export default SignUp;