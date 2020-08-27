import React from "react";
import PropTypes from "prop-types";
import FormGroup from "../../atoms/form/form-group";
import FormLabel from "../../atoms/form/form-label";
import FormInput from "../../atoms/form/form-label";

const FormName = props => {
    return <FormGroup></FormGroup>;
};

FormName.defaultProps = {
    size: "sm",
    type: "circle",
    name: "",
};
FormName.propTypes = {
    /**
       `size` for use size in components avatar
       */
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    /**
       `type` for use type in components avatar
       */
    type: PropTypes.oneOf(["circle", "rounded", "box"]),
    /**
       `name` for use name in components
       */
    name: PropTypes.string,
    /**
       `image` for use name in components
       */
    image: PropTypes.string,
    /**
      `children` for element children text or title
      */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.bool]).isRequired,
};

export default FormName;
