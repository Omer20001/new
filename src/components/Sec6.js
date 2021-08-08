import React from 'react'
import background from "../components/img1.jpg"

function Sec6() {
    return (
        <div className="sec4">
            <br />
            <br />
            <br />
            <br />


            <div className="latest"><h1>Latest News</h1></div>
            <br />
            <div className="diivv">
            <div style={{"width":"700px"}}><p className="paragraf">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p></div>
            
            <div><a  className="leftt" href="#">
            View All News</a></div>
            </div>

            <br />
            <br />
            <div className="kapsayici">


            <div className="backk" style={{backgroundImage: `url(${background})`}} ></div>
            <div>2</div>
            <div>3</div>
            
            </div>
        </div>
    )
}

export default Sec6
