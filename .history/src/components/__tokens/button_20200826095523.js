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
            // primary: {
            //     background: {
            //         default: "#00cec8",
            //         hover: "#70d0cd",
            //         active: "rgba(0, 206, 200, 0.75)",
            //     },
            //     border: {
            //         default: "#00cec8",
            //         hover: "#70d0cd",
            //         active: "rgba(0, 206, 200, 0.75)",
            //     },
            //     text: {
            //         default: "#ffffff",
            //         hover: "#ffffff",
            //         active: "#ffffff",
            //     },
            },
        },
        link: {
            variant: {
                enabled: {
                    color: color.mainColor.grey,
                },
                active: {
                    color: color.mainColor.darkGrey,
                },
            },
        },
    },
};

export default buttonToken;
