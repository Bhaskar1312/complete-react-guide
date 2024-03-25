export default function TabButton({ children, isSelected, ...rest }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...rest}>
        {children}
      </button>
    </li>
  );
}
