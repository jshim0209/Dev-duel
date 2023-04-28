import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./components/Home/Home";
import Inspect from "./components/Inspect/Inspect";
import Duel from "./components/Duel/Duel";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      {/* <Home /> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/inspect" component={Inspect} />
      <Route exact path="/duel" component={Duel} />
    </Router>
  );
}

export default App;
