import { useState } from "react";
import axios from "axios";
import { goTologinPage, goToUserPage } from "../../Coordination/coordination";
import { useHistory } from "react-router";

export const useRequestPost = () => {
  const history = useHistory();
  const [resultRequest, setResultRequest] = useState();

  const requestPost = (URL, body, token) => {
    axios
      .post(`${URL}`, body, {
        headers: { authorization: token },
      })
      .then((response) => {
        response.data.token &&
          localStorage.setItem("token", JSON.stringify(response.data.token));
        setResultRequest(response.data);
        response.data.token && goToUserPage(history);
      })
      .catch((error) => {
        
        error.response.data === "jwt expired" &&
          alert("Your session has expired. Sign in again");
        localStorage.removeItem("token");
        goTologinPage(history);

        error.response &&
          !error.response.data === "jwt expired" &&
          alert(error.response.data);
      });
  };

  return [resultRequest, requestPost];
};
