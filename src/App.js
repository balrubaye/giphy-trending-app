
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Trending from "./components/Trending";
import Search from "./components/Search";
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/trending">
            <Trending />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
