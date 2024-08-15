import Message from './Message';
import moment from 'moment';
import { useEffect, useState } from "react";
const MY_USER_ID = 'you';

const messageConfig = { min: 3, max: 10, join: " " };
const MESSAGES = [
  { text: "Daryl here, founder of Endless.", sent: false, time: "5m ago" },
  { text: "What's Endless? Great question.", sent: false, time: "5m ago" },
  { text: "Endless is essentially the Netflix of product design.", sent: false, time: "5m ago" },
  { text: "For a monthly fee, you can get as much product design as you like.", sent: false, time: "5m ago" },
  { text: "With me so far?", sent: false, time: "5m ago" },
  { text: "Yes, don't patronise me.", sent: true, time: "5m ago" },
  { text: "How much experience do you have?", sent: true, time: "5m ago" },
];

export const Messages = (): JSX.Element => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessages();
  },[])

  
  const getMessages = () => {
     var tempMessages = [
        {
          id: 1,
          message: 'Halo min, ada waktu nggak? Gue lagi puyeng nih ngurusin kos-kosan 😫',
          timestamp: new Date().getTime(),
          author: {
            name: 'you',
            imageUrl: ''
          }
        },
        {
          id: 2,
          author: {
            name: 'admin',
            imageUrl: ''
          },
          message: 'Halo kak, ada nih. Kenapa tuh? Ada masalah apa sama kos-kosannya?',
          timestamp: new Date().getTime(),
        },
        {
          id: 3,
          author: {
            name: 'you',
            imageUrl: ''
          },
          message: 'Duh, macem2 masalahnya. Gue punya 3 kos nih...',
          timestamp: new Date().getTime(),
          profileImageUrl: ''
        },
        {
          id: 4,
          author: {
            name: 'you',
            imageUrl: ''
          },
          message: 'Gue punya 3 kos nih, tapi ribet banget ngaturnya. Anak kos suka telat bayar, gue juga sering lupa siapa yg udah bayar siapa yg belom 🤦‍♂️',
          timestamp: new Date().getTime()
        },
        {
          id: 5,
          author: {
            name: 'admin',
            imageUrl: ''
          },
          message: 'Wah, pasti repot ya kak ngurus 3 kos sekaligus. Emang biasanya gimana tuh ngatur pembayarannya?',
          timestamp: new Date().getTime()
        },
        {
          id: 6,
          author: {
            name: 'you',
            imageUrl: ''
          },
          message: ' Ya gitu deh, pake catetan di buku',
          timestamp: new Date().getTime()
        },
        {
          id: 7,
          author: {
            name: 'you',
            imageUrl: ''
          },
          message: 'Kadang pake Excel juga, tapi tetep aja suka kelupaan',
          timestamp: new Date().getTime()
        },
        {
          id: 8,
          author: {
            name: 'you',
            imageUrl: ''
          },
          message: 'tapi tetep aja suka kelupaan. Belom lagi kalo ada komplain dari anak kos, gue suka bingung ngetrace-nya',
          timestamp: new Date().getTime()
        },
        {
          id: 9,
          author: {
            name: 'admin',
            imageUrl: ''
          },
          message: 'Ngerti banget sih kak frustrasinya. Btw, pernah denger nggak tentang aplikasi buat ngatur kos gitu?',
          timestamp: new Date().getTime()
        },
        {
          id: 10,
          author: {
            name: 'you',
            imageUrl: ''
          },
          message: 'Hmm pernah sih denger2, tapi gue gaptek nih. Takut malah tambah ribet 😅',
          timestamp: new Date().getTime()
        },
        {
          id: 11,
          author: {
            name: 'admin',
            imageUrl: ''
          },
          message: 'Haha, santai aja kak. Kenalin nih, namanya KosKita',
          timestamp: new Date().getTime(),
          profileImageUrl: ''
        },
        {
          id: 12,
          author: {
            name: 'admin',
            imageUrl: ''
          },
          message: 'Aplikasi canggih buat bantu ngurus kos, tapi simple banget dipakenya. Bahkan yang gaptek pun bisa langsung jago!',
          timestamp: new Date().getTime()
        },
        {
          id: 13,
          author: {
            name: 'you',
            imageUrl: ''
          },
          message: 'Wah beneran ada? Boleh nih kayaknya, gue udah pusing banget soalnya. Emang fitur2nya apa aja?',
          timestamp: new Date().getTime()
        },
        {
          id: 14,
          author: {
            name: 'admin',
            imageUrl: ''
          },
          message: 'Banyak kak! Ada sistem pembayaran otomatis, jadi nggak perlu lagi catat manual',
          timestamp: new Date().getTime()
        },
        {
          id: 15,
          author: {
            name: 'admin',
            imageUrl: ''
          },
          message: 'Terus ada fitur pengingat buat anak kos yang belom bayar. Bisa juga nerima komplain langsung dari app, jadi gampang di-track.',
          timestamp: new Date().getTime()
        },
        {
          id: 16,
          author: {
            name: 'you',
            imageUrl: ''
          },
          message: 'Wah keren juga ya. Iya nih, gue mau tau lebih lanjut. Kayaknya bisa bantu banget ini mah. Btw, udah ada yang make app ini?',
          timestamp: new Date().getTime()
        },
        {
          id: 17,
          author: {
            name: 'admin',
            imageUrl: ''
          },
          message: 'Udah banyak banget kak yang pake!',
          timestamp: new Date().getTime()
        },
        {
          id: 18,
          author: {
            name: 'admin',
            imageUrl: ''
          },
          message: 'Ada Pak Joko yang ngurus 5 kos di Jakarta, terus Bu Siti yang punya kos mahasiswa di Bandung. Mereka bilang urusan kos jadi lebih gampang',
          timestamp: new Date().getTime()
        },
        {
          id: 19,
          author: {
            name: 'admin',
            imageUrl: ''
          },
          message: 'Oh iya, startup kos gede kayak KosOke juga udah pake loh!',
          timestamp: new Date().getTime()
        },
        {
          id: 20,
          author: {
            name: 'you',
            imageUrl: ''
          },
          message: 'Wah, keren juga ya. Jadi penasaran nih. Bisa liat demo-nya nggak?',
          timestamp: new Date().getTime()
        },
        {
          id: 21,
          author: {
            name: 'admin',
            imageUrl: ''
          },
          message: 'Sip kak! Gimana kalo kita janjian buat demo aplikasinya?',
          timestamp: new Date().getTime()
        },
        {
          id: 22,
          author: {
            name: 'admin',
            imageUrl: ''
          },
          message: 'Nanti saya tunjukin langsung cara pakainya. Dijamin gampang dan bisa bikin urusan kos jadi lebih enteng 😉',
          timestamp: new Date().getTime()
        },
      ]
      setMessages([...messages, ...tempMessages])
  }

  const renderMessages = () => {
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = messages[i - 1];
      let current = messages[i];
      let next = messages[i + 1];
      let isMine = current.author.name === MY_USER_ID;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author.name === current.author.name;
        
        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author.name === current.author.name;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={true}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    return tempMessages;
  }

  return (
    <div className="message-list-container">{renderMessages()}</div>
  );
};


