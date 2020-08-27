import color from "./color";

const buttonToken = {
    buttonSize: {
        lg: {
            height: "60px",
            fontSize: "18px",
            fontWeght: "bold",
        },
        md: {
            height: "40px",
            fontSize: "16px",
            fontWeght: "bold",
        },
        sm: {
            height: "20px",
            fontSize: "14px",
            fontWeght: "bold",
        },
    },
    primary: {
        variant: {
            enabled: {
                color: color.mainColor.lightGreen,
            },
            active: {
                color: color.mainColor.green,
            },
            disabled: {
                color: color.mainColor.whiteGrey,
            },
        },
    },
};

export default buttonToken;
