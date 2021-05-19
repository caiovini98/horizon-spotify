import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Infos from "./pages/Infos";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={Infos} />
    </BrowserRouter>
  );
};

export default Routes;
