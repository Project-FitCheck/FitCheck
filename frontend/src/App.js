import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/closet' element={<closet/>}/>
          <Route path='/closet/add' element={<></>}/>
          <Route path='/model/edit' element={<model/>}/>
          <Route path='/profile' element={<Profile/>}/>
          {/*<Route path='/' element={<></>}/>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
