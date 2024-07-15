import React from "react";

export default function Services() {
  return (
    <>
      <div class="container-fluid bg-breadcrumb">
        <div class="container text-center py-5" style={{ maxWidth: "900px;" }}>
          <h3 class="text-white display-3 mb-4">Our Services</h3>
          <p class="fs-5 text-white mb-4">
            Help today because tomorrow you may be the one who needs more
            helping!
          </p>
          <ol class="breadcrumb justify-content-center mb-0">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li class="breadcrumb-item active text-white">Services</li>
          </ol>
        </div>
      </div>
      <div class="container-fluid service py-5 bg-light">
        <div class="container py-5">
          <div class="text-center mx-auto pb-5" style={{ maxWidth: " 800px;" }}>
            <h5 class="text-uppercase text-primary">What we do</h5>
            <h1 class="mb-0">What we do to protect environment</h1>
          </div>
          <div class="row g-4">
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="service-item">
                <img
                  src="img/service-1.jpg"
                  class="img-fluid w-100"
                  alt="Image"
                />
                <div class="service-link">
                  <a href="#" class="h4 mb-0">
                    Raising money to help
                  </a>
                </div>
              </div>
              <p class="my-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="service-item">
                <img
                  src="img/service-2.jpg"
                  class="img-fluid w-100"
                  alt="Image"
                />
                <div class="service-link">
                  <a href="#" class="h4 mb-0">
                    {" "}
                    close work with services
                  </a>
                </div>
              </div>
              <p class="my-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="service-item">
                <img
                  src="img/service-3.jpg"
                  class="img-fluid w-100"
                  alt="Image"
                />
                <div class="service-link">
                  <a href="#" class="h4 mb-0">
                    Pro Guided tours only
                  </a>
                </div>
              </div>
              <p class="my-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="service-item">
                <img
                  src="img/service-4.jpg"
                  class="img-fluid w-100"
                  alt="Image"
                />
                <div class="service-link">
                  <a href="#" class="h4 mb-0">
                    Protecting animal area
                  </a>
                </div>
              </div>
              <p class="my-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div class="col-12">
              <div class="d-flex align-items-center justify-content-center">
                <a
                  class="btn-hover-bg btn btn-primary text-white py-2 px-4"
                  href="#"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
