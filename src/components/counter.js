import React from 'react';
import {connect} from 'react-redux';

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h2
                style={{padding: '20px', textAlign: 'center'}}>{counter}</h2>
            <button
                style={{padding: '10px', margin: '5px'}}
                className="btn btn-primary btn-lg"
                onClick={dec}>DEC
            </button>
            <button
                style={{padding: '10px', margin: '5px'}}
                className="btn btn-primary btn-lg"
                onClick={inc}>INC
            </button>
            <button
                style={{padding: '10px', margin: '5px'}}
                className="btn btn-primary btn-lg"
                onClick={rnd}>RND
            </button>
        </div>
    )
}

export default Counter;