import { Box } from "@mui/material";
import React, { FC, ReactNode } from "react";

const PageBox: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Box bgcolor="white" mx="2rem" px="2rem">
            {children}
            <p style={{ textAlign: "center" }}>
                &#169; 2022 All rights reserved by SCA Company
            </p>
            <br />
        </Box>
    );
};

export default PageBox;
