import {CORE_CONCEPTS} from './data';
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from './components/TabButton'

import {useState} from "react"; // all functions use... are react hooks, called inside component fns/hooks on top-level

// use capital letters for component like App and return render-able HTML


function App() {
    const [selectedTopic, setSelectedTopic] = useState('Please click a button');  // returns stateArray of size 2
    // let tabContent = 'Please click a button'
    function handleSelect(selectedButton) {
        // Components, JSX, props, state
        console.log(selectedButton);
        // tabContent = selectedButton;
        setSelectedTopic(selectedButton); // setSelectedTopic tells react to update/render it again
        console.log(selectedTopic); // here updatedState won't be available immediately
    }

    console.log('Execute/Render App.js again');

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
                        <TabButton onClick={()=>handleSelect('Components')}>Components</TabButton>
                        <TabButton onClick={()=>handleSelect('JSX')}>JSX</TabButton>
                        <TabButton onClick={()=>handleSelect('props')}>Props</TabButton>
                        <TabButton onClick={()=>handleSelect('state')}>State</TabButton>
                    </menu>
                    {/*{tabContent}*/}
                    {selectedTopic}
                </section>
            </main>
        </div>
    );
}

export default App;
