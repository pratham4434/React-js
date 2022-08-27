/////////////////////////////////////////////////////////////
// index.js
import React from "react";
import ReactDOM  from "react-dom";
import App from './App';
import './index.css';

ReactDOM.render( <App /> ,document.getElementById('root'));
/////////////////////////////////////////////////////////////
// App.js

import React from "react";

const SlotM = (props) => {
    // let x = '🙂';
    // let y = '🙂';
    // let z = '🙂';

    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    let{x,y,z} = props;
    
    if((x===y)&&(y===z)){
        return(
            <>
                <div className="slot_inner">
                <h1>
                    {x} {y} {z}
                </h1>
                    <div className="horizontal_rule">
                        <hr style={{border: "1px solid #1e1e1e"}}/>
                    </div> 
                  <h1>
                        It's a match!
                    </h1>
                </div>
            </>
        );
    }else{
        return(
            <>
            <div className="slot_inner">
            <h1>
                {x} {y} {z}
            </h1>
                <div className="horizontal_rule">
                    <hr style={{border: "1px solid #1e1e1e"}}/>
                </div> 
                <h1>
                    Better luck next time.
                </h1>
                
            </div>
        </>
        );
    }

};

const App = () => {
    return(
        <>
            <h1 className="heading_style">🎰 Welcome to {" "}<span style={{ fontWeight:"bold"}}> Slot Machine Game </span>{" "}🎰</h1>
            <div className="slotmachine">
                <SlotM x="🙂" y="🙂" z="🙂" />
                <SlotM x="🥰" y="🥰" z="🥰"/>
                <SlotM x="🥵" y="🥵" z="🙂"/>
                <SlotM x="🥵" y="🙂" z="🙂"/>
            </div>
        </>
    );
};

export default App; 

/////////////////////////////////////////////////////////////
// index.css
// *{
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     background-color: #b5bfc2;
// }
// @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

// .heading_style{
//     padding: 30px 0;
//     text-align: center;
//     font-family: 'Open Sans', sans-serif;
//     text-transform: uppercase;
//     font-size: 13px;
//     letter-spacing:2px ;
//     font-weight: 500;
//     color: #1e1e1e;
//     background-color: #fff;
//     font-size: 1.5rem;
//     margin-bottom: 30px;
// }

// .slot_inner{
//     text-align: center;
//     margin-left: 30%;
//     margin-right: 30%;
//     border: #899092 4px solid;
    
//     /* border-bottom: 1px; */
//     padding:12px;
// }

// .horizontal_rule{
//     padding:10px;
// }
/////////////////////////////////////////////////////////////
