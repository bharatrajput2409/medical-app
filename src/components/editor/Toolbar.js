import { Paper } from "@material-ui/core";
import React from "react";
import { Quill } from "react-quill";
import "./style.css";
let Inline = Quill.import("blots/inline");

class Ems extends Inline {}
Ems.blotName = "ems";
Ems.tagName = "em";
Quill.register(Ems);

class H1 extends Inline {}
H1.blotName = "h1";
H1.tagName = "h1";
Quill.register(H1);

class H2 extends Inline {}
H2.blotName = "h2";
H2.tagName = "h2";
Quill.register(H2);

class H3 extends Inline {}
H3.blotName = "h3";
H3.tagName = "h3";
Quill.register(H3);

class H4 extends Inline {}
H4.blotName = "h4";
H4.tagName = "h4";
Quill.register(H4);

export const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {},
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
};

// Formats objects for setting up the Quill editor
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
  "ems",
  "h1",
  "h2",
  "h3",
  "h4",
];

// Quill Toolbar component
export const QuillToolbar = () => (
  <Paper id="toolbar">
    <span className="ql-formats">
      <button className="ql-h1 toolbar-custom-button">H1</button>
      <button className="ql-h2 toolbar-custom-button">H2</button>
      <button className="ql-h3 toolbar-custom-button">H3</button>
      <button className="ql-h4 toolbar-custom-button">H4</button>
      <button className="ql-ems toolbar-custom-button">Em</button>
    </span>
    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
    </span>
    <span className="ql-formats">
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
      <button className="ql-indent" value="-1" />
      <button className="ql-indent" value="+1" />
    </span>
    <span className="ql-formats">
      <button className="ql-script" value="super" />
      <button className="ql-script" value="sub" />
      <button className="ql-blockquote" />
      <button className="ql-direction" />
    </span>
    <span className="ql-formats">
      <select className="ql-align" />
      <select className="ql-color" />
      <select className="ql-background" />
    </span>
    <span className="ql-formats">
      <button className="ql-link" />
      <button className="ql-image" />
      <button className="ql-video" />
    </span>
    <span className="ql-formats">
      <button className="ql-formula" />
      <button className="ql-code-block" />
      <button className="ql-clean" />
    </span>
  </Paper>
);

export default QuillToolbar;
