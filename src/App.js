import "./App.css";
import Profile from "./profile";
import Experiences from "./experience";
import Technologies from "./technologies";
import data from "./data/data.json";

function App() {
  return (
    <div className="App">
      <Profile />
      <Experiences />
      <Technologies tech={data.technologies} />
    </div>
  );
}

export default App;
