import "./heading.scss";

interface HeadingProps {
  heading: string;
  text: string;
}

function Heading({ heading, text }: HeadingProps) {
  return (
    <header>
        <h2>{heading}</h2>

        <p>{text}</p>
    </header>
  )
}

export default Heading
