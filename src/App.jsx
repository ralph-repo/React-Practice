import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
/*
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
*/

function App() {

	const [mode, setMode] = useState('light');

	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			msg: message, 
			type: type
		})
		setTimeout(() =>{
			setAlert(null);
		}, 6000);
	};
	
	const toggleMode = () => {
		if(mode === 'light'){
			console.log('here to set mode dark '+mode);
			setMode('dark');
			document.body.style.backgroundColor = 'brown';
			showAlert("Dark Mode enabled", "success");
		}
		else{
			console.log('here to set mode light '+ mode);
			setMode('light');
			document.body.style.backgroundColor = 'white';
			showAlert("Dark Mode disabled", "warning");
		}
	};

	return (
		<>
			{/* <Router> */}
				<Navbar title="React" mode={mode} toggleMode={toggleMode}/>
				<Alert alert = {alert} />
				<div className="container my-3">
					{/* <Routes>
						<Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Format text : " mode={mode}/>} />
						<Route exact path="/About" element={<About />} />
					</Routes> */}
					<TextForm showAlert={showAlert} heading = "Format text : " mode={mode}/>
				</div>
			{/* </Router> */}
			{/* <About/> */}
		</>
	);
}

export default App;
