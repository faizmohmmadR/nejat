import React from "react";

function ContactPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Contact Us</h1>
      <form style={{ width: "300px" }}>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="name"
            style={{ fontWeight: "bold", marginBottom: "5px" }}
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="email"
            style={{ fontWeight: "bold", marginBottom: "5px" }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="message"
            style={{ fontWeight: "bold", marginBottom: "5px" }}
          >
            Message:
          </label>
          <textarea
            id="message"
            rows="4"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            padding: "8px 12px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
