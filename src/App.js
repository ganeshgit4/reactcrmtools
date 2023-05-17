import logo from './logo.svg';

import './App.css';
import Batches from './Component/BatchesComponent/BatchesComponent';
import Enquiry from './Component/EnquiryComponent/EnquiryComponent';
import Course from './Component/CourseComponent/CourseComponent';

import EnquiryData from './Component/EnquiryDataComponent/EnquiryData';
import Footer from './Component/FooterComponent/FooterComponent';
import Menu from './Component/EnquiryComponent/MenuComponent/MenuComponent';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
      <Menu/>
      </header>
     <BrowserRouter>
     <Routes>
     
        <Route path='/enquiry' element={<Enquiry/>}></Route>
        <Route path='/batches' element={<Batches/>}></Route>
        <Route path='/courses' element={<Course/>}></Route>
      
     </Routes>
     </BrowserRouter>
   
    <footer>
    <Footer/>
    </footer>

    </div>
  );
}

export default App;
