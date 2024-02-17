
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Collage from './components/Collage';
import Scrolling from './components/Scrolling';
import Carouseler from './components/Carouseler';
function App() {
  return (
    <div>
        <Routes>
          <Route exact path='/'  element={<Main/>}  />
          <Route exact path='/Collage'  element={<Collage/>} />
          <Route exact path='/Carouseler'  element={<Carouseler/>}  />
          <Route exact path='/Scrolling'  element={<Scrolling/>}/>
        </Routes>
     
    </div>
  );
}

export default App;
