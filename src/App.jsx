
import CharacterList from './components/CharacterList'
import './App.css';


const ComponenteConFondo = () => {
    return (
      <div className="background-image">
      </div>
    );
  };

  


function App() {
  return <div className='background-image text-white'>
    <h1 className='font-new text-center display-1 py-4'>Rick And Morty</h1>
    
  <CharacterList/>
  </div>;
  
}

export default App;
