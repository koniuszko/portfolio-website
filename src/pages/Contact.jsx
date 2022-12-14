import React, { useState } from "react";

import Socials from "../components/Socials";
import "../style/Contact.css";

function Contact() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [isValid, setValid] = useState(false);

  const formValid = (event) => {
    event.preventDefault();

    if (form.username && form.email && form.message) {
      setValid(true);
      alert("Message sent!");
      setValid(false);
      setForm({
        username: "",
        email: "",
        message: "",
      });
    } else {
      setValid(true);
    }
  };

  const handleChange = (event) => {
    // event.preventDefault();
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <section className="contact">
        <div className="section_wrapper">
          <span className="line"></span>
          <div className="text_wrapper">
            <h2 className="secondary_title">Get in Touch</h2>
            <p className="text">
              I’d love to hear about what you’re working on and how I could
              help. I’m currently looking for a new role and am open to a wide
              range of opportunities. My preference would be to find a position
              in a company in London. But I’m also happy to hear about
              opportunites that don’t fit that description. I’m a hard-working
              and positive person who will always approach each task with a
              sense of purpose and attention to detail. Please do feel free to
              check out my online profiles below and get in touch using the
              form.
            </p>
            <Socials
              className="contact_socials"
              color={`black`}
            />
          </div>

          <span className="line"></span>
        </div>
        <div className="form_wrapper">
          <h2 className="secondary_title">Contact Me</h2>
          <form>
            <label>
              Name
              <input
                type="text"
                name="username"
                inputMode="text"
                placeholder="Jane Appleseed"
                value={form.username}
                onChange={handleChange}
                style={{
                  border:
                    isValid && !form.username ? "solid 1px #f43030" : null,
                }}
              />
              <div className="red">
                {!form.username && isValid ? (
                  <span>This file is required</span>
                ) : null}
              </div>
            </label>
            <label>
              Email Address
              <input
                type="email"
                name="email"
                inputMode="email"
                placeholder="email@example.com"
                value={form.email}
                onChange={handleChange}
                style={{
                  border: isValid && !form.email ? "solid 1px #f43030" : null,
                }}
              />
              <div className="red">
                {!form.email && isValid ? (
                  <span>This file is required</span>
                ) : null}
              </div>
            </label>
            <label>
              Message
              <textarea
                className="message"
                type="textarea"
                name="message"
                inputMode="text"
                placeholder="How can I help?"
                value={form.message}
                onChange={handleChange}
                style={{
                  border: isValid && !form.message ? "solid 1px #f43030" : null,
                }}
              />
              <div className="red">
                {!form.message && isValid ? (
                  <span>This file is required</span>
                ) : null}
              </div>
            </label>
            <button
              onClick={(e) => formValid(e)}
              className="submit_button"
              type="submit"
            >
              send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
