import { Stack, Typography } from "@mui/material";
import {
    ColorPickerComponent,
    ColorPickerEventArgs,
} from "@syncfusion/ej2-react-inputs";
import PageBox from "../../components/Layout/PageBox";
import Header from "../../components/Layout/UIComponents/Header";

const ColorPicker = () => {
    const handleColorChange = (args: ColorPickerEventArgs) => {
        document.getElementById("colorPreview")!.style.backgroundColor =
            args.currentValue.hex;
    };

    return (
        <PageBox>
            <Header title="Color Picker" category="App" />

            <Stack alignItems="center">
                <Stack
                    direction={"row"}
                    width="100%"
                    justifyContent={"space-around"}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                        }}>
                        <Typography variant={"h4"} fontWeight="bold">
                            Inline Palette
                        </Typography>
                        <br />
                        <ColorPickerComponent
                            mode="Palette"
                            id="inline-palette"
                            inline
                            modeSwitcher={false}
                            showButtons={false}
                            change={handleColorChange}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                        }}>
                        <Typography variant={"h4"} fontWeight="bold">
                            Inline Picker
                        </Typography>
                        <br />
                        <ColorPickerComponent
                            mode="Picker"
                            id="inline-picker"
                            inline
                            modeSwitcher={false}
                            showButtons={false}
                            change={handleColorChange}
                        />
                    </div>
                </Stack>
                <br />
                <br />
                <div
                    id="colorPreview"
                    style={{
                        width: "10rem",
                        height: "10rem",
                        backgroundColor: "red",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "1rem",
                    }}>
                    <p>
                        <b>Selected Color</b>
                    </p>
                </div>
            </Stack>
        </PageBox>
    );
};

export default ColorPicker;
