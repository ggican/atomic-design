import React from "react";
import PropTypes from "prop-types";
import PageHomeStyle from "./index.style";
import Header from "../../organisms/header";
import Navbar from "../../molecules/navbar";
import Container from "../../atoms/container";

const FormInput = props => {
    const { as, label } = props;
    return <FormInputStyle {...props}></PageHomeStyle>;
};

FormInput.defaultProps = {
    size: "sm",
    type: "circle",
    name: "",
};

FormInput.defaultProps = {
    type: "text",
    label: "",
    as: "input",
    placeholder: "input form",
};

FormInput.propTypes = {
    type: PropTypes.oneOfType(["number", "text"]),
    as: PropTypes.oneOfType(["textarea", "input"]),
    placeholder: PropTypes.string,
    label: PropTypes.string,
};
export default PageHome;
