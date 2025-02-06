import React from "react";
import {CSStyleSheet} from "../../../types";


interface Styles {
    wrapper: React.CSSProperties;
    icon?: React.CSSProperties;

}

const Button = () => {
    const styles: Styles = CSStyleSheet.create({
        wrapper: {
            color: "red",
            fontSize: "2rem"


        },
        icon: {
            color: "blue"
        }
    })

    return (
        <div style={styles.wrapper}>
            <input type="button" value="Click Me"/>
        </div>
    );
};

export default Button;
