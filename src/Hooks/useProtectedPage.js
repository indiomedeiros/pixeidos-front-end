import { useHistory } from "react-router";
import { goToHomePage } from "../Coordination/coordination";
import {useEffect} from "react"

export const useProtectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    !token && goToHomePage(history);
  }, [history]);
};
