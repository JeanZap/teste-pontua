import { RouterProvider } from "react-router-dom";
import { router } from "../../routes";
import { Carregando } from "../components/Carregando";
import "./App.css";
import { Provider } from "../components/Provider";

function App() {
  return (
    <Provider>
      <RouterProvider fallbackElement={<Carregando />} router={router} />
    </Provider>
  );
}

export default App;
