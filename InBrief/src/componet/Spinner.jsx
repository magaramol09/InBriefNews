import React from 'react'

export default function Spinner() {
  return (
    <div style={{ textAlign: "center", marginTop: "20%", marginBottom: "25%" }}>
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

