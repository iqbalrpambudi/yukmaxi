import React from "react"

function Card(props) {
  return (
    <div className="card shadow-sm bg-white p-3 mb-3">
      <div className="row">
        <div className="col">
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center mr-4">
              <i className="fas fa-star mr-2 text-warning"></i>
              <span className="font-weight-bold">4.7</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa fa-map-marker mr-2 text-danger"></i>
              <span className="font-weight-bold">4.7</span>
            </div>
          </div>
        </div>
        <div className="col-auto">
          <span className="badge badge-info">Silver</span>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-auto">
          <div className="img-square">
            <img
              src={require("../assets/images/friedrice.jpg").default}
              alt="..."
            />
          </div>
        </div>
        <div className="col p-0">
          <h4 className="lead m-0 font-weight-bold">Nasi Goreng</h4>
          <span>Rumah makan sederhana</span>
          <div className="d-flex align-items-center mt-3">
            <i className="fa fa-pizza-slice text-danger mr-2"></i>
            63 Porsi
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
