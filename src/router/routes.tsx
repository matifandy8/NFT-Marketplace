import {  Redirect, Route, Switch } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";






export const Routes: React.FC = () => {
    return(
      <Layout>       
         <Switch>
        <Route exact path="/" component={Home} />
        {/* <PrivateRoute  path="/sell"  component={Sell}  exact  /> */}

        <Redirect to="/" />
      </Switch>
      </Layout>
    )
}