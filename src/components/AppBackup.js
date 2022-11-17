import './App.css';
import Myapp from './Mytable';
import React, { useEffect, useState } from "react";

function App() {
  var [state, setState] = useState([]);

  const getData = async () => {
    try {
      var res_data_and_headers = await fetch("http://localhost:5000/get_data");
      var res_data_and_headers_json =  await res_data_and_headers.json();
      setState(res_data_and_headers_json);
    } catch (e) {
      console.log("exception is ",e);
    }
  };

  // console.log(state);

  useEffect(() => {
    const intervalCall = setInterval(() => {
      getData();
    }, 5000);
    return () => {
      // clean up
      clearInterval(intervalCall);
    };
  }, []);
  return (
    <div className="App">
    {/* <Myapp/> */}
    <Myapp tabledata={state}/>
    <p>hi </p>
  </div>
  );
}

export default App;
