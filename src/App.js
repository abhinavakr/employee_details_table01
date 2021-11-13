import './App.css'
import Homepage from './componente/homepage/homepage'
import Login from './componente/login/login'
import Register from './componente/register/register'
import { BrowserRouter, Route, Routes , Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
		<BrowserRouter>
        <Routes >
			<Route exact path="/"
				render={() => {
					return (<Navigate to="/home" /> )
				}}/>
        	<Route path="/home" element={<Homepage/>}/>
			<Route path="/login" element={<Login/>}/>
        	<Route path="/register" element={<Register/>}/>
        </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;
