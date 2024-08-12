import React, { useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';

export function Home() {

  return (
    <CodeEditor
      value={`

/**
      
██╗  ██╗ █████╗ ██╗     ███████╗███████╗██╗          ██╗███████╗
██║ ██╔╝██╔══██╗██║     ██╔════╝██╔════╝██║          ██║██╔════╝
█████╔╝ ███████║██║     ███████╗█████╗  ██║          ██║███████╗
██╔═██╗ ██╔══██║██║     ╚════██║██╔══╝  ██║     ██   ██║╚════██║
██║  ██╗██║  ██║███████╗███████║███████╗███████╗╚█████╔╝███████║
╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚══════╝ ╚════╝ ╚══════╝
                                                                
 We are javascript enthusiast from south borneo, lets talk about it with us!
 
**/
import { type Event } from "@kalseljs/shared-types"


const UPCOMING_EVENT: Event = {
  theme: "Scale Static Site with Astrojs",
  time: new Date("12/10/2024:13:14:20"),
  location: {
     type: "Offline",
     place: {
       name: "Raizora Headquarters",
       pin: ""     
  },
  profile: {
     name: "Ridho A."
     jobRole: "SE Ruangguru"
  },
}
  
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