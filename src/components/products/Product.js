import React from 'react'
import './product.scss'

function Product({ img }) {
    return (
        <div className='product'>

            <div className="content">
                <div className="img-div">
                    <img src={img} alt="" />
                </div>

                <div className="details center">
                    <div className="footer">
                        <h2 className="head">Head Phones</h2>
                        <span className="rate ">$100</span>
                        <p className="desc">
                            This is a headphone
                        </p>

                        <span className="rating">
                            4.3
                        </span>

                    </div>
                    <span className="sub-footer">
                        <div className="btn btn-sec">
                            Add to cart
                        </div>
                        <div className="btn btn-prim">
                            Buy now
                        </div>

                    </span>
                </div>
            </div>



        </div>
    )
}

export default Product
