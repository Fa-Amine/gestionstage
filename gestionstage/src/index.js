import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider,defaultSystem} from "@chakra-ui/react";
import GlobalProvider from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
<<<<<<< HEAD
      <ChakraProvider value = {defaultSystem}>
      <App />
    </ChakraProvider>
=======
       <GlobalProvider>

        <ChakraProvider value = {defaultSystem}>
          <App />
        </ChakraProvider>
    </GlobalProvider>

>>>>>>> fd36a2a77f8d894c008bd54927205c51dffb838d
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
