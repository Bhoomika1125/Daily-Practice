import App from "../App";
import './Header.css'

// Uppercase of Header.js's H is naming convention
const Header1 = ({title1}) => {
    return (
    <header>
    <h1 style={headingStyle}>Hello {title1}</h1>
    <h2 className="h2Head">H2 Heading</h2>
    <h3 id="h3Head">H3 Heading</h3>
    </header>
    );
    };

    const headingStyle = {
        color: "darkcyan",
        backgroundColor: "lightblue",
        textAlign: "center",
    };

    Header1.defaultProps = {
        title: "Task Tracker",
      };
    export default Header1;