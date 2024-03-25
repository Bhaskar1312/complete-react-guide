

// export default function TabButton(props) {
//     // children refers to the content between <TabButton>content</TabButton>
//     return (<li><button>{props.children}</button></li>);
// }

export default function TabButton({children}) {
    // children refers to the content between <TabButton>content</TabButton>
    return (<li><button>{children}</button></li>);
}

// export default function TabButton({label}) {
//     // label  <TabButton label="content" />
//     return (<li><button>{label}</button></li>);
// }