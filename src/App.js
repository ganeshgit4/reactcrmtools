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
import Feedback from './Component/FeedbackComponent/Feedback';
import FeedbackReview from './Component/FeedbackReviewComponent/FeedbackReview';
import Register from './Component/RegisterComponent/Register';
import Forgot from './Component/ForgotComponent/ForgotComponent';

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
        <Route path='/feedback' element={<Feedback/>}></Route>
        <Route path='/rew' element={<FeedbackReview/>}></Route>
        <Route path='/reg' element={<Register/>}></Route>
      
     </Routes>
     </BrowserRouter>
   
    <footer>
      <Forgot></Forgot>
    <Footer/>
    </footer>

    </div>
  );
}

export default App;
