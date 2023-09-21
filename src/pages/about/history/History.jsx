import React from 'react'
import AboutHistroy from '../../../components/About/AboutHistroy/AboutHistroy'
import TimelineHistroy from '../../../components/About/TimelineHistroy/TimelineHistroy'


const History = () => {
  return (
    <section className="mt-36 lg:mt-44 container mx-auto px-4">
        <AboutHistroy/>
        <TimelineHistroy/>
    </section>
  )
}

export default History