import axios from 'axios';
import React, {Component, useEffect} from 'react';


const App = () => {
    useEffect( () => {
        axios.get("api")
        .then( response => {
            console.info(response);
        }) 
        .catch( e => console.error(e));
    }, []);
    return (
        <div>
            <h1>Hello World!</h1>
            <h3>hi, guys</h3>
        </div>
        
    )
} 

export default App;