import { DataT } from "../../types";
import IMAGE_01 from "../images/nabil.jpg";
import IMAGE_02 from "../images/12.jpg";
import IMAGE_03 from "../images/13.jpg";
import IMAGE_04 from "../images/14.jpg";
import IMAGE_05 from "../images/15.jpg";
import IMAGE_06 from "../images/16.jpg";
import IMAGE_07 from "../images/17.jpg";
import IMAGE_08 from "../images/18.jpg";
import IMAGE_09 from "../images/19.jpg";
import IMAGE_10 from "../images/20.jpg";

const data: DataT[] = [
  {
    id: 1,
    name: "Nabil Fayak",
    isOnline: true,
    match: "18",
    description:
      "Aspiring Software Engineer | Experience in Full-Stack, Mobile Development, and Cloud Infrastructure",
    message:
      "I love to code!",
    image: IMAGE_01,
  },
  {
    id: 2,
    name: "Mark Zuckerberg",
    match: "93",
    description:
      "Young Startup | Looking to develop professional experience and grow my personal skills",
    isOnline: false,
    message: "Someone like you. Someone who'll rattle the cages.",
    image: IMAGE_02,
  },
  {
    id: 3,
    name: "Jabrils",
    match: "45",
    description:
      "Tech Youtuber | Looking to share my skills with the world, I have a comprehensive portfolio of my projects and teaching vidoes on my YouTube channel",
    isOnline: false,
    message:
      "Oh, hee-hee, aha. Ha, ooh, hee, ha-ha, ha-ha. And I thought my jokes were bad.",
    image: IMAGE_03,
  },
  {
    id: 4,
    name: "Linus Sebastian",
    match: "88",
    description:
      "Candian | Experienced DevOps Engineer, interned @IBM",
    isOnline: true,
    message: "Bats frighten me. It's time my enemies shared my dread.",
    image: IMAGE_04,
  },
  {
    id: 5,
    name: "Reshma Saujani",
    match: "76",
    description:
      "Mobile Developer | Proficient at developing iOS and Android applications using React-Native",
    isOnline: false,
    message: "It's not who I am underneath but what I do that defines me.",
    image: IMAGE_05,
  },
  {
    id: 6,
    name: "Slyvia Acevedo",
    match: "95",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
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
      "You have nothing, nothing to threaten me with. Nothing to do with all your strength.",
    image: IMAGE_06,
  },
  {
    id: 7,
    name: "Jonathan Ma",
    match: "67",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
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
      "Never start with the head. The victim gets all fuzzy. He can't feel the next... See?",
    image: IMAGE_07,
  },
  {
    // not all props needed
    id: 8,
    name: "Mike Dane",
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
    name: "Charley Moore",
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
    name: "Shane Wighton",
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
