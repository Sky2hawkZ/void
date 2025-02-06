import React from "react";

type CSSProperties = {
    [key:string]: React.CSSProperties;
}

export class CSStyleSheet {
    static create<Styles extends CSSProperties>(styles: Styles): Styles {
        return styles;
    };
}