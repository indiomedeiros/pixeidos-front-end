import { useState } from "react";
import axios from "axios";

export const useRequestGet = () => {
  const [resultRequest, setResultRequest] = useState();

  const requestGet = (entitie, token, dataSearch) => {
    axios
      .get(entitie + dataSearch, {
        headers: { authorization: token },
      })
      .then((response) => {
        console.log("response", response.data);
        setResultRequest(response.data);
      })
      .catch((error) => {
        error.response.data.error && alert(error.response.data.error)
      });
  };

  return [resultRequest, requestGet];
};
