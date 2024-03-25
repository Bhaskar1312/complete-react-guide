import someImg from '../assets/react-core-concepts.png';
// path gets changed
// this value is present even after build without getting lost

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function getRandomInt(max) { // 0 to max inclusive
    return Math.floor(Math.random()*(max+1));
}

export default function Header() {
    // multi line html should be wrapped with ()
    // and this can be used with function name <Header /> <Header></Header>
    const description = reactDescriptions[getRandomInt(reactDescriptions.length-1)];
    return (<header>
        <img src={someImg} alt="Stylized atom"/>
        <h1>React Essentials</h1>
        <p>
            {/*curly braces for dynamic content */}
            {1+1} {reactDescriptions[getRandomInt(2)]} {description} React concepts you will need for almost any app you are
            going to build!
        </p>
    </header>);
}