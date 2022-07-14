import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

interface PropTypes {
  buttonText: string;
  route: string;
}

const handleClick = () => {
  console.log("Clicked");
};
const Button = (props: PropTypes) => {
  return (
    <>
      <button onClick={handleClick}>
        {props.buttonText} <FontAwesomeIcon icon={solid("arrow-right")} />
      </button>
    </>
  );
};

export default Button;
