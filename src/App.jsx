import HOME from './HOME/Home';
import Menu from './Menu';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
function App() {
    return ( 
    <BrowserRouter>
    <Menu/>
        <Routes>
            <Route path='/' element={<HOME/>}/>
        </Routes>
    </BrowserRouter>
    );
}

export default App;