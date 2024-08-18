import dayjs from 'dayjs';

const currentDate = new Date();
function addMinutes(date: Date, minutes = 1) {
    return dayjs(date).subtract(minutes, 'minute').toDate();
}

const Profile = {
    admin: {
          name: 'admin',
          imageUrl: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833560.jpg?size=626&ext=jpg&ga=GA1.1.885735255.1719886671&semt=ais_hybrid'
    },
    you: {
      name: 'you',
      imageUrl: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833560.jpg?size=626&ext=jpg&ga=GA1.1.885735255.1719886671&semt=ais_hybrid'
  }
  }
export const greetings = [
    {
      id: 1,
      message: 'Halo min, ada waktu nggak? Gue lagi puyeng nih ngurusin kos-kosan 😫',
      timestamp: addMinutes(currentDate, 5).getTime(),
      author: Profile.you
    },
    {
      id: 2,
      author: {
        name: 'admin',
        imageUrl: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833560.jpg?size=626&ext=jpg&ga=GA1.1.885735255.1719886671&semt=ais_hybrid'
      },
      message: 'Halo kak, ada nih. Kenapa tuh? Ada masalah apa sama kos-kosannya?',
      timestamp: addMinutes(currentDate, 5).getTime(),
    },
    {
      id: 3,
      author: Profile.you,
      message: 'Duh, macem2 masalahnya. Gue punya 3 kos nih...',
      timestamp: addMinutes(currentDate, 4).getTime(),
      profileImageUrl: ''
    },
    {
      id: 4,
      author: Profile.you,
      message: 'Gue punya 3 kos nih, tapi ribet banget ngaturnya. Anak kos suka telat bayar, gue juga sering lupa siapa yg udah bayar siapa yg belom 🤦‍♂️',
      timestamp: addMinutes(currentDate, 4).getTime()
    },
    {
      id: 5,
      author: Profile.admin,
      message: 'Wah, pasti repot ya kak ngurus 3 kos sekaligus. Emang biasanya gimana tuh ngatur pembayarannya?',
      timestamp: addMinutes(currentDate, 4).getTime()
    },
    {
      id: 6,
      author: Profile.you,
      message: ' Ya gitu deh, pake catetan di buku',
      timestamp: addMinutes(currentDate, 4).getTime()
    },
    {
      id: 7,
      author: Profile.you,
      message: 'Kadang pake Excel juga, tapi tetep aja suka kelupaan',
      timestamp: addMinutes(currentDate, 3).getTime()
    },
    {
      id: 8,
      author: Profile.you,
      message: 'tapi tetep aja suka kelupaan. Belom lagi kalo ada komplain dari anak kos, gue suka bingung ngetrace-nya',
      timestamp: addMinutes(currentDate, 3).getTime()
    },
    {
      id: 9,
      author: Profile.admin,
      message: 'Ngerti banget sih kak frustrasinya. Btw, pernah denger nggak tentang aplikasi buat ngatur kos gitu?',
      timestamp: addMinutes(currentDate, 3).getTime()
    },
    {
      id: 10,
      author: Profile.you,
      message: 'Hmm pernah sih denger2, tapi gue gaptek nih. Takut malah tambah ribet 😅',
      timestamp: addMinutes(currentDate, 3).getTime()
    },
    {
      id: 11,
      author: Profile.admin,
      message: 'Haha, santai aja kak. Kenalin nih, namanya KosKita',
      timestamp: addMinutes(currentDate, 3).getTime(),
      profileImageUrl: ''
    },
    {
      id: 12,
      author: Profile.admin,
      message: 'Aplikasi canggih buat bantu ngurus kos, tapi simple banget dipakenya. Bahkan yang gaptek pun bisa langsung jago!',
      timestamp: addMinutes(currentDate, 2).getTime()
    },
    {
      id: 13,
      author: Profile.you,
      message: 'Wah beneran ada? Boleh nih kayaknya, gue udah pusing banget soalnya. Emang fitur2nya apa aja?',
      timestamp: addMinutes(currentDate, 2).getTime()
    },
    {
      id: 14,
      author: Profile.admin,
      message: 'Banyak kak! Ada sistem pembayaran otomatis, jadi nggak perlu lagi catat manual',
      timestamp: addMinutes(currentDate, 1).getTime()
    },
    {
      id: 15,
      author: Profile.admin,
      message: 'Terus ada fitur pengingat buat anak kos yang belom bayar. Bisa juga nerima komplain langsung dari app, jadi gampang di-track.',
      timestamp: addMinutes(currentDate, 1).getTime()
    },
    {
      id: 16,
      author: Profile.you,
      message: 'Wah keren juga ya. Iya nih, gue mau tau lebih lanjut. Kayaknya bisa bantu banget ini mah. Btw, udah ada yang make app ini?',
      timestamp: addMinutes(currentDate, 1).getTime()
    },
    {
      id: 17,
      author: Profile.admin,
      message: 'Udah banyak banget kak yang pake!',
      timestamp: addMinutes(currentDate, 1).getTime()
    },
    {
      id: 18,
      author: Profile.admin,
      message: 'Ada Pak Joko yang ngurus 5 kos di Jakarta, terus Bu Siti yang punya kos mahasiswa di Bandung. Mereka bilang urusan kos jadi lebih gampang',
      timestamp: addMinutes(currentDate, 1).getTime()
    },
    {
      id: 19,
      author: Profile.admin,
      message: 'Oh iya, startup kos gede kayak KosOke juga udah pake loh!',
      timestamp: addMinutes(currentDate, 1).getTime()
    },
    {
      id: 20,
      author: Profile.you,
      message: 'Wah, keren juga ya. Jadi penasaran nih. Bisa liat demo-nya nggak?',
      timestamp: addMinutes(currentDate, 1).getTime()
    },
    {
      id: 21,
      author: Profile.admin,
      message: 'Sip kak! Gimana kalo kita janjian buat demo aplikasinya?',
      timestamp: addMinutes(currentDate, 0).getTime()
    },
    {
      id: 22,
      author: Profile.admin,
      message: 'Nanti saya tunjukin langsung cara pakainya. Dijamin gampang dan bisa bikin urusan kos jadi lebih enteng 😉',
      timestamp: addMinutes(currentDate, 0).getTime()
    },
  ]