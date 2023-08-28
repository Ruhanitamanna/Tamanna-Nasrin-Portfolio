import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./Contacts.css";

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zif0zaa",
        "template_ieae94g",
        form.current,
        "BgcXub_vMjGGEUGeG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="bg-orange-100 p-10 justify-between">
      <div className="text-center gradient-text p-2">
        <h3>Contact us for any kind of inquiry</h3>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="lg:flex">
          {/* <label>Name</label> */}
          <input
            className="input input-bordered"
            placeholder="Your Name"
            type="text"
            name="user_name"
          />
          {/* <label>Email</label> */}
          <input
            className="input input-bordered"
            placeholder="Your Email"
            type="email"
            name="user_email"
          />
        </div>{" "}
        <br />
        {/* <label>Message</label> */}
        <br />
        <div className="lg:flex justify-between p-2">
          <textarea
            placeholder="Your Massage"
            className="textarea textarea-bordered"
            name="message"
          />
        </div>
        <input
          className="btn btn-ghost text-blue-700"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default Contacts;
