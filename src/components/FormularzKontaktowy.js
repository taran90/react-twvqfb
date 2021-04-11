import React, { useState, useEffect } from "react";
import "./FormularzKontaktowy.css";
import Hooks from "../hooks";

const FormularzKontaktowy = () => {
  const formularzKontaktowy = Hooks.useFormularzKontaktowy();
  // const [zgodaRODO, setZgodaRODO] = useState(true);

  const [adresyEmil, setAdresyEmail] = useState([]);

  useEffect(() => {
    const getAdresyEmail = async () => {
      let response = await fetch("dane.json");
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      setAdresyEmail(jsonResponse);
    };

    getAdresyEmail();
  }, []);

  // const [kontaktImie, seKontaktImie] = useState("Jan");
  // const [kontaktNazwisko, seKontaktNazwisko] = useState("Kowalski");
  // const [kontaktEmail, seKontaktEmail] = useState("jkowalski@sii.pl");
  console.log(formularzKontaktowy.clickSubmit);

  return !formularzKontaktowy.clickSubmit ? (
    <form
      id="formularzKontaktowy"
      className="formularzKontaktowy"
      onSubmit={formularzKontaktowy.onClickSubmit}
    >
      <h1>FormularzKontaktowy</h1>
      <fieldset>
        <legend>Dane Kontaktowe</legend>
        <label>Podaj imie:</label>
        <input
          id="imie"
          name="Imie"
          type="text"
          required
          // minlength="4"
          // maxlength="20"
          value={formularzKontaktowy.kontaktImie}
          onChange={formularzKontaktowy.onChangeImie}
        />
        <label>Podaj naziwsko:</label>
        <input
          id="naziwsko"
          name="Naziwsko"
          type="text"
          value={formularzKontaktowy.kontaktNazwisko}
          onChange={formularzKontaktowy.onChangeNazwisko}
        />
        <label>Podaj email:</label>
        <input
          id="email"
          name="Email"
          type="email"
          required
          value={formularzKontaktowy.kontaktEmail}
          onChange={formularzKontaktowy.onChangeEmail}
        />

        <div className="walidator">nieporawne imie</div>
      </fieldset>
      <fieldset>
        <legend>Zgody Marketingowe</legend>
        <legend>TAK</legend>
        <input
          type="radio"
          name="zgodaRODO"
          value="true"
          checked={formularzKontaktowy.zgodaRODO}
          onChange={formularzKontaktowy.onChangeRodo}
        />
        <legend>NIE</legend>
        <input
          type="radio"
          name="zgodaRODO"
          value="false"
          checked={!formularzKontaktowy.zgodaRODO}
          onChange={formularzKontaktowy.onChangeRodo}
        />
      </fieldset>
      <fieldset>
        <legend>Zgody na przetwarzanie</legend>
      </fieldset>
      <fieldset>
        <legend>Adresy</legend>
        <ul>
          {adresyEmil.map(email => {
            return <li>{email}</li>;
          })}
        </ul>
      </fieldset>
      <fieldset>
        <button type="submit">Wyslij</button>
        <button type="reset">Wyczysc</button>
        {/* <button type="button">Inna akcja</button> */}

        {/* <input
          type="submit"
          formmethod="get"
          formaction="#form-kontakt-action-1"
          value="Wyslij 2"
        />
        <input type="reset" value="Wyczysc" />
        <input type="button" value="Inna akcja" /> */}
      </fieldset>
    </form>
  ) : (
    <section>
      <h2>Dziekujemy za wyslanie</h2>
    </section>
  );
};

export default FormularzKontaktowy;
