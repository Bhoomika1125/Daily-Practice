import propTypes from "prop-types";
export const Button = ({color,text,onClick1}) => {
    return(
        <button onclick={onClick1}
        style = {{backgroundColor:color}}
        className='btn'>
            {text}
            </button>
    );
};
Button.defaultProps = {
    color: "steelblue" ,
    text: "button",
}
Button.propTypes={
    text:propTypes.string,
    color:propTypes.string,
    onClick1:propTypes.func,
}
export default Button;

