import React from "react";
import "../css/Contact.css";

//import '../Utils/validate'
//import '../../public/js/dropdown'
//import '../../public/js/select2/select2'
//import '../../public/js/select2/select2.css'

import content from "../content";

export default function Contact() {
  return (
    <section id="contact">
      <div className="content-container">
        <div
          className="content-title wow fadeInDown animated"
          data-wow-delay=".5s"
          data-wow-duration="1s"
        >
          <h1>Contact</h1>
          <div className="content-title-underline"></div>
        </div>
        <div className="contact-form">
          <div className="container">
            <div className="row">
              <div className="container-contact100">
                <div className="wrap-contact100 ">
                  <form
                    className="contact100-form validate-form wow fadeInLeft animated"
                    data-wow-delay=".6s"
                    data-wow-duration="2s"
                    method="POST"
                    encType="multipart/form-data"
                    action='#'
                  >
                    <span className="contact100-form-title">
                      Send Me A Message
                    </span>

                    <div
                      className="wrap-input100 validate-input"
                      data-validate="Name is required"
                    >
                      <label className="label-input100" htmlFor="name">
                        Full name
                      </label>
                      <input
                        id="name"
                        className="input100"
                        type="text"
                        name="name"
                        placeholder="Enter your name..."
                      />
                      <span className="focus-input100"></span>
                    </div>

                    <div
                      className="wrap-input100 validate-input"
                      data-validate="Valid email is required: ex@abc.xyz"
                    >
                      <label className="label-input100" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        id="email"
                        className="input100"
                        type="text"
                        name="email"
                        placeholder="Enter your email..."
                      />
                      <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100">
                      <div className="label-input100">What do you need?</div>
                      <div>
                        <select className="js-select2" name="service">
                          {content.contact.dropdown.map((item) => {
                            return <option key={item}>{item}</option>;
                          })}
                        </select>
                        <div className="dropDownSelect2"></div>
                      </div>
                      <span className="focus-input100"></span>
                    </div>

                    <div
                      className="wrap-input100 validate-input"
                      data-validate="Message is required"
                    >
                      <label className="label-input100" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="input100"
                        name="message"
                        placeholder="Type your message here..."
                      ></textarea>
                      <span className="focus-input100"></span>
                    </div>

                    <div className="container-contact100-form-btn">
                      <button className="contact100-form-btn">Send</button>
                    </div>
                  </form>

                  <div
                    className="contact100-more flex-col-c-m contact-background wow fadeInRight animated"
                    data-wow-delay=".6s"
                    data-wow-duration="2s"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
