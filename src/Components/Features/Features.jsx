import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className='features-section'>
        <div className="container">
            <div className="feature-content">
                <h6>Features</h6>
                <h2>What I Do</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magni officia ducimus?</p>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-heading">
                                <h5>React Developer</h5>
                                <h2>01</h2>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.</p>
                            
                            <a href="#" className="btn read-btn">Read More +</a>


                            <div className="icon">
                                <span>Icon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features;
