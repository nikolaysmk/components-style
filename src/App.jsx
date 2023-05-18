import { Header } from "./components/Header";
import { Accordion } from "./components/accordion";
import { accordionData } from "./data/accordionData";
import { About } from "./pages/about";

import {
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

const routes = createRoutesFromElements(
  <Route path="/about" element={<About />} />
);

function App() {
  return (
    <RouterProvider router={routes}>
      <div className="App">
        <Header />
        <Accordion section={accordionData}>This is in App</Accordion>
      </div>
    </RouterProvider>
  );
}

export default App;
