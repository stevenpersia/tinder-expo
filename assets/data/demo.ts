import { DataT } from "../../types";
import IMAGE_01 from "../images/01.jpg";
import IMAGE_02 from "../images/02.jpg";
import IMAGE_03 from "../images/03.jpg";
import IMAGE_04 from "../images/04.jpg";
import IMAGE_05 from "../images/05.jpg";
import IMAGE_06 from "../images/06.jpg";
import IMAGE_07 from "../images/07.jpg";
import IMAGE_08 from "../images/08.jpg";
import IMAGE_09 from "../images/09.jpg";
import IMAGE_10 from "../images/10.jpg";

const data: DataT[] = [
  {
    id: 1,
    name: "Leanne Graham",
    isOnline: true,
    match: "78",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    message:
      "I will go back to Gotham and I will fight men Iike this but I will not become an executioner.",
    image: IMAGE_01,
  },
  {
    id: 2,
    name: "Clementine Bauch",
    match: "93",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: false,
    message: "Someone like you. Someone who'll rattle the cages.",
    image: IMAGE_02,
  },
  {
    id: 3,
    name: "Ervin Howell",
    match: "45",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: false,
    message:
      "Oh, hee-hee, aha. Ha, ooh, hee, ha-ha, ha-ha. And I thought my jokes were bad.",
    image: IMAGE_03,
  },
  {
    id: 4,
    name: "John Lebsack",
    match: "88",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: true,
    message: "Bats frighten me. It's time my enemies shared my dread.",
    image: IMAGE_04,
  },
  {
    id: 5,
    name: "James Dietrich",
    match: "76",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: false,
    message: "It's not who I am underneath but what I do that defines me.",
    image: IMAGE_05,
  },
  {
    id: 6,
    name: "Patricia Schulist",
    match: "95",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: true,
    message:
      "You have nothing, nothing to threaten me with. Nothing to do with all your strength.",
    image: IMAGE_06,
  },
  {
    id: 7,
    name: "Chelsey Weissnat",
    match: "67",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: true,
    message:
      "Never start with the head. The victim gets all fuzzy. He can't feel the next... See?",
    image: IMAGE_07,
  },
  {
    id: 8,
    name: "Nicky Runol",
    match: "85",
    description: "New grad looking for exciting swe opportunities",
    age: "27",
    location: "New York, NY",
    college: "Queens College (CUNY)",
    skills: "React, AWS, Express, GCP",
    phone: "+1(234) 567-8901",
    email: "nickyrunol@email.com",
    linkedin: "https://www.linkedin.com/in/nickyrunol",
    github: "https://github.com/nickyrunol",
    isOnline: true,
    message:
      "And as for the television's so-called plan, Batman has no jurisdiction.",
    image: IMAGE_08,
  },
  {
    id: 9,
    name: "Glenna Reichert",
    match: "74",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: true,
    message:
      "This is what happens when an unstoppable force meets an immovable object.",
    image: IMAGE_09,
  },
  {
    id: 10,
    name: "Kurtis DuBuque",
    match: "98",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: false,
    message:
      "You want order in Gotham. Batman must take off his mask and turn himself in.",
    image: IMAGE_10,
  },
];

export default data;
