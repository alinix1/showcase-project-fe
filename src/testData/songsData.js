const songsData = [
  {
    id: 1,
    albumCover: "https://f4.bcbits.com/img/a1462187402_10.jpg",
    album: "Third",
    releaseDate: "July 20, 2018",
    artist: "Nathan Salsburg",
    songTitle: "Impossible Air",
    genre: "folk",
    songDetails:
      "Nathan Salsburg is a guitarist and composer. He is a frequent collaborator of songwriter-singer Joan Shelley, occasional guitar-duo partner to James Elkington, and has contributed to recordings by Shirley Collins, Bonnie 'Prince' Billy, the Weather Station, and Jake Xerxes Fussell, among others.",
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
    songDetails: "sorry, we couldn't find any details on this artist",
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
    songDetails:
      "Khruangbin is an American musical trio from Houston, Texas. The band comprises Laura Lee on bass, Mark Speer on guitar, and Donald 'DJ' Johnson Jr. on drums. The band is known for blending global music influences, such as classic soul, dub, rock and psychedelia.",
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
    songDetails:
      "Daft Punk were a French electronic music duo formed in 1993 in Paris by Thomas Bangalter and Guy-Manuel de Homem-Christo. They achieved popularity in the late 1990s as part of the French house movement, combining elements of house music with funk, disco, techno, rock and synth-pop.",
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
    songDetails:
      "Kiasmos is a Faroese-Icelandic minimal, experimental techno duo, composed of \u00D3lafur Arnalds and Janus Rasmussen. They started in 2009 and released their first extended play, Thrown, in 2012 and their album Kiasmos in 2014.",
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
    songDetails:
      "Absofacto is a solo project by musician Jonathan Visger, a member of Michigan-based indie rock band Mason Proper.[1][2] In 2008, Visger released his first solo efforts, North South, Pt. 1, under his own name, and Trilobite Trash, under the pseudonym Bug Lung Baby. In 2009, the EP Tagalong was released under the moniker Absofacto, the name Visger has used for all his solo musical projects since.",
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
    songDetails: "sorry, we couldn't find any details on this artist",
  },
  {
    id: 8,
    albumCover: "https://img.youtube.com/vi/976bzfeA-oo/0.jpg",
    album: "Eternal",
    releaseDate: "2021",
    artist: "Athena, smle",
    songTitle: "Eternal",
    genre: "kawaii future bass",
    songDetails:
      "Smle is an American electronic music duo consisting of Ruben Cardenas and Lewis Martinee. They are best known for their remix of Bobby Rush's song 'Funk O'De Funk', for which they were nominated for the Best Remixed Recording award at the 60th Annual Grammy Awards.",
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
    songDetails:
      "Montero Lamar Hill (born April 9, 1999), known by his stage name Lil Nas X, is an American rapper, singer, and songwriter. He rose to prominence with the release of his country rap single 'Old Town Road', which spent 19 weeks atop the U.S. Billboard Hot 100 chart, becoming the longest-running number-one song since the chart debuted in 1958. As the song was atop the Hot 100, Lil Nas X came out as gay, becoming the only artist to do so while having a number-one record.",
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
    songDetails:
      "Ali John Meredith-Lacey, better known under the moniker Novo Amor, is a Welsh multi-instrumentalist, singer, songwriter, sound designer and producer. Lacey rose to prominence after the release of his debut EP Woodgate, NY in March 2014.",
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
    songDetails: "sorry, we couldn't find any details on this artist",
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
    songDetails:
      "Spencer Hunt is a multi-instrumentalist and producer from St. Louis, Missouri. Pursuing a full-time music career, he enjoys exploring new sounds and creating soothing melodies from his home studio.",
  },
  {
    id: 13,
    albumCover: "https://placekitten.com/200/300",
    album: "unknown",
    releaseDate: "unknown",
    artist: "SOUNDSBYLAITUE",
    songTitle: "Pixel Quest",
    genre: "dance/electronic",
    songDetails: "sorry, we couldn't find any details on this artist",
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
    songDetails:
      "Vincent Belorgey (born 31 July 1975), known professionally as Kavinsky, is a French musician, producer, DJ, and actor. His production style is reminiscent of the electropop film soundtracks of the 1980s. Kavinsky claims that his music is inspired by thousands of movies he watched as a young boy and that he has cherry-picked the best parts from them, consolidating them into one concept. Kavinsky has been compared to many similar French house artists, including Daft Punk and Danger. He achieved greater mainstream recognition after his song 'Nightcall' was featured in the 2011 film Drive. His debut studio album, OutRun, was released in 2013.",
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
    songDetails:
      "Ludwig van Beethoven was a German composer and pianist. Beethoven remains one of the most admired composers in the history of Western music; his works rank among the most performed of the classical music repertoire and span the transition from the Classical period to the Romantic era in classical music.",
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
    songDetails: "sorry, we couldn't find any details on this artist",
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
    songDetails:
      "The band was formed in 2002 by twin brothers Niels and Torsten Kinsella, who took the inspiration for its name from a quote in the movie Nightbreed. God Is an Astronaut's debut album, The End of the Beginning, was released in 2002 on the Revive Records label, which is independently owned by the band. The album was intended to be a farewell to the industry. Two music videos, for 'The End of the Beginning' and 'From Dust to the Beyond', both produced by the band, received airplay on MTV UK and other MTV Europe networks.",
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
    songDetails:
      "Dreamy, ambient, emotional instrumental music from Germany.  Hoverchild is a German ambient instrumental project. The music features dreamy, emotive sounds and melodies, with expressive guitars and pianos on top.",
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
    songDetails:
      "An Italian composer of film and concert music, Dario Marianelli is perhaps best known for his collaborations with movie director Joe Wright, which include Pride and Prejudice (2005), Atonement (2007), and Anna Karenina (2012). All three of those scores were nominated for Academy Awards, with Atonement taking home the statue in 2008.",
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
    songDetails: "sorry, we couldn't find any details on this artist",
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
    songDetails:
      "Mogwai  are a Scottish post-rock band, formed in 1995 in Glasgow. The band consists of Stuart Braithwaite (guitar, vocals), Barry Burns (guitar, piano, synthesizer, vocals), Dominic Aitchison (bass guitar), and Martin Bulloch (drums). Mogwai typically compose lengthy guitar-based instrumental pieces that feature dynamic contrast, melodic bass guitar lines, and heavy use of distortion and effects.",
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
    songDetails:
      "Hailing from the cold and wet landscape that is the Pacific Northwest, Gustav Joseph, professionally known as Blue Wednesday, is a Canadian musician, songwriter and producer. Identifying as genre-fluid, Gustav's sound highlights his artistry behind the piano, whilst honouring heavy influences from beatmakers and other instrumental acts that have inspired him from a young age.",
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
    songDetails: "sorry, we couldn't find any details on this artist",
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
    songDetails:
      "Edward Kennedy 'Duke' Ellington (April 29, 1899 - May 24, 1974) was an American jazz pianist, composer, and leader of his eponymous jazz orchestra from 1923 through the rest of his life. Born and raised in Washington, D.C., Ellington was based in New York City from the mid-1920s and gained a national profile through his orchestra's appearances at the Cotton Club in Harlem. A master at writing miniatures for the three-minute 78 rpm recording format, Ellington wrote or collaborated on more than one thousand compositions; his extensive body of work is the largest recorded personal jazz legacy, and many of his pieces have become standards. He also recorded songs written by his bandsmen, such as Juan Tizol's 'Caravan', which brought a Spanish tinge to big band jazz.",
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
    songDetails: "sorry, we couldn't find any details on this artist",
  },
  {
    id: 26,
    albumCover: "https://placekitten.com/200/300",
    album: "Warm Time",
    releaseDate: "2014",
    artist: "iLLFlip",
    songTitle: "Chinese Flower",
    genre: "afro house",
    songDetails: "sorry, we couldn't find any details on this artist",
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
    songDetails:
      "One of Techno music's best-selling artists and the mind behind a string of Number One hits, Space 92 is a trailblazing French producer. His sound identity is a mix of trancey Techno, distorted percussion and a touch of Acid, in addition to underlying sensitivity and nostalgia.",
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
    songDetails:
      "Toby Romeo is an Austrian DJ and music producer from Salzburg best known for the song 'Where the Lights Are Low' featuring Felix Jaehn. He also had appearances at international music festivals such as Parookaville and Electric Love. He is signed by Universal.",
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
    songDetails:
      "Scott Hansen (born February 7, 1977), known professionally as Tycho, is an American musician, record producer, composer, and songwriter based in San Francisco. He is also known as ISO50 for his photographic and design work. His music blends multiple stylistic components, including downtempo guitar, analogue synthesis, and ambient elements such as breathing and found sounds of weather broadcasts and dialogue.",
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
    songDetails:
      "Louis-Ronan Choisy is a French singer-songwriter and actor born in Paris on 12 May 1977.",
  },
];

export default songsData;
