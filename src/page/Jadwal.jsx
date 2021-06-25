import React from "react"
import Card from "../components/Card"
import Table from "../components/Table"

function Jadwal(props) {
  return (
    <>
      <div className="content-left">
        <div className="container">
          <h3  className="mt-3">Daftar Menu</h3>
          <div className="row">
            <div className="col">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Dendeng"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-danger"
                    type="button"
                    id="button-addon2"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row p-2 mb-2">
            <div className="col-sm-12 col-md-6 px-1 mb-2">
              <select class="form-control">
                <option>Semua</option>
                <option>Makanan</option>
                <option>Minuman</option>
                <option>Camilan</option>
                <option>Pelengkap</option>
              </select>
            </div>
            <div className="col-sm-12 col-md-6 px-1">
              <select class=" form-control">
                <option>Populer</option>
                <option>Terdekat</option>
                <option>Unggulan</option>
                <option>Terbaru</option>
              </select>
            </div>
          </div>

          <h3>Rekomendasi</h3>
          <Card />
          <Card />
        </div>
      </div>
      <div className="content-right">
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <label>Bulan</label>
              <select class="form-control form-control-sm">
                <option>Mei</option>
              </select>
            </div>
            <div className="col">
              <label>Tahun</label>
              <select class="form-control form-control-sm">
                <option>2021</option>
              </select>
            </div>
            <div className="col">
              <label>Kurir</label>
              <select class="form-control form-control-sm">
                <option>YAM!</option>
              </select>
            </div>
            <div className="col">
              <label>Termin</label>
              <select class="form-control form-control-sm">
                <option>-</option>
              </select>
            </div>
            <div className="col d-flex align-items-end mt-3">
              <button className="btn btn-sm btn-danger btn-block">Bayar</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Jadwal
