import React from "react"

function Acordion(props) {
  return (
    <div className="accordion shadow-sm mb-3">
      <div className="card">
        <div
          className="card-header p-2 d-flex align-items-center justify-content-between"
          id={props.id}
          data-toggle="collapse"
          data-target={`#${props.label}`}
          aria-expanded="true"
          aria-controls={props.label}
        >
          <h2 className="mb-0">
            <span className="btn btn-link text-dark">{props.data}</span>
          </h2>
          <i className="fa fa-chevron-down"></i>
        </div>
        <div
          id={props.label}
          className={`collapse ${props.show ? "show" : null}`}
        >
          <div className="card-body">
            <div className="row">
              <div className="col">Hari</div>
              <div className="col-auto">21 Hari</div>
            </div>
            <div className="row">
              <div className="col">Jumlah</div>
              <div className="col-auto">2100 porsi</div>
            </div>

            <hr className="my-3" />

            <div className="row">
              <div className="col">Termin</div>
              <div className="col-auto">-</div>
            </div>
            <div className="row">
              <div className="col">Total Harga</div>
              <div className="col-auto">Rp 90.000.000</div>
            </div>
            <div className="row">
              <div className="col">Biaya Layanan</div>
              <div className="col-auto">Rp 15.000</div>
            </div>

            <hr className="my-3" />

            <div className="row">
              <div className="col">Total</div>
              <div className="col-auto">
                <b>Rp 90.015.000</b>
              </div>
            </div>
            <div className="row">
              <div className="col">Status</div>
              <div className="col-auto">
                <b className="text-success">Lunas</b>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <button className="btn btn-danger btn-block">Unduh PDF</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Acordion
