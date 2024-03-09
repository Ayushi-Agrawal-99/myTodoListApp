import Body from "./components/Body";
import {Provider} from "react-redux";
import store from "./utils/store";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";


function App() {

  const [darkMode, setDarkMode] = useState(false);
  return (
    <Provider store = {store}>
      <ThemeContext.Provider value = {{darkMode, setDarkMode}}>
        <div>
          <Body />
        </div>
      </ThemeContext.Provider>
    </Provider>
  )
}

export default App;
