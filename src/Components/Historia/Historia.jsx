import "./Historia.css";

// function History() {
//     return(
//         <div className="general-window-container"> 
//             <div id="History-container" className="content-container">
//                 <h1 className="title-section" id ="title-section-history">HISTORIA</h1>
//                 <hr className="title-hr"/>
//                 <p>Esta es la seccion de Historia</p>

//             </div>
//         </div>
// )}

// export default History;

// App.js
import React from 'react';
// import Gallery from './Gallery';

function History() {
    return (
        <div className="general-window-container"> 
            <div id="History-container" className="content-container">
                 <h1 className="title-section" id ="title-section-history">HISTORIA</h1>
                 <hr className="title-hr"/>
                 <p>Esta es la seccion de Historia</p>

                {/* <div className="App-historia">
                    <Gallery />
                </div> */}
            </div>
         </div>
    );
}

export default History;

// components/Gallery.js
