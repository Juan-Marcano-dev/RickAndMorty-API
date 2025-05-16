import Background from "./components/Background";
import CharacterList from "./components/CharacterList";
import "./components/styles/GlobalStyles.scss";

function App() {
  return (
    <>
      <Background />
      <div className="app-content">
        <CharacterList />
      </div>
    </>
  );
}

export default App;
