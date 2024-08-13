import React, { useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';

export function Home() {

  return (
    <CodeEditor
      value={
`
/**
      
██╗  ██╗ █████╗ ██╗     ███████╗███████╗██╗          ██╗███████╗
██║ ██╔╝██╔══██╗██║     ██╔════╝██╔════╝██║          ██║██╔════╝
█████╔╝ ███████║██║     ███████╗█████╗  ██║          ██║███████╗
██╔═██╗ ██╔══██║██║     ╚════██║██╔══╝  ██║     ██   ██║╚════██║
██║  ██╗██║  ██║███████╗███████║███████╗███████╗╚█████╔╝███████║
╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚══════╝ ╚════╝ ╚══════╝
                                                                
 Welcome to KalselJS - Where Borneo's JavaScript Enthusiasts Connect!
 
**/

import { Event, DiscordInfo } from "@kalseljs/shared-types";

// Upcoming Event
const UPCOMING_EVENT: Event = {
  theme: "Mastering React Hooks: From Basics to Advanced Patterns",
  time: new Date("2024-09-15T14:00:00"),
  location: {
    type: "Hybrid",
    place: {
      name: "TechHub Banjarmasin",
      pin: "https://goo.gl/maps/examplePin"
    },
    online: "https://meet.kalseljs.id/react-hooks"
  },
  speaker: {
    name: "Sarah Developer",
    jobRole: "Senior Frontend Engineer at TechCorp"
  }
};

// FAQ
const FAQ = [
  {
    question: "How often do you organize meetups?",
    answer: "We aim to host meetups monthly, alternating between online and offline events."
  },
  {
    question: "Can beginners join?",
    answer: "Absolutely! We welcome developers of all skill levels. Our community is about learning and growing together."
  },
  {
    question: "How can I propose a talk?",
    answer: "Great initiative! Please submit your talk proposal through our GitHub repository: github.com/kalseljs/talk-proposals"
  }
];

// Sponsors
const SPONSORS = [
  {
    name: "Ketuju Creative",
    logo: "assets/sponsors/ketuju.svg",
    website: "https://ketuju.com"
  },
];

// Discord Information
const DISCORD_INFO: DiscordInfo = {
  inviteLink: "https://discord.gg/kalseljs",
  serverName: "KalselJS Community",
  featuredChannels: [
    "#general-discussion",
    "#job-postings",
    "#code-help",
    "#event-announcements"
  ]
};

// Structure functions
function structureUpcomingEvent(event: Event) {
  return {
    type: "upcomingEvent",
    data: {
      theme: event.theme,
      date: event.time.toLocaleDateString(),
      time: event.time.toLocaleTimeString(),
      locationType: event.location.type,
      locationName: event.location.place.name,
      speakerName: event.speaker.name,
      speakerRole: event.speaker.jobRole
    }
  };
}

function structureFAQ(faq: Array<{question: string, answer: string}>) {
  return {
    type: "faq",
    data: faq.map(item => ({
      question: item.question,
      answer: item.answer
    }))
  };
}

function structureSponsors(sponsors: Array<{name: string, tier: string, logo: string, website: string}>) {
  return {
    type: "sponsors",
    data: sponsors.map(sponsor => ({
      name: sponsor.name,
      logo: sponsor.logo,
      website: sponsor.website
    }))
  };
}

function structureDiscordSection(discordInfo: DiscordInfo) {
  return {
    type: "discordJoin",
    data: {
      serverName: discordInfo.serverName,
      memberCount: discordInfo.memberCount,
      featuredChannels: discordInfo.featuredChannels,
      inviteLink: discordInfo.inviteLink
    }
  };
}

// Main structure function
function structureHomepage() {
  return [
    structureUpcomingEvent(UPCOMING_EVENT),
    structureFAQ(FAQ),
    structureSponsors(SPONSORS),
    structureDiscordSection(DISCORD_INFO)
  ];
}

// Generate the homepage structure
const homepageStructure = structureHomepage();

// Export the structure for use in rendering
export default homepageStructure;
      `}
      className="window-pane"
      language="js"
      placeholder="Please enter JS code."
      padding={15}
      style={{
        backgroundColor: "#FDE9E4",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        overflow: "scroll"
      }}
    />
  );
}