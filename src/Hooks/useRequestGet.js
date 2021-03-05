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
        setResultRequest(response.data);
      })
      .catch((error) => {
        error.response && alert(error.response.data.error);
      });
  };

  return [resultRequest, requestGet];
};
