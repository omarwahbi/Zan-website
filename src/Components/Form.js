import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Form() {
  const [state, handleSubmit] = useForm("xknlrdrj");
  if (state.succeeded) {
    return (
      <div className="sent-text">
        <p>
          We will respond to you as soon as possible <br /> Thank you for
          choosing Zan Doors
        </p>
      </div>
    );
  }
  return (
    <form className="h-100 form-sizing" onSubmit={handleSubmit}>
      <div className="form-theme">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          className="form-control form--area-color"
          type="text"
          name="name"
          placeholder="Name here"
        />
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          id="email"
          className="form-control form-text-area-color"
          type="email"
          name="email"
          placeholder="email here"
        />

        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form-control form-text-area-color"
            placeholder="Any message"
            style={{
              marginBottom: "20px",
            }}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="submit-btn"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
