import axios from "axios";

export const requestPost = async (entitie, body, token) => {
  axios
    .post(`${entitie}`, body, {
      headers: { authorization: token },
    })
    .then((response) => {
      response.data.token &&
        localStorage.setItem("token", JSON.stringify(response.data.token));
      return response.data.token;
    })
    .catch((error) => {
      alert(error.message);
    });
};

export const requestGet = async (entitie, token) => {
  axios
    .get(`${entitie}`, {
      headers: { authorization: token },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      alert(error.messgae);
    });
};
