import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Services() {
  const servicesData = [
    {
      icon: "bi-activity",
      title: "Lorem Ipsum",
      desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
      delay: "100",
    },
    {
      icon: "bi-bounding-box-circles",
      title: "Sed ut perspici",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
      delay: "200",
    },
    {
      icon: "bi-calendar4-week",
      title: "Magni Dolores",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
      delay: "300",
    },
    {
      icon: "bi-broadcast",
      title: "Nemo Enim",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      delay: "400",
    },
  ];

  const pricingData = [
    { title: "Portrait Photography", price: "$160.00" },
    { title: "Fashion Photography", price: "$300.00" },
    { title: "Sports Photography", price: "$200.00" },
    { title: "Still Life Photography", price: "$120.00" },
    { title: "Wedding Photography", price: "$500.00" },
    { title: "Photojournalism", price: "$200.00" },
  ];

  const testimonialsData = [
    {
      img: "assets/img/testimonials/testimonials-1.jpg",
      name: "Saul Goodman",
      role: "Ceo & Founder",
      text:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    },
    {
      img: "assets/img/testimonials/testimonials-2.jpg",
      name: "Sara Wilsson",
      role: "Designer",
      text:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
    {
      img: "assets/img/testimonials/testimonials-3.jpg",
      name: "Jena Karlis",
      role: "Store Owner",
      text:
        "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    },
    {
      img: "assets/img/testimonials/testimonials-4.jpg",
      name: "Matt Brandon",
      role: "Freelancer",
      text:
        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    },
    {
      img: "assets/img/testimonials/testimonials-5.jpg",
      name: "John Larson",
      role: "Entrepreneur",
      text:
        "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    },
  ];

  return (
    <div className="services">
      <main className="main">
        {/* Page Title */}
        <div className="page-title" data-aos="fade">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1>Services</h1>
                  <p className="mb-0">
                    Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint
                    voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus
                    dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
                  </p>
                  <a href="contact.html" className="cta-btn">
                    Available for Hire
                    <br />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li><a href="index.html">Home</a></li>
                <li className="current">Services</li>
              </ol>
            </div>
          </nav>
        </div>

        {/* Services Section */}
        <section id="services" className="services section">
          <div className="container">
            <div className="row gy-4">
              {servicesData.map((service, index) => (
                <div
                  className="col-xl-3 col-md-6 d-flex"
                  data-aos="fade-up"
                  data-aos-delay={service.delay}
                  key={index}
                >
                  <div className="service-item position-relative">
                    <div className="icon">
                      <i className={`bi ${service.icon} icon`}></i>
                    </div>
                    <h4>
                      <a href="#" className="stretched-link">
                        {service.title}
                      </a>
                    </h4>
                    <p>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="pricing section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Pricing</h2>
            <p>Check my adorable pricing</p>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 gx-lg-5">
              {pricingData.map((item, index) => (
                <div className="col-lg-6" key={index}>
                  <div className="pricing-item d-flex justify-content-between">
                    <h3>{item.title}</h3>
                    <h4>{item.price}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            <p>What they are saying</p>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <Swiper
              modules={[Pagination, Autoplay]}
              loop={true}
              speed={600}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 1,
                },
              }}
            >
              {testimonialsData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item">
                    <div className="stars">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <i className="bi bi-star-fill" key={i}></i>
                        ))}
                    </div>
                    <p>{testimonial.text}</p>
                    <div className="profile mt-auto">
                      <img src={testimonial.img} className="testimonial-img" alt={testimonial.name} />
                      <h3>{testimonial.name}</h3>
                      <h4>{testimonial.role}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Services;
