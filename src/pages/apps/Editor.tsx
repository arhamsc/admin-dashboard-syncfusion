import { HtmlEditor, Image, Inject, QuickToolbar, Link, Toolbar, RichTextEditorComponent } from "@syncfusion/ej2-react-richtexteditor";
import React from "react";
import PageBox from "../../components/Layout/PageBox";
import Header from "../../components/Layout/UIComponents/Header";
import { EditorData } from "../../data/dummyData/editorData";

const Editor = () => {
    return (
        <PageBox>
            <Header title="Editor" category="App" />
            <RichTextEditorComponent>
                <EditorData/>
                <Inject services={[HtmlEditor, Image, Toolbar, Link, QuickToolbar]} />
            </RichTextEditorComponent>
        </PageBox>
    );
};

export default Editor;
