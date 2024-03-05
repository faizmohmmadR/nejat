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
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        padding: "20px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Contact Us</h1>
      <form
        style={{
          width: "600px",
          border: "1px solid #ccc",
          fontSize: "16px",
          fontWeight: "bold",
          padding: "45px",
          margin: "14px",
          borderRadius: "5px",
          height: "500px",
          boxShadow: "0px 15px 17px rgba(0, 0, 0, 0.1)", // Add box shadow to the form
        }}
      >
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
              width: "85%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "14px", // Decrease the font size for small input field
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
              width: "85%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "14px", // Decrease the font size for small input field
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
            rows="15"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "14px", // Decrease the font size for small input field
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#04AA6D",
            color: "white",
            padding: "12px 20px",
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
