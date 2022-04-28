import './App.css';
import Logo from './components/Logo/Logo';
import Header from './components/Header';
import Links from './components/Links/Links';
import initFontAwesome from './components/Icon/Icon';
initFontAwesome();

function App() {
  return (
    <div className="App">
      <Header/>
      <Logo/>
      <Links/>
    </div>
  );
}

export default App;
