import {CORE_CONCEPTS} from './data';
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from './components/TabButton'
import {EXAMPLES} from "./data";

import {useState} from "react"; // all functions use... are react hooks, called inside component fns/hooks on top-level

// use capital letters for component like App and return render-able HTML


function App() {
    // const [selectedTopic, setSelectedTopic] = useState('Please click a button');  // returns stateArray of size 2
    // const [selectedTopic, setSelectedTopic] = useState('components');  // initial state doesn't have data in data.js
    const [selectedTopic, setSelectedTopic] = useState(null);  // use conditional to not get error
    let tabContent = <p>Please select a topic </p>;
    if(selectedTopic) {
        tabContent = (
            <div id="tab-content" >
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                                    <code>{EXAMPLES[selectedTopic].code}</code>
                                </pre>
            </div>
        );
    }
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
                        <TabButton onClick={()=>handleSelect('components')}>Components</TabButton>
                        <TabButton onClick={()=>handleSelect('jsx')}>JSX</TabButton>
                        <TabButton onClick={()=>handleSelect('props')}>Props</TabButton>
                        <TabButton onClick={()=>handleSelect('state')}>State</TabButton>
                    </menu>
                    {/*{tabContent}*/}
                    {/*{selectedTopic}*/}

                        {/*{!selectedTopic? <p>Please Select a Topic</p>:null}*/}
                        {/*{!selectedTopic && <p>Please Select a Topic</p>}*/}
                        {/*{selectedTopic?(*/}
                        {/*    <div id="tab-content" >*/}
                        {/*        <h3>{EXAMPLES[selectedTopic].title}</h3>*/}
                        {/*        <p>{EXAMPLES[selectedTopic].description}</p>*/}
                        {/*        <pre>*/}
                        {/*            <code>{EXAMPLES[selectedTopic].code}</code>*/}
                        {/*        </pre>*/}
                        {/*    </div>*/}
                        {/*) : null}*/}
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
