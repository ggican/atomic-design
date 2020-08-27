import color from "./color";

const buttonToken = {
    button: {
        size: {
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
        color: {
            primary: {
                variant: {
                    enabled: {
                        backgroundColor: color.mainColor.lightGreen,
                        borderColor: color.mainColor.lightGreen,
                        color: "#fff",
                        borderRadius: "12px",
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
                        color: color.mainColor.grey,
                    },
                    active: {
                        color: color.mainColor.darkGrey,
                    },
                },
            },
        },
    },
};

export default buttonToken;
