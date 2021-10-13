
import NavBar from "./NavBar";
import HomeMenu from "./HomeMenu";

import "./App.css"

import headerImg from "./client-header-b.jpg";

function App() {
  return (
    <div className="App">

      <div className="header-wrapper">
        <img src={headerImg} alt="twinlande header"></img>
      </div>
      <NavBar/>
      <HomeMenu />


    </div>

  );
}

export default App;
