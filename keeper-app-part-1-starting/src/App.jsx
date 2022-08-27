import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import notes from "./notes";

console.log(notes);
function createNotes (noteItem) {
    return (
        <Note 
            title = {noteItem.title}
            content = {noteItem.content} 
        />
    );
}

const App = () => {
    return(
        <>
            <Header />
            {notes.map(createNotes)}
            <Footer />
        </>
    );
}

export default App;