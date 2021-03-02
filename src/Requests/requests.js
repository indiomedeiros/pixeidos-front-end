import axios from "axios";

export const requestPost = async (entitie, body, token) => {
  axios
    .post(`${entitie}`, body, {
      headers: { authorizaion: token },
    })
    .then((response) => {
      response.data.token && localStorage.setItem("token", JSON.stringify(response.data.token))
      return response.data.token
    })
    .catch((error) => {
      alert(error);
    });
    
};
