import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Login from './components/Login'
import Register from './components/Register'
import Transfer from './components/Transfer';
import "./App.css";
import Navbar from "./utilities/NavBar";
import ItemsPage from "./pages/ItemsPage";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    }
  })
  return (
    <>
    <ThemeProvider theme = {theme}>
    <CssBaseline />
      <Paper>
      <Router>
        <div className="App">
          <Navbar />
          <div id="page-body">
            <Routes>               
              <Route exact path = '/transfer' component = {Transfer}/>
              <Route exact path = '/' component = {Login} />
              <Route exact path = '/register' component = {Register} />
              <Route path="/items" element={<ItemsPage/>} exact />
            </Routes>
          </div>
        </div>
      </Router>
      </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
