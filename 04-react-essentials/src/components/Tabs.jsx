import Section from "./Section";

export default function Tabs({children, buttons,
                                 ButtonsContainer='menu'
                                 // buttonsContainer=Section // import as well
}) {
    // const ButtonsContainer = buttonsContainer; // so that react doesn't look for built-in as starting with lower-case
    // or use upper-case in param-name itself
    return (
        <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
        </>
    );
}