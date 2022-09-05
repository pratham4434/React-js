import React, { useState } from "react";

const App = () => {

    const [fullName, setFullName] = useState({
        fname : "",
        lname : ""
    });

    const inputEvent = (event) => {
        setFullName(event.target.value);
    };



    const onSubmit = (event) => {
        // setFullName(fname +" "+ lname);
        event.preventDefault();
        alert("form submitted");

    };

    return(
        <>
        <form onSubmit={onSubmit}>
        <h1 className="heading_style">
            Hello {fullName.fname}{fullName.lname}
        </h1>
        <div className="div_center">
            <input name="fname" className="slot_inner" onChange={inputEvent} type="text" placeholder="Enter Your First Name" value={fullName.fname}/>
        </div>
        <div className="div_center">
            <input name="lname"  className="slot_inner" onChange={inputEvent} type="text" placeholder="Enter Your Last Name" value={fullName.lname}/>
        </div>
        <div className="div_center">
            <button className="btn" onClick={onSubmit}>Click Me</button>
        </div>
        </form>
        </>
    );
};

export default App;