
import NavBar from "./NavBar";

import "./App.css"
import headerImg from "./client-header.jpg";

function App() {
  return (
    <div className="App">

      <div className="header-wrapper">
        <img src={headerImg} alt="Twinlande header"></img>
      </div>

      <NavBar/>

    </div>

  );
}

export default App;
