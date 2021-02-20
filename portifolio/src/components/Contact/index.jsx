import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contato</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120774.74752763694!2d-48.33360453670342!3d-18.922058618003184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4450c10bbbaef%3A0xae370c93616d5c9c!2sUberl%C3%A2ndia%2C%20State%20of%20Minas%20Gerais%2C%20Brazil!5e0!3m2!1sen!2suk!4v1613857232558!5m2!1sen!2suk"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />

      <h4>Telefoe</h4>
      <p>34 000 0000</p>

      <h4>Email</h4>
      <p>email@grmail.com</p>

      <h4>Endereço</h4>
      <p>Uberlândia</p>
    </section>
  );
};

export default Contact;
