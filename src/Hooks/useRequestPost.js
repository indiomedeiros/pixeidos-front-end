import { useState } from "react";
import axios from "axios";
import { goToUserPage } from "../Coordination/coordination";
import { useHistory } from "react-router";

export const useRequestPost = () => {
  const history = useHistory();
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
        response.data.token && goToUserPage(history);
      })
      .catch((error) => {
        error.response && alert(error.response.data.error);
      });
  };

  return [resultRequest, requestPost];
};
