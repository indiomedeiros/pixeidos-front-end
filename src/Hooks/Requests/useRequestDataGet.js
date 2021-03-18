import { useState } from "react";
import axios from "axios";

export const useRequestDataGet = () => {
  const [resultRequest, setResultRequest] = useState();
  const [resultErro, setError] = useState();

  const requestDataGet = (URL, token) => {
    axios
      .get(URL, {
        headers: { authorization: token },
      })
      .then((response) => {
        setResultRequest(response.data);
        setError("");
      })
      .catch((error) => {
        error.response && setError(error.response.data);
      });
  };

  return [resultRequest, resultErro, requestDataGet];
};
