import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Form() {
  const [state, handleSubmit] = useForm("xknlrdrj");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form className="h-100 form-sizing" onSubmit={handleSubmit}>
      <div className="form-theme">
        <label
          htmlFor="name"
          className="form-label"
          style={{
            fontWeight: "500",
            fontSize: "28px",
            color: "#1e1e1e",
            marginBottom: "0px",
          }}
        >
          Name
        </label>
        <input
          id="name"
          className="form-control form--area-color"
          type="text"
          name="name"
          placeholder="Name here"
          style={{
            borderRadius: "0",
            border: "none",
            marginBottom: "11px",
            backgroundColor: "#f9f9f9",
          }}
        />
        <label
          htmlFor="email"
          className="form-label"
          style={{
            fontWeight: "500",
            fontSize: "28px",
            color: "#1e1e1e",
            marginBottom: "0px",
          }}
        >
          Email Address
        </label>
        <input
          id="email"
          className="form-control form-text-area-color"
          type="email"
          name="email"
          placeholder="email here"
          style={{
            borderRadius: "0",
            border: "none",
            marginBottom: "11px",
            backgroundColor: "#f9f9f9",
          }}
        />

        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <div className="mb-3">
          <label
            htmlFor="message"
            className="form-label"
            style={{
              fontWeight: "500",
              fontSize: "28px",
              color: "#1e1e1e",
              marginBottom: "0px",
            }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form-control form-text-area-color"
            placeholder="Any message"
            style={{
              borderRadius: "0",
              border: "none",
              marginBottom: "20px",
              backgroundColor: "#f9f9f9",
            }}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            id="emailHelp"
            className="form-text"
            style={{ color: "#b78364", paddingTop: "5px" }}
          >
            We'll never share your email with anyone else.
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            style={{
              backgroundColor: "#b78364",
              width: "130px",
              height: "40px",
              border: "none",
              borderRadius: "0",
              boxShadow: "none",
              fontSize: "18px",
              color: "#f9f9f9",
              fontWeight: "500",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
