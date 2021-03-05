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
        <Route exact path="/image/:id">
          <Header />
          <ImageDetailsPage />
        </Route>
        <Route exact path="/uploud">
          <Header />
          <UploudPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
