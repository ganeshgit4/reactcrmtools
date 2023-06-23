import './App.css';
import Batches from './Component/BatchesComponent/BatchesComponent';
import Enquiry from './Component/EnquiryComponent/EnquiryComponent';
import Course from './Component/CourseComponent/CourseComponent';
import EnquiryData from './Component/EnquiryDataComponent/EnquiryData';
import Footer from './Component/FooterComponent/FooterComponent';

import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Feedback from './Component/FeedbackComponent/Feedback';
import FeedbackReview from './Component/FeedbackReviewComponent/FeedbackReview';
import Register from './Component/RegisterComponent/Register';
import Forgot from './Component/ForgotComponent/ForgotComponent';
import Login from './Component/LoginComponent/Login';
import CourseData from './Component/CourseDataComponent/CourseData';
import Employeget from './Component/EmpoyeGetComponent/Employeget';
import Interview from './Component/InterviewComponent/Interview';
import InterviewData from './Component/InterviewDataComponent/InterviewData';
import Menu from './Component/MenuComponent/MenuComponent';
import Profile from './Component/ProfileComponent/Profle';
import ResetPassword from './Component/ResetpasswordComponent/ResetPassword';
import Employe from './Component/EmployeComponent/Employe';
import BatchesGetComponent from './Component/BatchesgetComponent/BatchesGetComponent';


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
        <Route path='/lo' element={<Login/>}></Route>
        <Route path='/forgot' element={<Forgot/>}></Route>
        <Route path='/cd' element={<CourseData/>}></Route>
        <Route path='/enquirydata' element={<EnquiryData/>}></Route>
        <Route path='/empg' element={<Employeget/>}></Route>
        <Route path='/inter' element={<Interview/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/reset' element={<ResetPassword/>}></Route>
        <Route path='/batchesget' element={<BatchesGetComponent/>}></Route>
       
        
     </Routes>
     </BrowserRouter>
   
    <footer>
      
    <Footer/>
    </footer>

    </div>
  );
}

export default App;
