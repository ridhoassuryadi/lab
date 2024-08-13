/* eslint-disable no-useless-escape */
import React from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';

export function Event() {
  return (
    <CodeEditor
      value={`
/**
 * 
███████ ██    ██ ███████ ███    ██ ████████ ███████ 
██      ██    ██ ██      ████   ██    ██    ██      
█████   ██    ██ █████   ██ ██  ██    ██    ███████ 
██       ██  ██  ██      ██  ██ ██    ██         ██ 
███████   ████   ███████ ██   ████    ██    ███████ 
"List all curated events, from upcoming to past"
 * 
 * / 
      `}
      language="js"
      placeholder="Please enter JS code."
      padding={15}
      style={{
        backgroundColor: "#FDE9E4",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
  );
}