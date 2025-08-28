
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";
const App = () => {
  return (
     <div id="main">
    
      <Tooltip text="This is a tooltip">

        <div>
          <h2>Hover over me</h2>
          </div>
      </Tooltip>


      <Tooltip text="This is another tooltip">
      <div>
        <p>Hover over me to see another tooltip</p>
        </div>
      </Tooltip>
    </div>
  );
  
}

export default App
