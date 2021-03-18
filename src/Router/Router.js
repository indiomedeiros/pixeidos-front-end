import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Components/Header/Header";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignupPage from "../Pages/SignupPage/SignupPage";
import UserPage from "../Pages/UserPage/UserPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <HomePage />
        </Route>

        <Route exact path="/login">
          <Header />
          <LoginPage />
        </Route>

        <Route exact path="/signup">
          <Header />
          <SignupPage />
        </Route>

        <Route exact path="/user">
          <Header />
          <UserPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
