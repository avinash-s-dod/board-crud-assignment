import React from "react";
import { PrimaryButton } from "../UI/PrimaryButton";

type HeaderProps={
heading?:String;
}

export const Header: React.FC<HeaderProps> = ({heading},props) => {
    return (
        <header className="header">
            <h4>{heading}</h4>
            <PrimaryButton title="+ Add Board" variant={'secondary'} />

        </header>
    )
}