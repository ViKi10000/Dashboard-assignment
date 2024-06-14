import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import './App.css';
import Header from './components/top/Header';
import SideBar from './components/side/SideBar';
import Main from './components/main/Main';

import MainFill from './components/main/MainFill';



function App() {
  return (
    <>
    
   <Header/>
   <SideBar/>
   <Main/>
   <MainFill/>
   </>
  
  );
}

export default App;
