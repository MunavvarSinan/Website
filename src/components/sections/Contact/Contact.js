import React from "react";
import emailjs from "emailjs-com";
import Section from "../../../HOC/Section";


const contact = () =>{

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "munavvar_sinan01",
        "munavvar_sinan01",
        e.target,
        "user_dOFm7iPOejsg6UgrY07bm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Section id="contact">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>Contact </span>Us
          </h3>
          <h6 className="section-subtitle mr-auto ml-auto">
            Individualized quality care that meets the total needs of the
            patient Individualized quality care that quality care that
            Individualized quality care that meets the total.
          </h6>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-9 col-lg-7 mr-auto ml-auto">
              <form onSubmit={sendEmail}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name..."
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control rounded-0"
                    aria-describedby="emailHelp"
                    placeholder="Enter email..."
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    placeholder="subject"
                    name="subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control rounded-0"
                    rows="5"
                    placeholder="Enter Message..."
                    name="message"
                  />
                </div>
                <div className="form-group text-center">
                  <input
                    type="submit"
                    value="send message"
                    className="btn btn-block btn-primary rounded-0 mr-auto ml-auto"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default contact;
{
  /* <button className='btn btn-block btn-primary rounded-0 mr-auto ml-auto'>
                    Send
                  </button> */
}
