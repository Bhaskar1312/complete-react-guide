export default function CoreConcept(props) {
    // or use function CoreConcept({image, title, description}) object destructuring and use those instead of props
    return (
        <li>
            <img src={props.image} alt="Image not found" />
            {/*<img src={image} alt="Image not found" />*/}
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    );
}