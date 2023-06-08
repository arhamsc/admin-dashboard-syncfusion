import { Typography } from "@mui/material";
import React, { FC } from "react";

const Header: FC<{ category: string; title: string }> = ({
    category,
    title,
}) => {
    return (
        <>
            <Typography color={"gray"}>{category}</Typography>
            <Typography fontWeight={"bold"} fontSize="2rem">
                {title}
            </Typography>
            <br />
        </>
    );
};

export default Header;
