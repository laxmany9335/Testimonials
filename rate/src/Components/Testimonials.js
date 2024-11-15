import React from 'react'
import Card from './Card'

function Testimonials(props) {
    let reviews = props.reviews
  return (
    <div>
       {
        reviews.map((review)=>
            <Card review = {review}></Card>
          )
       }
    </div>
  )
}

export default Testimonials