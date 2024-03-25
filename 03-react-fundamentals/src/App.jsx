import {CORE_CONCEPTS} from './data';
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from './components/TabButton'

// use capital letters for component like App and return render-able HTML


function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts" >
                    <h2>Time to get started!</h2>
                    <ul>
                        <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        {/*    they will be added as key/val pairs using spread operator */}
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                        {/*<CoreConcept concept={CORE_CONCEPTS[0]} />*/}
                        {/*export default function CoreConcept({ concept }) {}*/}
                        {/*export default function Button({ caption, type = "submit" }) {} default val during obj destructuring*/}
                        </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        {/*<li><button></button></li>*/}
                        <TabButton>Components</TabButton>
                        <TabButton>JSX</TabButton>
                        <TabButton>Props</TabButton>
                        <TabButton>State</TabButton>
                    </menu>
                </section>
            </main>
        </div>
    );
}

export default App;
