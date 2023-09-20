import Logo from './Componentes/Logo';
import './App.css';
import ListaDeTareas from './Componentes/ListaDeTareas';


function App() {
  return (
    <div className="App">
      <Logo />
      <div className='lista'>
        <h1 className='titulo'>Mis Tareas</h1>
          <ListaDeTareas />
      </div>
    </div>
  );
};

export default App;