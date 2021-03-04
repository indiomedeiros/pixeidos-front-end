import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Components/Header/Header";
import HomePage from "../Pages/HomePage/HomePage";
import ImageDetailsPage from "../Pages/ImageDetailsPage";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import UploudPage from "../Pages/UploudPage";
import UserPage from "../Pages/UserPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <Route exact path="/user">
          <UserPage />
        </Route>

        <Route exact path="/image/:id">
          <ImageDetailsPage />
        </Route>
        <Route exact path="/uploud">
          <UploudPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
