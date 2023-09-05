const songsData = [
  {
    id: 1,
    albumCover: "https://f4.bcbits.com/img/a1462187402_10.jpg",
    album: "Third",
    releaseDate: "July 20, 2018",
    artist: "Nathan Salsburg",
    songTitle: "Impossible Air",
    genre: "folk",
  },
  {
    id: 2,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b2733722791f61d34847dc603737",
    album: "Mullaghmore",
    releaseDate: "2022",
    artist: "Calan McIntyre",
    songTitle: "Mullaghmore",
    genre: "unknown",
  },
  {
    id: 3,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/e/e5/LNT_Khruangbin.png",
    album: "Late Night Tales: Khruangbin",
    releaseDate: "2020",
    artist: "Khruangbin",
    songTitle: "Summer Madness",
    genre: "psychedelic rock",
  },
  {
    id: 4,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/3/39/Tron_Legacy_Soundtrack.jpg",
    album: "Tron: Legacy",
    releaseDate: "2010",
    artist: "Daft Punk",
    songTitle: 'Solar Sailer - From "TRON: Legacy"/Score',
    genre: "electronic",
  },
  {
    id: 5,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/6/67/Kiasmos_-_Kiasmos.jpg",
    album: "Kiasmos",
    releaseDate: "2014",
    artist: "Kiasmos",
    songTitle: "Looped",
    genre: "dance/electronic",
  },
  {
    id: 6,
    albumCover:
      "https://images.squarespace-cdn.com/content/v1/5bdfef0a697a98c05dd88ac0/1577925568939-T6UUPMU7D0VTSKEABU8X/Blog+1.jpg?format=750w",
    album: "Thousand Peaces",
    releaseDate: "2017",
    artist: "Absofacto, NITESHIFT",
    songTitle: "Dissolve",
    genre: "experimental pop",
  },
  {
    id: 7,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b27363e2b9a41b135bfeb410654c",
    album: "Stolen Heart",
    releaseDate: "2020",
    artist: "Freddy Beats",
    songTitle: "Escape",
    genre: "hip hop/rap",
  },
  {
    id: 8,
    albumCover: "https://img.youtube.com/vi/976bzfeA-oo/0.jpg",
    album: "Eternal",
    releaseDate: "2021",
    artist: "Athena, smle",
    songTitle: "Eternal",
    genre: "kawaii future bass",
  },
  {
    id: 9,
    albumCover:
      "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/09/fdcd5a_240a6e0fd7c041a798c9a36998e1416dmv2-1.jpg?fit=693%2C689&ssl=1",
    album: " MONTERO",
    releaseDate: "2021",
    artist: "Lil Nas X",
    songTitle: "THATS WHAT I WANT",
    genre: "pop rap",
  },
  {
    id: 10,
    albumCover:
      "https://novoamor.co.uk/wp-content/uploads/2020/07/whatsoever.jpg",
    album: "Cannot Be, Whatsoever",
    releaseDate: "2020",
    artist: "Novo Amor",
    songTitle: "No Plans",
    genre: "alternative/indie",
  },
  {
    id: 11,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b273a150ae8c72690d4c644c84a0",
    album: "Night on the Beach",
    releaseDate: "2020",
    artist: "Hash3r",
    songTitle: "Heavy Haze",
    genre: "japanese hip hop/rap",
  },
  {
    id: 12,
    albumCover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3e/1c/69/3e1c69fc-1bf3-ebd1-3f05-e176010dddce/cover.jpg/1200x1200bf-60.jpg",
    album: "2 Am Study Session",
    releaseDate: "2020",
    artist: "Spencer Hunt, WYS",
    songTitle: "Vhs",
    genre: "lo-fi",
  },
  {
    id: 13,
    albumCover: "https://placekitten.com/200/300",
    album: "unknown",
    releaseDate: "unknown",
    artist: "SOUNDSBYLAITUE",
    songTitle: "Pixel Quest",
    genre: "dance/electronic",
  },
  {
    id: 14,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/5/5b/Kavinsky_Nightcall_2010.png",
    album: "Nightcall",
    releaseDate: "2010",
    artist: "Kavinsky",
    songTitle: "Pacific Coast Highway",
    genre: "french house synthwave",
  },
  {
    id: 15,
    albumCover:
      "https://miro.medium.com/max/1400/1*zwAZFKGEOn6muluaKsCTsQ.jpeg",
    album: "unknown",
    releaseDate: "April 27, 1810",
    artist: "Ludwig van Beethoven, Igor Levit",
    songTitle: 'Bagatelle No. 25 in A Minor, WoO 59 "Fur Elise"',
    genre: "classical",
  },
  {
    id: 16,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b27300b68f49dfdda890dbdc8c0b",
    album: "Clarinet Blue",
    releaseDate: "May 16, 2000",
    artist: "Gordon/Mckenna, Bobby Gordon, Dave McKenna,...",
    songTitle: "It's Been So Long",
    genre: "jazz",
  },
  {
    id: 17,
    albumCover:
      "https://is3-ssl.mzstatic.com/image/thumb/Music7/v4/45/c7/75/45c77595-0762-fd8c-ebb5-6a29a6b4a132/0013964758016_cover.jpg/600x600bf-60.jpg",
    album: "Helios / Erebus",
    releaseDate: "2015",
    artist: "God Is An Astronaut",
    songTitle: "Agneya",
    genre: "rock",
  },
  {
    id: 18,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b273575b40bcbd92aed16b0643c5",
    album: "Sanctuary",
    releaseDate: "2022",
    artist: "Hoverchild",
    songTitle: "Sanctuary",
    genre: "natural sounds",
  },
  {
    id: 19,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b273139133fc4455ddf8569f5d56",
    album: "Hummingbird",
    releaseDate: "2013",
    artist: "Dario Marianelli",
    songTitle: "Isabel Is Dead",
    genre: "unknown",
  },
  {
    id: 20,
    albumCover:
      "https://static.qobuz.com/images/covers/ub/yh/wx54nkwt6yhub_600.jpg",
    album: "Soundings In Film",
    releaseDate: "2001",
    artist: "Paul Kelly",
    songTitle: "Peace",
    genre: "alternative/indie",
  },
  {
    id: 21,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/6/63/Atomic_%28Mogwai%29_%28Front_Cover%29.jpg",
    album: "Atomic",
    releaseDate: "2016",
    artist: "Mogwai",
    songTitle: "U-235",
    genre: "post-rock",
  },
  {
    id: 22,
    albumCover:
      "https://i1.sndcdn.com/artworks-ZKm4jS9szmnzEYxI-AQMjag-t500x500.jpg",
    album: "Find Yourself",
    releaseDate: "2022",
    artist: "Blue Wednesday, juniorodeo",
    songTitle: "Find Yourself",
    genre: "lo-fi hip hop",
  },
  {
    id: 23,
    albumCover:
      "https://chillhop.com/wp-content/uploads/2022/04/73f23095038f6f023083520706f3e5345f5dd682-scaled.jpg",
    album: "Chillhop Essentials Summer 2022",
    releaseDate: "2022",
    artist: "Mommy",
    songTitle: "Jellyfish-Lamp",
    genre: "unknown",
  },
  {
    id: 24,
    albumCover:
      "https://www.radioswissjazz.ch/common/images/booklets/web/600/000/009/9384.jpg",
    album: "Duke Ellington, John Coltrane",
    releaseDate: "January 1963",
    artist: "Duke Ellington, John Coltrane",
    songTitle: "My Little Brown Book",
    genre: "jazz",
  },
  {
    id: 25,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b273f42a72f65605c6001d4c0349",
    album: "Into Black EP",
    releaseDate: "2015",
    artist: "Emperor",
    songTitle: "She Said - Original Mix",
    genre: "drum and bass",
  },
  {
    id: 26,
    albumCover: "https://placekitten.com/200/300",
    album: "Warm Time",
    releaseDate: "2014",
    artist: "iLLFlip",
    songTitle: "Chinese Flower",
    genre: "afro house",
  },
  {
    id: 27,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b2735d2b20c82084e6f7669820a5",
    album: "Colonia EP",
    releaseDate: "2022",
    artist: "Space 92",
    songTitle: "Colonia",
    genre: "dance/electronic",
  },
  {
    id: 28,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b27386debcdef297e071c061f771",
    album: "Crazy Love",
    releaseDate: "2022",
    artist: "Toby Romeo, Leony",
    songTitle: "Crazy Love",
    genre: "dance/electro pop",
  },
  {
    id: 29,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Tycho_-_Weather.png/220px-Tycho_-_Weather.png",
    album: "Weather",
    releaseDate: "July 12, 2019",
    artist: "Tycho",
    songTitle: "Weather",
    genre: "chillwave",
  },
  {
    id: 30,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b273fa5a81181a68bacca2fffe62",
    album: "Le refuge",
    releaseDate: "2010",
    artist: "Louis-Ronan Choisy, Alexandra Chabane",
    songTitle: "Theme piano",
    genre: "classical pop",
  },
];

export default songsData;
