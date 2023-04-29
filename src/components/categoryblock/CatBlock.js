import React from 'react'
import './catblock.scss'
function CatBlock({img}) {
    return (
        <div className='catblock'>

            <div className="content center">


                <div className="bgimg center">
                    <img src={img} alt="" />



                </div>

                <div className="img-overlay center">
                    <h2 className="head ">
                        Comics
                    </h2>
                    <p className="desc center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, est?
                    </p>


                </div>



            </div>


        </div>
    )
}

export default CatBlock
