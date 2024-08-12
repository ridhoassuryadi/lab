import React, { useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';

export function Home() {

  return (
    <CodeEditor
      value={" `function add(a, b) {\n  return a + b;\n}`"}
      language="js"
      placeholder="Please enter JS code."
      padding={15}
      className=" border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center"
      style={{
        backgroundColor: "#f5f5f5",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
  );
}