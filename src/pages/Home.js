import React from "react";
import { Link } from 'react-router-dom';

function Home(){
    console.log("Home component loaded");
    return(
        <div className="home">
            <main className="main">
  {/* Hero Section */}
  <section id="hero" className="hero section">
    <div className="container">
      <div className="row justify-content-center">
        <div
          className="col-lg-6 text-center"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <h2>
            <br/><br/>
            <span>Digital Solutions That </span>
            <span className="underlight">Drive Results</span> {/*a Professional
            <span> Photographer from New York City</span>*/}
          </h2>
          <p>
          From custom web design to enterprise apps — REMNOW Solutions delivers real value, real growth.
          </p>
          <a href="/contact" className="btn-get-started">
         Contact Us
            <br />
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* /Hero Section */}
  {/* Gallery Section */}
  <section id="gallery" className="gallery section">
    <div className="container-fluid" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4 justify-content-center">
        <h1 className="subheading">Websites</h1>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/gallery/springfield.png`}
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
            {/*   <a
                href="assets/img/gallery/springfield.png"
                title="Gallery 1"
                className="glightbox preview-link"
              >
                <i className="bi bi-arrows-angle-expand" />
              </a>
              <a href="/websites" className="details-link">
                <i className="bi bi-link-45deg" />
              </a> */}

                <Link to="/websites/1" className="details-link">
                     <i className="bi bi-link-45deg" />
                </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/gallery/culture.png`}
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
             
              <Link to="/websites/2" className="details-link">
                     <i className="bi bi-link-45deg" />
                </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item ">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/gallery/kurinji.png`}
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
              
              <Link to="/websites/4" className="details-link">
                     <i className="bi bi-link-45deg" />
                </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/gallery/TTK.png`}
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
              
              <Link to="/websites/3" className="details-link">
                     <i className="bi bi-link-45deg" />
                </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/gallery/vsaravananco.png`}
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">

              <Link to="/websites/5" className="details-link">
                     <i className="bi bi-link-45deg" />
                </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/gallery/jeyarcottage.png`}
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
             
             
              <Link to="/websites/6" className="details-link">
                     <i className="bi bi-link-45deg" />
                </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/gallery/greentrends.png`}
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
            
            
            <Link to="/websites/7" className="details-link">
                     <i className="bi bi-link-45deg" />
                </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/gallery/duraiwheels.png`}
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
             
                 
            <Link to="/websites/8" className="details-link">
                     <i className="bi bi-link-45deg" />
                </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/gallery/jdmemorialtrust.png`}
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
             
            <Link to="/websites/9" className="details-link">
                     <i className="bi bi-link-45deg" />
                </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/gallery/thorsden.png`}
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
             
            <Link to="/websites/10" className="details-link">
                     <i className="bi bi-link-45deg" />
                </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/gallery/studio11.png`}
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
             
            <Link to="/websites/11" className="details-link">
                     <i className="bi bi-link-45deg" />
                </Link>
            </div>
          </div>
        </div> 
        {/* End Gallery Item */}
    
      </div>
    </div>
  </section>
  {/* /Gallery Section */}




   {/* Gallery Section */}
   <section id="gallery" className="gallery section">
    <div className="container-fluid" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4 justify-content-center">
        <h1 className="subheading">Digital Marketing</h1>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/gallery/digitalkurinji.jpg`}
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
            
             

                <Link to="/digitalmarketing/1" className="details-link">
                     <i className="bi bi-link-45deg" />
                </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/gallery/digitalculture.jpg`}
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
             
              <Link to="/digitalmarketing/2" className="details-link">
                     <i className="bi bi-link-45deg" />
                </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item ">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/gallery/digitalstudio11.jpg`}
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
             
              <Link to="/digitalmarketing/3" className="details-link">
                     <i className="bi bi-link-45deg" />
                </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/gallery/digitalvoltas.jpg`}
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
             
              <Link to="/digitalmarketing/4" className="details-link">
                     <i className="bi bi-link-45deg" />
                </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/gallery/digitaljeyarcottage.jpg`}
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
             
              <Link to="/digitalmarketing/5" className="details-link">
                     <i className="bi bi-link-45deg" />
                </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/gallery/digitalduraiwheels.jpg`}
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
              
              <Link to="/digitalmarketing/6" className="details-link">
                     <i className="bi bi-link-45deg" />
                </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/gallery/digitalgreentrends.jpg`}
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
             
            <Link to="/digitalmarketing/7" className="details-link">
                     <i className="bi bi-link-45deg" />
                </Link>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
       


      </div>
    </div>
  </section>
  {/* /Gallery Section */}
</main>




        </div>
    )
}

export default Home;