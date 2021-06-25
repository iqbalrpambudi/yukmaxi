import React from "react"
import Acordion from "../components/Acordion"
import Calendar from "../components/Calendar"

function Riwayat(props) {
  return (
    <>
      <div className="content-left">
        <div className="container">
          <h3>Riwayat</h3>

          <div className="row p-2 mb-2">
            <div className="col-sm-12 col-md-7 p-1">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cari bulan transaksi"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-light btn-sm"
                    type="button"
                    id="button-addon2"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-5 p-1">
              <select class="form-control">
                <option>Semua</option>
                <option>2021</option>
                <option>2020</option>
              </select>
            </div>
          </div>

          <Acordion data="April 2021" id="card-1" label="cards-1" show/>
          <Acordion data="Mei 2021" id="card-2" label="cards-2"/>
        </div>
      </div>
      <div className="content-right">
        <div className="container mt-3">
        <Calendar note={[2, 5, 6, 7,8,9,12,13,14,15,16,19,20,21,22,23,26,27,28,29,30]} />
        </div>
      </div>
    </>
  )
}

export default Riwayat
