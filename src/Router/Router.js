import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ImageDetailsPage from "../Pages/ImageDetailsPage";
import ImageSearchPage from "../Pages/ImageSearchPage";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import UserPage from "../Pages/UserPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/singup">
          <SignupPage />
        </Route>
        <Route exact path="/user">
          <UserPage />
        </Route>
        <Route exact path="/image/search">
          <ImageSearchPage />
        </Route>
        <Route exact path="/image/:id">
          <ImageDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
