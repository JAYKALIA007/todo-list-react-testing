import './App.css';
import Body from './Body';
import Header from './Header';
function App() {
  return (
    <div className='h-screen' >
      <Header title='Todo list' description='One todo at a time.' />
      <Body />
    </div>
  );
}

export default App;
