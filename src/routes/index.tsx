import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import PostsDetails from "../pages/PostsDetails";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts/:postId/:userId" component={PostsDetails} />
      </Switch>
    </Router>
  );
};
export default Routes;
