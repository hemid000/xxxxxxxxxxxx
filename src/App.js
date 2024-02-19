import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home/Home';
import Spline from '@splinetool/react-spline';
import "./sass/App.scss"
import Firstextsect from './Components/Pages/Home/Firstextsect';
export default function App() {

  return (
    <>
      <div className="App">
      
          {/* <Spline className="spline-container" scene="https://prod.spline.design/8xeFBFOozjHkVaye/scene.splinecode" /> */}
         
         <Home /> 
        

        

      </div>

    </>
  );
}
