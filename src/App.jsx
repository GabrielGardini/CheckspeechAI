import React, {useEffect} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Prices from "./components/Prices";
import Form from "./components/Form";
import Solutions from "./components/Solutions";
import "./App.css";
import Initial from "./components/Initial";
import Client from "./components/Client";
import Cookies from "./components/Cookies/Cookies";
import Scripts from "./Scripts";

function App() {
  useEffect(() => {
    Scripts();
  },[]);

  return (
    <>
      <Header/>
      <Initial/>
      <Client/>
      <Cookies/>
      <Solutions/>
      <Prices/>
      <Form/>
      <Footer/>
    </>
  );
}

export default App;
