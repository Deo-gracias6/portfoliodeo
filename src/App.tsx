import  Navbar from "./component/Navbar";
import  Home from "./component/Home";
import About from "./component/About";
import Experiences from "./component/Experiences";
import Projects from "./component/Projects";
import Footer from "./component/Footer";

export default function App (){
  return(
    <div>
    <div className="p-5 md:px {15 %}">
    <Navbar/>
    <Home/>
    </div>
   < About/>
   <div className="p-5 md:px {15 %}">
<Experiences/>
<Projects/>   </div>

<Footer/>
    </div>
  )

}