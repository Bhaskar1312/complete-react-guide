

// export default function TabButton(props) {
//     // children refers to the content between <TabButton>content</TabButton>
//     return (<li><button>{props.children}</button></li>);
// }

export default function TabButton({children, onClick}) { // just onSelect/click instead of onClick here
    // children refers to the content between <TabButton>content</TabButton>

    function handleClick() { // unused fn
        console.log('Hello world! - selected')
    }

    // in vanilla js
    // document.querySelector('button').addEventListener('click', ()=>{});

    // in react, use on...
    return (<li>
        {/*<button onClick={handleClick}>{children}</button>*/}
        <button onClick={onClick}>{children}</button>
    {/*    dont add parenthesis after handleClick */}
    </li>);
}

// export default function TabButton({label}) {
//     // label  <TabButton label="content" />
//     return (<li><button>{label}</button></li>);
// }