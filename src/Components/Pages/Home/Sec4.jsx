import React, {useEffect} from 'react'
// import AOS from "aos";
// import "aos/dist/aos.css";
import image1 from "../../../images/page1.png";

const Sec4 = () => {
    // useEffect(() => {
    //     AOS.init({ duration: "1000" });
    //     AOS.refresh();
    //   }, []);
  return (
    <div className="container mt-3 mb-3">

      <img
        style={{ width: "100%", height: "700px", objectFit: "cover" }}
         src={image1} alt="" />
    </div>
  )
}

export default Sec4
