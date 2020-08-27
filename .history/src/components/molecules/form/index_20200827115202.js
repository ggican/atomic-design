import React from "react";
import PropTypes from "prop-types";
import FormGroup from "../../atoms/form/form-group";
import FormLabel from "../../atoms/form/form-label";
import FormInput from "../../atoms/form/form-input";
import FormStyle from "./index.style";

const Form = props => {
    console.log(props, "props");
    return (
        <FormStyle onSubmit={props.submit} {...props}>
            {props.children}
        </FormStyle>
    );
};

Form.Group = FormGroup;
Form.Label = FormLabel;
Form.Input = FormInput;

Form.defaultProps = {
    onSubmit: () => {},
};
Form.propTypes = {
    /**
       `type` for use type in components form
       */
    onSubmit: PropTypes.oneOf(["sm", "md", "lg"]),
    /**
      `children` for element children text or title
      */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.bool]).isRequired,
};

export default Form;
