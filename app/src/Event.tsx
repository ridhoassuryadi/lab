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
 **/ 

import { Event } from "@kalseljs/shared-types";

// Extended Event type with content links
interface ExtendedEvent extends Event {
  pitchDeck: {
    targetAudience: string;
    prerequisites?: string[];
    contentLinks: {
      slideDeck?: string;
      github?: string;
      additionalResources?: string[];
    };
  };
}

// Sample data for multiple events
const ALL_EVENTS: ExtendedEvent[] = [
  {
    id: "1",
    theme: "Mastering React Hooks: From Basics to Advanced Patterns",
    time: new Date("2024-09-15T14:00:00"),
    location: {
      type: "Hybrid",
      place: {
        name: "TechHub Banjarmasin",
        pin: "https://goo.gl/maps/examplePin1"
      },
      online: "https://meet.kalseljs.id/react-hooks"
    },
    speaker: {
      name: "Sarah Developer",
      jobRole: "Senior Frontend Engineer at TechCorp"
    },
    pitchDeck: {
      targetAudience: "Intermediate to advanced React developers",
      prerequisites: ["Basic knowledge of React", "Familiarity with ES6+ JavaScript"],
      contentLinks: {
        slideDeck: "https://speakerdeck.com/sarahdev/mastering-react-hooks",
        github: "https://github.com/sarahdev/react-hooks-examples",
        additionalResources: [
          "https://reactjs.org/docs/hooks-intro.html",
          "https://usehooks.com/"
        ]
      }
    }
  },
  {
    id: "2",
    theme: "Building Scalable Node.js Applications",
    time: new Date("2024-10-20T15:30:00"),
    location: {
      type: "Online",
      online: "https://meet.kalseljs.id/nodejs-scalable"
    },
    speaker: {
      name: "John Backend",
      jobRole: "Lead Backend Developer at ServerPro"
    },
    pitchDeck: {
      targetAudience: "Backend developers with Node.js experience",
      prerequisites: ["Intermediate Node.js knowledge", "Basic understanding of server architecture"],
      contentLinks: {
        slideDeck: "https://slides.com/johnbackend/scalable-nodejs",
        github: "https://github.com/johnbackend/scalable-nodejs-demo",
        additionalResources: [
          "https://nodejs.org/en/docs/guides/dont-block-the-event-loop/",
          "https://12factor.net/"
        ]
      }
    }
  },
  {
    id: "3",
    theme: "Introduction to TypeScript",
    time: new Date("2024-11-05T13:00:00"),
    location: {
      type: "Offline",
      place: {
        name: "Borneo Dev Center",
        pin: "https://goo.gl/maps/examplePin2"
      }
    },
    speaker: {
      name: "Alice Coder",
      jobRole: "TypeScript Evangelist at Microsoft"
    },
    pitchDeck: {
      targetAudience: "JavaScript developers interested in type-safe programming",
      prerequisites: ["Solid understanding of JavaScript"],
      contentLinks: {
        slideDeck: "https://docs.google.com/presentation/d/1abc123/edit?usp=sharing",
        github: "https://github.com/alicecoder/typescript-intro",
        additionalResources: [
          "https://www.typescriptlang.org/docs/",
          "https://basarat.gitbook.io/typescript/"
        ]
      }
    }
  }
];

// Function to structure a single event
function structureEvent(event: ExtendedEvent) {
  return {
    type: "event",
    data: {
      id: event.id,
      theme: event.theme,
      date: event.time.toLocaleDateString(),
      time: event.time.toLocaleTimeString(),
      locationType: event.location.type,
      locationName: event.location.type === "Online" ? "Online" : event.location.place.name,
      speakerName: event.speaker.name,
      speakerRole: event.speaker.jobRole,
      pitchDeck: {
        targetAudience: event.pitchDeck.targetAudience,
        prerequisites: event.pitchDeck.prerequisites || [],
        contentLinks: event.pitchDeck.contentLinks
      }
    }
  };
}

// Function to structure the events list page
function structureEventsListPage() {
  return {
    type: "eventsListPage",
    data: {
      title: "Upcoming KalselJS Events",
      description: "Join us for these exciting JavaScript events in South Borneo!",
      events: ALL_EVENTS.map(structureEvent)
    }
  };
}

// Generate the events list page structure
const eventsListPageStructure = structureEventsListPage();

// Export the structure for use in rendering
export default eventsListPageStructure;
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