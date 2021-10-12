import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "../components/layout";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Cart from "../pages/cart";
import Home from "../pages/home";
import ProductDetails from "../pages/productDetails";
import { PrivateRoute } from "./privateRoute";

export const Routes: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute path="/cart" component={Cart} exact />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};
