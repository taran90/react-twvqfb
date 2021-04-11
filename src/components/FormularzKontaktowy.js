import React, { useState } from "react";
import "./FormularzKontaktowy.css";
import Hooks from "../hooks";

const FormularzKontaktowy = () => {
  const formularzKontaktowy = Hooks.useFormularzKontaktowy();

  const [kontaktImie, seKontaktImie] = useState("Jan");
  const [kontaktNazwisko, seKontaktNazwisko] = useState("Kowalski");
  const [kontaktEmail, seKontaktEmail] = useState("jkowalski@sii.pl");

  return (
    <form
      id="formularzKontaktowy"
      className="formularzKontaktowy"
      onSubmit={formularzKontaktowy.onClickSubmit}
    >
      <h1>FormularzKontaktowy</h1>
      <fieldset>
        <legend>Dane Kontaktowe</legend>
        <label for="imie">Podaj imie:</label>
        <input
          id="imie"
          name="Imie"
          type="text"
          required
          minlength="4"
          maxlength="20"
          value={kontaktImie}
          onChange={formularzKontaktowy.onChangeImie}
        />
        <label for="naziwsko">Podaj naziwsko:</label>
        <input
          id="naziwsko"
          name="Naziwsko"
          type="text"
          value={kontaktNazwisko}
          onChange={formularzKontaktowy.onChangeNazwisko}
        />
        <label for="email">Podaj email:</label>
        <input
          id="email"
          name="Email"
          type="email"
          required
          value={kontaktEmail}
          onChange={formularzKontaktowy.onChangeEmail}
        />

        <div className="walidator">nieporawne imie</div>
      </fieldset>
      <fieldset>
        <legend>Zgody Marketingowe</legend>
      </fieldset>
      <fieldset>
        <legend>Zgody na przetwarzanie</legend>
      </fieldset>
      <fieldset>
        <button
          type="submit"
          formmethod="get"
          formaction="#form-kontakt-action-1"
        >
          Wyslij 1
        </button>
        <button type="reset">Wyczysc</button>
        <button type="button">Inna akcja</button>

        <input
          type="submit"
          formmethod="get"
          formaction="#form-kontakt-action-1"
          value="Wyslij 2"
        />
        <input type="reset" value="Wyczysc" />
        <input type="button" value="Inna akcja" />
      </fieldset>
    </form>
  );
};

export default FormularzKontaktowy;
