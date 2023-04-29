import React from 'react'
import Poster from '../../components/poster/Poster'
import CatBlock from '../../components/categoryblock/CatBlock'

import prod1 from '../../assets/prod1.jpeg'
import prod2 from '../../assets/prod2.jpeg'
import cat1 from '../../assets/bg.jpg'
import cat2 from '../../assets/bg2.jpg'
import cat3 from '../../assets/bg3.jpg'

import './home.scss'
import Product from '../../components/products/Product'







function Home() {
  return (
    <div className='home'>
      <Poster />

      <div className="container">

        <div className="categories center">

          <h2 className="head">Product Categories</h2>
          <p className="sub-head">
            World class product categories
          </p>
          <div className="all-catego">
            <CatBlock img={cat1}/>
            <CatBlock img={cat3}/>
            <CatBlock img={cat2}/>
            <CatBlock img={cat3}/>
            <CatBlock img={cat2}/>

          </div>

        </div>



        <div className="products center">

          <h2 className="head">Brand New Products</h2>
          <p className="sub-head">
            World class products
          </p>

          <div className="all-prod">
            <Product img={prod1} />
            <Product img={prod2} />
            <Product img={prod1} />
            <Product img={prod2} />
            <Product img={prod2} />
            <Product img={prod1} />
            <Product img={prod2} />
          </div>


        </div>




      </div>

    </div>
  )
}

export default Home
