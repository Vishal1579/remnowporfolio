import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useParams } from 'react-router-dom';

function Galleryapp() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/digitalmarketing/${id}`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error('Error fetching data:', err));
  }, [id]);

  const galleryImages = [
    data?.imagename1,
    data?.imagename2,
    data?.imagename3
  ].filter(Boolean); 

  return (
    <div className="galleryapp">
      <main className="main">

        {/* Page Title */}
        <div className="page-title" data-aos="fade">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                
                <h3 style={{ paddingTop: "10%" }}>Coming Soon..</h3>
                 
                  <a href="/contact" className="cta-btn">
                    Contact Us<br />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li><a href="/">Home</a></li>
                <li className="current"> App</li>
              </ol>
            </div>
          </nav>
        </div>
        
        {/* Gallery Details Section */}
        <section id="gallery-details" className="gallery-details section">
          <div className="container" data-aos="fade-up">

                <p style={{textAlign:"center"}}>Applications Under Construction</p>
                </div>
                </section>
            </main>
    </div>
  );
}

export default Galleryapp;
