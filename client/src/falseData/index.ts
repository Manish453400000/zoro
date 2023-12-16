import spImg1 from "../assets/cover/spotlight1.jpg";
import spImg2 from "../assets/cover/spotlight2.jpg";
import spImg3 from "../assets/cover/spotlight3.jpg";
import spImg4 from "../assets/cover/spotlight4.jpg";
import spImg5 from "../assets/cover/spotlight5.jpg";
import spImg6 from "../assets/cover/spotlight6.jpg";
import spImg7 from "../assets/cover/spotlight7.jpg";
import spImg8 from "../assets/cover/spotlight8.jpg";
import spImg9 from "../assets/cover/spotlight9.jpg";

type sp = {
  img: string,
  title: string,
  genre: string,
  duration: string,
  releasedOn: string,
  hd: boolean,
  description: string,
}

const spotlight: Array<sp> = [
  {
    img: spImg1,
    title: "ONE PIECE",
    genre: "TV",
    duration: "24 min",
    releasedOn: "Oct 20, 1999",
    hd: true,
    description:
      "Barely surviving in a barrel after passing through a terrible whirlpool at sea, Carefree Monkey D.Luffy ends...",
  },
  {
    img: spImg2,
    title: "Tokyo Revengers Seasod 2",
    genre: "TV",
    duration: "24 min",
    releasedOn: "Oct 20, 1999",
    hd: true,
    description:
      "Barely surviving in a barrel after passing through a terrible whirlpool at sea, Carefree Monkey D.Luffy ends...",
  },
  {
    img: spImg3,
    title: "Berserk of Gluttony",
    genre: "TV",
    duration: "24 min",
    releasedOn: "Oct 20, 1999",
    hd: true,
    description:
      "Barely surviving in a barrel after passing through a terrible whirlpool at sea, Carefree Monkey D.Luffy ends...",
  },
  {
    img: spImg4,
    title: "The Emenence in Shadow",
    genre: "TV",
    duration: "24 min",
    releasedOn: "Oct 20, 1999",
    hd: true,
    description:
      "Barely surviving in a barrel after passing through a terrible whirlpool at sea, Carefree Monkey D.Luffy ends...",
  },
  {
    img: spImg5,
    title: "Death Note",
    genre: "TV",
    duration: "24 min",
    releasedOn: "Oct 20, 1999",
    hd: true,
    description:
      "Barely surviving in a barrel after passing through a terrible whirlpool at sea, Carefree Monkey D.Luffy ends...",
  },
  {
    img: spImg6,
    title: "Bleach",
    genre: "TV",
    duration: "24 min",
    releasedOn: "Oct 20, 1999",
    hd: true,
    description:
      "Barely surviving in a barrel after passing through a terrible whirlpool at sea, Carefree Monkey D.Luffy ends...",
  },
  {
    img: spImg7,
    title: "Spy X Family",
    genre: "TV",
    duration: "24 min",
    releasedOn: "Oct 20, 1999",
    hd: true,
    description:
      "Barely surviving in a barrel after passing through a terrible whirlpool at sea, Carefree Monkey D.Luffy ends...",
  },
  {
    img: spImg8,
    title: "Anime Name",
    genre: "TV",
    duration: "24 min",
    releasedOn: "Oct 20, 1999",
    hd: true,
    description:
      "Barely surviving in a barrel after passing through a terrible whirlpool at sea, Carefree Monkey D.Luffy ends...",
  },
  {
    img: spImg9,
    title: "Anime Name",
    genre: "TV",
    duration: "24 min",
    releasedOn: "Oct 20, 1999",
    hd: true,
    description:
      "Barely surviving in a barrel after passing through a terrible whirlpool at sea, Carefree Monkey D.Luffy ends...",
  },
];

export default spotlight;
