// projects.js
import { reactive } from "vue";

export const projects = reactive([
  {
    id: 1,
    mainImage: "/images/projects/01/main.jpg",
    title: "Red House International School",
    text: "Lorem ipsum dolot sit amet",
    tags: ["arquitecture"],
    carousel_images: [
      { url: "/images/projects/01/img1.jpg" },
      { url: "/images/projects/01/img2.jpg" },
      { url: "/images/projects/01/img3.jpg" },
    ],
    extra_images: [{ url: "/images/projects/01/extra_img1.jpg" }],
  },
  {
    id: 2,
    mainImage: "https://picsum.photos/600/400",
    title: "Ladeira Porto Geral",
    text: "Description of Project 2",
    tags: ["arquitecture", "legal"],
    carousel_images: [
      { url: "/images/projects/02/img1.jpg" },
      { url: "/images/projects/02/img2.jpg" },
    ],
  },
  {
    id: 3,
    mainImage: "https://picsum.photos/600/400",
    title: "Legal 1",
    text: "Description of Project 3",
    tags: ["legal"],
    carousel_images: [
      { url: "/images/projects/03/img1.jpg" },
      { url: "/images/projects/03/img2.jpg" },
    ],
  },
  {
    id: 4,
    mainImage: "https://picsum.photos/600/400",
    title: "Legal 2",
    text: "Description of Project 4",
    tags: ["legal"],
  },
  {
    id: 5,
    mainImage: "https://picsum.photos/600/400",
    title: "Legal 3",
    text: "Description of Project 5",
    tags: ["legal"],
  },
  {
    id: 6,
    mainImage: "https://picsum.photos/600/400",
    title: "Obra 1",
    text: "Description of Project 6",
    tags: ["obra"],
  },
]);

export const mainProjects = reactive([
  {
    id: "1",
    title: "Red House International School",
    img: "/images/projects/01/main.jpg",
    href: "portfolio/projeto/1",
  },
  {
    id: "2",
    title: "Red House International School",
    img: "/images/projects/01/main.jpg",
    href: "/projeto/1",
  },
  {
    id: "3",
    title: "Red House International School",
    img: "/images/projects/01/main.jpg",
    href: "/projeto/1",
  },
]);
