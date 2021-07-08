import "./wrappscss/reset.scss"
import "./app.scss"
import Project from "./components/project/project"
import {useRef ,useEffect} from "react"
function App() {
 

  return (
    <div className="App">
      <Project/>
    </div>
  );
}

export default App;
