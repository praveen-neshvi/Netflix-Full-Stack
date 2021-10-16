import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthContextProvider} from "./components/context/authContext/AuthContext";
import {MovieContextProvider} from "./components/context/movieContext/movieContext";
import {ListContextProvider} from "./components/context/listContext/movieContext";

ReactDOM.render(
  <React.StrictMode>
<AuthContextProvider>
<MovieContextProvider>
<ListContextProvider>
<App />
</ListContextProvider>
</MovieContextProvider>
 </AuthContextProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
  