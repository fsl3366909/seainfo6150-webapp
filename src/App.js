import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import './static/css/base.css';
import './static/css/index.css';
import Home from "./Home/Home.jsx";
import Contact from "./contact/contact.jsx";
import Thank from "./thank/thank.jsx";
import Aboutus from "./aboutus/aboutus.jsx";
import Product from "./product/product.jsx";
import Detail from "./detail/detail";
import Order from "./Order/Order";
import Confirmation from "./confirmation/confirmation";
import Bar from "./Bar/Bar.jsx";
import Error from "./Error/Error.jsx";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article",
};

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            {/* these links should show you how to connect up a link to a specific route */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/Order">Order</Link>
            </li>
            <li>
              <Link to="/Confirmation">Confirmation</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Redirect from="/" exact to="/Home" />{/* 重定向到Home页面 */}
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/product" exact component={Product} />
        <Route path="/detail/:uid/" exact component={Detail} />
        <Route path="/Order" exact component={Order} />
        <Route path="/Confirmation" exact component={Confirmation} />
        {/* passing parameters via a route path */}
        <Route
          path="/bar/:categoryId/:productId"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <Bar
              categoryId={match.params.categoryId}
              productId={match.params.productId}
            />
          )}
        />

        <Route path="/contact" exact component={Contact} />
        <Route path="/thank" exact component={Thank} />
        <Route path="/aboutus" exact component={Aboutus} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
