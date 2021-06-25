import React from "react"
import { Link } from "react-router-dom"
function Login(props) {
  return (
    <div className="row m-0">
      <div className="col-sm-12 col-md-6 p-0">
        <img
          className="img-full"
          src={require("../assets/images/roastedchicken.jpg").default}
          alt=""
        />
      </div>
      <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
        <div
          className="rounded p-5 w-100 mt-sm-4"
          style={{ maxWidth: `450px` }}
        >
          <h3 className="text-center mb-2 display-4">YukMaxi</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Sandi</label>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-3">
              <div className="d-flex justify-content-between flex-wrap">
                <label className="form-check-label">
                  Belum punya akun ? <a href="/#">Daftar</a>
                </label>
                <label className="form-check-label">
                  <a href="/#">Lupa Sandi</a>
                </label>
              </div>
            </div>
            <div className="d-grid mt-4">
              <Link to="/admin" className="btn btn-danger btn-block">
                Masuk
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
