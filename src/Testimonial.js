import React from 'react';
import "./TestimonialSection.css";
import Review1 from "./Review1.png";
import Review2 from "./Review2.png";
import Review3 from "./Review3.png";
import Reviewsarrows from "./Reviews arrows.png";

const TestimonialSection = () => {
  return (
    <section className='Testimonialsection'>
        <center><h2 style={{color:"#1AB69D"}}>Our Testimonials</h2></center>
        <center><h2 style={{color:"white"}}>What Our Students Have To Say</h2></center>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-4'>
            <div className="testimonial" style={{marginLeft:"20px"}}>
                <img src={Review1} alt='Review1'></img>
                <img src={Review2} alt='Review2' style={{marginLeft:"5%"}}></img>
                <img src={Review3} alt='Review3' style={{marginLeft:"5%"}}></img>
                <center><img src={Reviewsarrows} alt='Reviews arrows' style={{marginTop:'2%'}}></img></center>
                </div>
                </div>
                </div>
                </div>

    </section>
  );
}

export default TestimonialSection;
