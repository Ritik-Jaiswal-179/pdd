import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import CropRecommendation from './Components/CropRecommendation/CropRecommendation';
import DiseaseDetection from './Components/DiseaseDetection/DiseaseDetection';
import DiseaseDetectionsubmit from './Components/DiseaseDetection/DiseaseDetectionsubmit';
import Feedback from './Components/Feedback/Feedback';
import CropDetails from './Components/CropRecommendation/CropDetails/CropDetails';
import ProfilePage from './Components/Profile/Profile';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} ></Route>

          <Route path='/croprecommendation' element={<CropRecommendation />} ></Route>
          <Route path='/cropdetail' element={<CropDetails/>}/>

          <Route path='/diseasedetection' element={<DiseaseDetection />} ></Route>
          <Route path='/diseasedetectionsubmit' element={<DiseaseDetectionsubmit/>}/>

          <Route path='/Feedback' element={<Feedback />} ></Route>

          <Route path='/profile' element={<ProfilePage />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
