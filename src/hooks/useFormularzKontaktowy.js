import { useReducer } from "react";

const initialState = {
  kontaktImie: "",
  kontaktNaziwsko: "",
  kontaktEmail: ""
};

const actions = {
  CLICK_SUBMIT: "CLICK_SUBMIT",
  CHANGE_IMIE: "CHANGE_IMIE",
  CHANGE_NAZWISKO: "CHANGE_NAZWISKO",
  CHANGE_EMAIL: "CHANGE_EMAIL"
};

const reducer = (state, action) => {};

export const useFormularzKontaktowy = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClickSubmit = event => {
    event.preventDefault();
    console.log("onClickSubmit");
  };

  const onChangeImie = event => {
    event.preventDefault();
    console.log("onChangeImie");
  };

  const onChangeNazwisko = event => {
    event.preventDefault();
    console.log("onChangeNazwisko");
  };

  const onChangeEmail = event => {
    event.preventDefault();
    console.log("onChangeEmail");
  };

  return {
    ...state,
    onClickSubmit,
    onChangeImie,
    onChangeNazwisko,
    onChangeEmail
  };
};

export default useFormularzKontaktowy;
