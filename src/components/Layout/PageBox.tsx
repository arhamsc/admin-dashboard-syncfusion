import { Box } from "@mui/material";
import React, { FC, ReactNode } from "react";

const PageBox: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Box bgcolor="white" mx="2rem" px="2rem">
            {children}
        </Box>
    );
};

export default PageBox;
