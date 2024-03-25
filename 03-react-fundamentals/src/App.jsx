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
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom"/>
        <h1>React Essentials</h1>
        <p>
            {/*curly braces for dynamic content */}
            {1+1} {reactDescriptions[getRandomInt(2)]} {description} React concepts you will need for almost any app you are
            going to build!
        </p>
    </header>);
}

function App() {
    return (
        <div>
            <Header />
            <main>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
