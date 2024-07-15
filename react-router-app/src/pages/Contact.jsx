import React, { useState } from "react";
import Navbar from "../layouts/Navbar";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [seat, setSeat] = useState(0);
  const [dateTime, setDateTime] = useState(Date);
  const submitForm = (event) => {
    event.preventDefault();
    fetch("https://todoreactapp-870d3-default-rtdb.firebaseio.com/todo.json", {
      method: "POST",
      body: JSON.stringify({ name, message, seat, dateTime }),
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((response) => {
        setName("");
        setName(name);
        setMessage("");
        setMessage(message);
        setSeat(seat);
        setDateTime("");
        setDateTime(dateTime);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar />
      <div className="w3-container w3-padding-64" id="contact">
        <h1>Contact</h1>
        <br />
        <p>
          We offer full-service catering for any event, large or small. We
          understand your needs and we will cater the food to satisfy the
          biggerst criteria of them all, both look and taste. Do not hesitate to
          contact us.
        </p>
        <p className="w3-text-blue-grey w3-large">
          <b>Catering Service, 42nd Living St, 43043 New York, NY</b>
        </p>
        <p>
          You can also contact us by phone 00553123-2323 or email
          catering@catering.com, or you can send us a message here:
        </p>
        <form method="post" onSubmit={submitForm}>
          <p>
            <input
              className="w3-input w3-padding-16"
              type="text"
              placeholder="Name"
              required
              name="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </p>
          <p>
            <input
              className="w3-input w3-padding-16"
              type="number"
              placeholder="How many people"
              name="People"
              value={seat}
              onChange={(event) => setSeat(event.target.value)}
            />
          </p>
          <p>
            <input
              className="w3-input w3-padding-16"
              type="datetime-local"
              placeholder="Date and time"
              // required
              name="date"
              // value="2020-11-16T20:00"
              value={dateTime}
              onChange={(event) => setDateTime(event.target.value)}
            />
          </p>
          <p>
            <input
              className="w3-input w3-padding-16"
              type="text"
              placeholder="Message \ Special requirements"
              required
              name="Message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </p>
          <p>
            <button className="w3-button w3-light-grey w3-section">
              SEND MESSAGE
            </button>
          </p>
        </form>
      </div>
    </>
  );
}
