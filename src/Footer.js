import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="site-footer">
        <link rel="stylesheet" 
            href="path/to/font-awesome/css/font-awesome.min.css"/>
        <link rel="stylesheet" 
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" 
            crossorigin="anonymous"/>
        <div className="container">
            <div className="row">
            <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">I'm an a CSE Undergrad with a focus on 
                    native Application Development looking to acquire professional skills. 
                    I'm hardworking, diligent, and dedicated—all qualities I put forward ineverything I do.
                    This is a React Project that uses
                    simple React Principles. If you wanna hire me or just say hi let's chat.
                </p>
            </div>

            <div className="col-xs-3 col-md-6 chat">
                <h6>Let's Chat</h6>
                <ul className="footer-links">
                    <li><a href="https://www.linkedin.com/in/a3191/"  target="_blank">
                        Linkedin
                    </a></li>
                    <li><a href="https://twitter.com/sm"  target="_blank">
                        Twitter
                    </a></li>
                    <li><a href="https://github.com/n"  target="_blank">
                        Github
                    </a></li>
                </ul>
            </div>
            </div>
            <hr/>
        </div>
        </footer>
    )
};

export default Footer;
