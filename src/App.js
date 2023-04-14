import React, { useState } from 'react';
import "./App.css"
import JSONDATA from "./MOCK_DATA.json"
import { MDBCol, MDBIcon } from "mdbreact";


const App = () => {
    const [change, setChange] = useState(" ");

    return (
        <MDBCol md="6">
            <div className="input-group md-form form-sm form-1 pl-0">
                <div className="input-group-prepend">
                    <span className="input-group-text purple lighten-3" id="basic-text1">
                        <MDBIcon className="text-white" icon="search" />
                    </span>
                </div>
                <div className='App'>
                    <h1>Searching filter</h1>
                    <input className='form-control my-0 py-1' type="text" placeholder='Search..'
                        onChange={event => { setChange(event.target.value); }} />
                    <button className='button'>Sumbmit</button>
                    {JSONDATA.filter((val) => {
                        if (change == "") {
                            return val
                        }
                        else if (val.first_name.toLowerCase().includes(change.toLowerCase())) {
                            return val
                        }
                    }).map((val, key) => {
                        return <div className='user' id='key'>
                            <p>{val.first_name}</p>
                        </div>
                    })}
                </div>
                </div>
        </MDBCol>
    )
}

export default App;
