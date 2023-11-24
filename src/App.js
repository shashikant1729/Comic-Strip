import './App.css';
import {Routes, Route } from "react-router-dom";


import {Header, Home, About} from './components/Index'

function App() {
  return (
    <div className="flex flex-col App h-full   scroll-smooth bg-bg-image2 bg-cover bg-no-repeat ">
      {/* <div className='text-red-500'>hello</div> */}
      <Header/>
      <Routes>
				<Route path="/" element={<Home />} />
				<Route exact path="/about" element={<About />} />
			</Routes>
      
    </div>
  );
}

export default App;
