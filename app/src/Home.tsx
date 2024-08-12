import React, { useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';

export function Home() {

  return (
    <CodeEditor
      value={" `function add(a, b) {\n  return a + b;\n}`"}
      language="js"
      placeholder="Please enter JS code."
      padding={15}
      style={{
        backgroundColor: "#f5f5f5",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
  );
}