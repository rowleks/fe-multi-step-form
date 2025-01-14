import "./heading.scss";

interface HeadingProps {
  heading: string;
  text: string;

  error?: boolean
}

function Heading({ heading, text, error }: HeadingProps) {
  return (
    <header>
        <div>
          <h2> {heading}</h2>
          { error && <span>Please choose a plan</span>}
        </div>

        <p>{text}</p>
    </header>
  )
}

export default Heading
