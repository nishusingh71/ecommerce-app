import React from "react";

const PageNotFound = () => {
  return (
    <>
      <section
        className="breadcrumb-section"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/breadcrumb.jpg)`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>PageNotFound</h2>
                <div className="breadcrumb__option">
                  <a href="./index.html">Home</a>
                  <span>PageNotFound</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h1 className="text-center">404 Error</h1>
      </div>
    </>
  );
};

export default PageNotFound;
