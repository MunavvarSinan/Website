import React from "react";
import emailjs from "emailjs-com";
import Section from "../../../HOC/Section";


  class contact extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        email: "",
        message: "",
      };
    }

    handleNameChange(event) {
      event.preventDefault();
      this.setState({ name: event.target.value });
    }

    handleEmailChange(event) {
      event.preventDefault();
      this.setState({ email: event.target.value });
    }

    handleMessageChange(event) {
      event.preventDefault();
      this.setState({ message: event.target.value });
    }

    sendEmail(e) {
      e.preventDefault();

      const templateParams = {
        from_name: this.state.name + " (" + this.state.email + ") ",
        to_name: "Casey Ferrara",
        message: this.state.message,
      };

      emailjs
        .send(
          "service_konm1rs",
          "template_sv42f5y",
          templateParams,
          "user_1HklOeuw0LvGLO6XXBnJb"
        )
        .then(
          function (response) {
            alert("Your message was successfully sent!");
            console.log("SUCCESS!", response.status, response.text);
          },

          function (error) {
            alert("Your message was unable to send.");
            console.log("FAILED...", error);
          }
        );

      this.setState({
        name: "",
        email: "",
        message: "",
      });
    }
    render() {
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
    }
  }

  export default contact;

  /* <button className='btn btn-block btn-primary rounded-0 mr-auto ml-auto'>
                    Send
                  </button> */

