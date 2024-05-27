import React from "react";
import "../Scss/form.scss";
const Form = () => {
  return (
    <>
      <section className="Form-section">
        <h1 className="form-heading">Napisz notatkę</h1>
        <form className="form">
          <label className="form-first-label">
            Wpisz kategorię
            <input type="select" placeholder="np:Finanse"></input>
          </label>
          <label className="form-second-label">
            Wpisz notatkę
            <textarea placeholder="Miejsce na notatkę"></textarea>
          </label>
        </form>
        <button className="form-button">Zapisz</button>
      </section>
    </>
  );
};
export default Form;
