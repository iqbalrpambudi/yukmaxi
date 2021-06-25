import React from "react"

function Table(props) {
  return (
    <div className="table-responsive mt-5">
      <div>
        <table className="table align-items-center">
          <thead className="thead">
            <tr>
              <th className="sort">
                <div class="input-group">
                  <input type="checkbox" />
                </div>
              </th>
              <th className="sort">Tanggal</th>
              <th className="sort">Menu</th>
              <th className="sort">Harga</th>
              <th className="sort">Pax</th>
              <th className="sort">B. Kirim</th>
              <th className="sort">Total</th>
            </tr>
          </thead>
          <tbody className="list">
            <tr>
              <td>
                <div class="input-group">
                  <input type="checkbox" />
                </div>
              </td>
              <td className="table-input">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  value="13 Mei 2021"
                  placeholder="hh-bbb-tttt"
                />
              </td>
              <td className="table-input">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  value="Dendeng Suwir"
                  placeholder="Masukan menu"
                />
              </td>
              <td className="table-input">Rp 25.000</td>
              <td className="table-input">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  style={{ maxWidth: `60px` }}
                  value="1"
                  placeholder="0"
                />
              </td>
              <td className="table-input">Rp 10.000</td>
              <td className="table-input">Rp 35.000</td>
            </tr>
            <tr>
              <td>
                <div class="input-group">
                  <input type="checkbox" />
                </div>
              </td>
              <td className="table-input">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="hh-bbb-tttt"
                />
              </td>
              <td className="table-input">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Masukan menu"
                />
              </td>
              <td className="table-input">Rp -</td>
              <td className="table-input">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  style={{ maxWidth: `60px` }}
                  placeholder="0"
                />
              </td>
              <td className="table-input">Rp -</td>
              <td className="table-input">Rp -</td>
            </tr>
            <tr>
              <td>
                <div class="input-group">
                  <input type="checkbox" />
                </div>
              </td>
              <td className="table-input">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="hh-bbb-tttt"
                />
              </td>
              <td className="table-input">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Masukan menu"
                />
              </td>
              <td className="table-input">Rp -</td>
              <td className="table-input">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  style={{ maxWidth: `60px` }}
                  placeholder="0"
                />
              </td>
              <td className="table-input">Rp -</td>
              <td className="table-input">Rp -</td>
            </tr>
            <tr>
              <td>
                <div class="input-group">
                  <input type="checkbox" />
                </div>
              </td>
              <td className="table-input">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="hh-bbb-tttt"
                />
              </td>
              <td className="table-input">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Masukan menu"
                />
              </td>
              <td className="table-input">Rp -</td>
              <td className="table-input">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  style={{ maxWidth: `60px` }}
                  placeholder="0"
                />
              </td>
              <td className="table-input">Rp -</td>
              <td className="table-input">Rp -</td>
            </tr>
            <tr>
              <td>
                <div class="input-group">
                  <input type="checkbox" />
                </div>
              </td>
              <td className="table-input">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="hh-bbb-tttt"
                />
              </td>
              <td className="table-input">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Masukan menu"
                />
              </td>
              <td className="table-input">Rp -</td>
              <td className="table-input">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  style={{ maxWidth: `60px` }}
                  placeholder="0"
                />
              </td>
              <td className="table-input">Rp -</td>
              <td className="table-input">Rp -</td>
            </tr>
            <tr>
              <td colSpan="7" className="text-center"><button className="btn btn-white btn-block shadow-sm border">Tambah Baris</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
