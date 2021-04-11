import { useReducer } from "react";

const initialState = {
  zgodyRodo: false,
  clickSubmit: false,
  kontaktImie: "Mariusz",
  kontaktNaziwsko: "Taran",
  kontaktEmail: "mtaranek@sii.pl"
};

const actions = {
  CLICK_SUBMIT: "CLICK_SUBMIT",
  CHANGE_IMIE: "CHANGE_IMIE",
  CHANGE_NAZWISKO: "CHANGE_NAZWISKO",
  CHANGE_EMAIL: "CHANGE_EMAIL",
  CHANGE_ZGODY_RODO: "CHANGE_ZGODY_RODO"
};

const reducer = (state, action) => {
  window.STAN = state;

  switch (action.type) {
    case actions.CLICK_SUBMIT:
      return {
        ...state,
        clickSubmit: !action.clickSubmit
      };

    case actions.CHANGE_IMIE:
      return {
        ...state,
        kontaktImie: action.payload
      };

    case actions.CHANGE_NAZWISKO:
      return {
        ...state,
        kontaktNaziwsko: action.payload
      };

    case actions.CHANGE_EMAIL:
      return {
        ...state,
        kontaktEmail: action.payload
      };
    case actions.CHANGE_ZGODY_RODO:
      return {
        ...state,
        zgodaRODO: action.payload
      };

    default:
      throw new Error(
        "userFormularzKontaktowy reducer error - aciton not supported"
      );
  }
};

export const useFormularzKontaktowy = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClickSubmit = event => {
    event.preventDefault();
    console.log("onClickSubmit");
    console.log(event.target);

    const formData = new FormData(event.target);
    var object = {};
    formData.forEach((value, key) => (object[key] = value));
    var json = JSON.stringify(object);
    console.log(json);
    console.log(JSON.stringify(object, ["Imie"]));

    dispatch({ type: actions.CLICK_SUBMIT, payload: event });
  };

  const onChangeImie = event => {
    event.preventDefault();
    console.log("onChangeImie");
    console.log(event.currentTarget);
    const imie = event.currentTarget.value;
    dispatch({ type: actions.CHANGE_IMIE, payload: imie });
  };

  const onChangeNazwisko = event => {
    event.preventDefault();
    console.log("onChangeNazwisko");
    const nazwisko = event.currentTarget.value;
    dispatch({ type: actions.CHANGE_NAZWISKO, payload: nazwisko });
  };

  const onChangeEmail = event => {
    event.preventDefault();
    console.log("onChangeEmail");
    const email = event.currentTarget.value;
    dispatch({ type: actions.CHANGE_EMAIL, payload: email });
  };

  const onChangeRodo = event => {
    event.preventDefault();
    console.log("onChangeRodo");
    const zgoda = event.currentTarget.value.includes("true");
    dispatch({ type: actions.CHANGE_ZGODY_RODO, payload: zgoda });
  };
  window.STAN = { ...state };

  return {
    ...state,
    onClickSubmit,
    onChangeImie,
    onChangeNazwisko,
    onChangeEmail,
    onChangeRodo
  };
};

export default useFormularzKontaktowy;
