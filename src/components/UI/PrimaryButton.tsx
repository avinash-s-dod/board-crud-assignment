import React from "react";
import { Button, ButtonProps as BootstrapButtonProps } from "react-bootstrap";

interface ButtonProps extends BootstrapButtonProps {
    title: string;
    onClick?: () => void;
}

export const PrimaryButton: React.FC<ButtonProps> = ({ title, onClick, ...props }) => {
    return (
        <Button onClick={onClick} {...props}>
            {title}
        </Button>
    );
};
