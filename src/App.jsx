import { useRoutes } from "react-router-dom";
import routes from "./routes/route";
import "./styles/style.scss";

function App() {
  const routing = useRoutes(routes);
  return <div className="container">{routing}</div>;
}

export default App;
