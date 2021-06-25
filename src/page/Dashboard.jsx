import React from "react"
import Card from "../components/Card"
import Calendar from "../components/Calendar"

function Dashboard(props) {
  return (
    <>
      <div className="content-left">
        <div className="container">
          <h3 className="mt-3">Menu Hari ini</h3>
          <div className="row p-2 mb-2">
            <div className="col-sm-12 col-md-7 p-1">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cari "
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
            <div className="col-sm-12 col-md-5 p-1">
              <select class="form-control">
                <option>Small select</option>
              </select>
            </div>
          </div>

          <Card />
          <Card />
        </div>
      </div>
      <div className="content-right">
        <div className="container pt-5">
          <Calendar note={[12, 13, 14, 15]} />
        </div>
      </div>
    </>
  )
}

export default Dashboard
