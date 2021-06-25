import React from "react"
import { Switch, Route, Link, Redirect } from "react-router-dom"
import Dashboard from "./Dashboard"
import Jadwal from "./Jadwal"
import Riwayat from "./Riwayat"
import Notifikasi from "./Notifikasi"

function Layouts({ children }) {

  console.log(window.location.pathname)

  return (
    <div className="wrapper">
      <nav id="sidebar">
        <div className="sidebar-header mb-5">
          <h3 className="text-center text-white mt-2 display-4">YukMaxi</h3>
        </div>
        <ul class="sidebar-body pt-5">
          <Link to="/admin/dashboard" className={`sidebar-item ${window.location.pathname === "/admin/dashboard" ? "active" : null}`}>
            <div className="d-flex align-items-center">
              <i class="fas fa-columns fa-lg mr-2"></i>Dashboard
            </div>
          </Link>
          <Link to="/admin/jadwal" className={`sidebar-item ${window.location.pathname === "/admin/jadwal" ? "active" : null}`}>
            <div className="d-flex align-items-center">
              <i class="fas fa-list-ul fa-lg mr-2"></i>Isi Jadwal
            </div>
          </Link>
          <Link to="/admin/riwayat" className={`sidebar-item ${window.location.pathname === "/admin/riwayat" ? "active" : null}`}>
            <div className="d-flex align-items-center">
              <i class="fas fa-history fa-lg mr-2"></i>Riwayat
            </div>
          </Link>
          <a className="sidebar-item">
            <div className="d-flex align-items-center">
              <i class="fas fa-bell fa-lg mr-2"></i>Notifikasi
            </div>
          </a>
          <a className="sidebar-item" style={{marginTop:`30vh`}}>
            <div className="d-flex align-items-center">
              <i class="fas fa-user fa-lg mr-2"></i>Akun
            </div>
          </a>
        </ul>
      </nav>
      <div id="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="d-flex align-items-center">
            <i className="fas fa-bars px-2 d-block" id="sidebarCollapse" />
          </div>
        </nav>
        <div className="main-content">
          <Switch>
            <Route path="/admin/dashboard" component={Dashboard} />
            <Route path="/admin/riwayat" component={Riwayat} />
            <Route path="/admin/jadwal" component={Jadwal} />
            <Route path="/admin/notifikasi" component={Notifikasi} />

            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default Layouts
