
export default function Section({title, children, ...rest}) { // or else add id, className all separately
    return (<section {...rest}>
        <h2>{title}</h2>
        {children}
    </section>);
}