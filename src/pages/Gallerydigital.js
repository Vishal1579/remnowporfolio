import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useParams } from 'react-router-dom';

function Gallerydigital() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/digitalmarketing/${id}`)
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
    <div className="gallerydigital">
      <main className="main">

        {/* Page Title */}
        <div className="page-title" data-aos="fade">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                <br/><br/>
                    {data ? (
    <h1>{data.headingname}</h1>
  ) : (
    <p>Loading...</p>
  )}
                  <p className="mb-0">
                    {data && data.headerdescription}
                  </p>
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
                <li className="current">Digital Marketing</li>
              </ol>
            </div>
          </nav>
        </div>

        {/* Gallery Details Section */}
        <section id="gallery-details" className="gallery-details section">
          <div className="container" data-aos="fade-up">

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              loop={true}
              speed={600}
              autoplay={{ delay: 5000 }}
              slidesPerView="auto"
              navigation
              pagination={{ clickable: true }}
              className="portfolio-details-slider"
            >
              {galleryImages.map((img, index) => (
                <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img className='swiperimagescssdigital'
  src={`/assets/img/gallery/${img}`} alt={`Gallery ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="row justify-content-between gy-4 mt-4">
              <div className="col-lg-8" data-aos="fade-up">
                <div className="portfolio-description">
                  <h2>   {data && data.subheading}
                 
                    
                    {/*Healthcare Web Development – Enhancing Online Visibility for Springfield Clinic */}

                  </h2>
                  <p>
                  {data && data.subcontent1}
                  </p>

                  <div className="testimonial-item">
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>
                      {data && data.clientreview}
                      </span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                    <div>
                      <img src="" className="testimonial-img" alt="" />
                      <h3>   {data && data.clientname}</h3>
                      <h4>   {data && data.clientrole}</h4>
                    </div>
                  </div>

                  <ul className="custom-bullets">
                    <li> {data && data.subpoint1}</li>
                    <li> {data && data.subpoint2}</li>
                    <li> {data && data.subpoint3}</li>
                    
                    <li> {data && data.subpoint4}</li>
                     </ul>
                </div>
              </div>

              <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                <div className="portfolio-info">
                  <h3>Project information</h3>
                  <ul>
                    <li><strong>Category</strong>  {data && data.category}</li>
                    
                    <li><strong>Client</strong>  {data && data.clientdetail}</li>
                    <li>
  <div style={{ display: 'flex', gap: '10px' }}>
    <a href={data?.facebookurl} target="_blank" className="facebook">
      <i className="bi bi-facebook" style={{ color: "white", fontSize: "25px" }} />
    </a>
    <a href={data?.instagramurl} target="_blank" className="instagram">
      <i className="bi bi-instagram" style={{ color: "white", fontSize: "25px" }} />
    </a>
  </div>
</li>
                    {/*  <li><strong>Facebook URL</strong><a href={data && data.facebookurl }  target="_blank" style={{ color: 'white' }}> {data && data.facebookurl}
                     </a></li>
                     <li><strong>Instagram URL</strong><a href={data && data.instagramurl }  target="_blank" style={{ color: 'white' }}> {data && data.instagramurl}
                     </a></li>*/}
                    <li>
                      <a href={data && data.facebookurl }  target="_blank" className="btn-visit align-self-start">Visit Facebook</a>
                    </li>
                    <li>
                      <a href={data && data.instagramurl }  target="_blank" className="btn-visit align-self-start">Visit Instagram</a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Gallerydigital;
