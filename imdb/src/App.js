import Movies from "./components/movies";
import "./App.css";
import Header from "./components/header";
import { Redirect, Route, Switch } from "react-router-dom";
import Users from "./components/users";
import Posts from "./components/posts";
import Admin from "./components/admin";
import Dashboard from "./components/dashboard";
import Customers from "./components/customers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/react-toastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <div className="container">
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/users" component={Users} />
          <Route path="/posts" component={Posts} />
          <Route path="/admin" component={Admin} />
          <Route
            path="/not-found"
            render={(props) => <Admin user="ali" {...props} />}
          />

          <Route path="/" exact component={Dashboard} />

          <Redirect from="/films" to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </>
  );
}

export default App;
