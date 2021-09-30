import {  Redirect, Route, Switch } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import ProductDetails from "../pages/productDetails";






export const Routes: React.FC = () => {
    return(
      <Layout>       
         <Switch>
        <Route exact path="/" component={Home} />
       <Route exact path="/product/:id" component={ProductDetails} />

        {/* <PrivateRoute  path="/sell"  component={Sell}  exact  /> */}

        <Redirect to="/" />
      </Switch>
      </Layout>
    )
}