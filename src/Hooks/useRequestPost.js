import { useState } from "react";
import axios from "axios";

export const useRequestPost = () => {
  const [resultRequest, setResultRequest] = useState();

  const requestPost = (entitie, body, token) => {
    axios
      .post(`${entitie}`, body, {
        headers: { authorization: token },
      })
      .then((response) => {
        response.data.token &&
          localStorage.setItem("token", JSON.stringify(response.data.token));
        response.data.token && setResultRequest(response.data);
      })
      .catch((error) => {
        error.response && alert(error.response.data.error);
      });
  };

  return [resultRequest, requestPost];
};
