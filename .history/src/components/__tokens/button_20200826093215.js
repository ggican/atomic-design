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
            fontSize: "12px",
            fontWeght: "bold",
        },
    },
    buttonColor: {
        primary: {
            variant: {
                enabled: {
                    backgroundColor: color.mainColor.lightGreen,
                    color: "#fff",
                },
                active: {
                    backgroundColor: color.mainColor.green,
                    color: "#fff",
                },
                disabled: {
                    backgroundColor: color.mainColor.whiteGrey,
                    color: "#fff",
                },
            },
        },
        link: {
            variant: {
                enabled: {
                    color: color.mainColor.lightGreen,
                },
                active: {
                    color: color.mainColor.green,
                },
            },
        },
    },
};

export default buttonToken;
