import React from "react"

function Calendar(props) {
  function listCalendar(val) {
    let list = []
    let index = 0
    console.log(props.note[0])
    for (let i = 0; i < val; i++) {
      if (props.note[index] === i + 1) {
        list.push(
          <button>
            <time dateTime={`2021-04-${i + 1}`}>{i + 1}</time>
            <div className="note"></div>
          </button>
        )
        index += 1
      } else {
        list.push(
          <button>
            <time datetime={`2021-04-${i + 1}`}>{i + 1}</time>
          </button>
        )
      }
    }
    return list
  }

  return (
    <div className="calendar">
      <div className="month-indicator"> April 2021 </div>
      <div className="day-of-week">
        <div>Sen</div>
        <div>Sel</div>
        <div>Rab</div>
        <div>Kam</div>
        <div>Jum</div>
        <div className="text-danger">Sab</div>
        <div className="text-danger">Min</div>
      </div>
      <div className="date-grid">{listCalendar(30)}</div>
    </div>
  )
}

export default Calendar
