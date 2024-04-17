import React from 'react'
import vg from "../assets/2.webp"

const Home = () => {
  return (
  <>
    <div className="home">
        <main>
            <h1> TechStar</h1>
            <p>Soluton to all your problems</p>
        </main>
    </div>
    <div className="home2">
      <img src={vg} alt='Graphics'/>
      <div>
        <p>
          we are your one and only solution to tech problems
        </p>
      </div>

    </div>
  </>
  )
}

export default Home