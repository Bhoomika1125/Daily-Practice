import React from "react";
import PropTypes from 'prop-types'
import './index.css'
const Header = ({ title }) => {
 return (
 <header className='header'>
 <h1>Hello, {title}</h1>
 <button className="btn">Add</button>
 </header>
 )
}
Header.defaultProps = {
 title: 'Task Tracker',
}
Header.propTypes = {
 // See changes for isRequired after remove defaultProps
 //<Header title = {1}/> in app.js will show the warining in console.
 title: PropTypes.string.isRequired,
}
export default Header;