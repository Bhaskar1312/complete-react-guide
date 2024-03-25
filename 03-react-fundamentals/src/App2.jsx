import React from 'react';

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"
export default function App2() {
    const [selectedTopic, setSelectedTopic] =
        React.useState('1');
    let content = (<button onClick={()=>handleSelect('2')}>Delete</button>);
    if(selectedTopic==='2') {
        content = (
        <div data-testid="alert" id="alert">
            <h2>Are you sure?</h2>
            <p>These changes can't be reverted!</p>
            <button onClick={()=>handleSelect('1')}>Proceed</button>
        </div>);
    } else {
        content = (<button onClick={()=>handleSelect('2')}>Delete</button>);
    }


    function handleSelect(selectedButton) {
        console.log(selectedButton);
        setSelectedTopic(selectedButton);
    }

    return (
        <div>
            {content}
        </div>
    );
}