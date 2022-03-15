import React from 'react'

export default function NewsCard(Props) {
  return (
    <div>
      <div className="container1" style={{ marginTop: "55px" }}>
        <div className="img-container card-img-top" style={{ width: "335px", height: '200px' }}>
          <img src={Props.img} alt='img not found' />
        </div>
        <div className="content-container">
          <h2>{Props.batch}</h2>
          <h1>{Props.title}</h1>
          <p>{Props.discription}...</p>
          <a href={Props.url} className="btn">Read More...</a>
          <p><br /></p>
        </div>
      </div>
    </div>
  )
}


