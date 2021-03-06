import { useState } from "react";
import axios from "axios";

export const useRequestGet = () => {
  const [resultRequest, setResultRequest] = useState();

  const requestGet = (URL, token) => {
    console.log("URL", URL)
    axios
      .get(URL, {
        headers: { authorization: token },
      })
      .then((response) => {
        setResultRequest(response.data);
      })
      .catch((error) => {
        error.response && alert(error.response.data);
      });
  };

  return [resultRequest, requestGet];
};
