import someImg from './assets/react-core-concepts.png';
import componentsImg from './assets/config.png';

// this value is present even after build without getting lost


// use capital letters for component like App and return render-able HTML
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function getRandomInt(max) { // 0 to max inclusive
    return Math.floor(Math.random()*(max+1));
}

function Header() {
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

function CoreConcept(props) {
    return (
        <li>
            <img src={props.image} alt="Image not found" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    );
}
function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts" >
                    <h2>Time to get started!</h2>
                    <ul>
                        <CoreConcept
                            title="Components"
                            description="The core UI building block"
                            image={componentsImg}
                        />
                        <CoreConcept title="Props"
                                     description="The core UI building block2"
                                     image={componentsImg}/>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
