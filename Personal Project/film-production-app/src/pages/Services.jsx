import React from "react";

export default function Services() {
  return (
    <div>
      <h1 className="text-center">Our Services</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
        <div class="col ">
          <div class="card h-30">
            <img
              src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
              style={{ height: "350px" }}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Spot Boys for Shooting</h5>
              <p class="card-text">
                We are provides spot boy at afforadable rates for your Shooting.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-99">
            <img
              src="data:image/jpeg;base64,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"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Productions Related Items here.</h5>
              <p class="card-text">
                Here we provides also productions box and chair tables tents &
                tea setups. Arranges lightman and cameraman also. Arranges
                Catering man for breakfast and lunch.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-50">
            <img
              src="data:image/png;base64,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"
              class="card-img-top"
              alt="..."
              style={{ height: "350px" }}
            />
            <div class="card-body">
              <h5 class="card-title">Ask More Question.</h5>
              <p class="card-text">
                More Question to Contact me at 91XXXXXX78.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
