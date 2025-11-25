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
      { url: "/images/projects/01/planta-terreo.jpg" },
      { url: "/images/projects/01/planta-2pav.jpg" },
      { url: "/images/projects/01/corte-longitudinal.jpg" },
      { url: "/images/projects/01/corte-transversal.jpg" },
    ],
    extra_images: [{ url: "/images/projects/01/extra_img1.jpg" }],
  },
  {
    id: 2,
    mainImage: "/images/projects/02/gio-capa.jpg",
    title: "Edificio Vicente Giordano",
    text: "Description of Project 2",
    tags: ["arquitecture", "legal"],
    carousel_images: [
      { url: "/images/projects/02/gio-ext1.jpg" },
      { url: "/images/projects/02/gio-ext2.jpg" },
      { url: "/images/projects/02/gio-int-dia.jpg" },
      { url: "/images/projects/02/gio-int-nt.jpg" },
      { url: "/images/projects/02/gio-bar-nt2.jpg" },
      { url: "/images/projects/02/gio-pla.jpg" },
      { url: "/images/projects/02/gio-elv1.jpg" },
    ],
  },
  {
    id: 3,
    mainImage: "images/projects/03/thumbnail.jpg",
    title: "Alagoas",
    text: "Description of Project 3",
    tags: ["arquitecture", "legal", "obra"],
    carousel_images: [
      { url: "/images/projects/03/alg-3d4.jpg" },
      { url: "/images/projects/03/alg-3d-2.jpg" },
      { url: "/images/projects/03/alg-3d-3.jpg" },
      { url: "/images/projects/03/main.jpg" },
      { url: "/images/projects/03/alg-pla-ter.jpg" },
      { url: "/images/projects/03/alg-pla-1p.jpg" },
      { url: "/images/projects/03/alg-pla-cob.jpg" },
      { url: "/images/projects/03/alg-corte.jpg" },
    ],
  },
  {
    id: 4,
    mainImage: "/images/projects/04/corte.jpg",
    title: "Residencial A&T Artes",
    text: "Description of Project 4",
    tags: ["legal"],
    carousel_images: [
      { url: "/images/projects/04/pla-terreo.jpg" },
      { url: "/images/projects/04/pla-1-pav.jpg" },
      { url: "/images/projects/04/pla-tip.jpg" },
      { url: "/images/projects/04/corte.jpg" },
    ],
  },
  {
    id: 5,
    mainImage: "/images/projects/05/let-capa.jpg",
    title: "Consultório Médico",
    text: "Description of Project 5",
    tags: ["legal"],
    carousel_images: [
      { url: "/images/projects/05/PLA-LA.jpg" },
      { url: "/images/projects/05/let-3d1.jpg" },
      { url: "/images/projects/05/let-3d2.jpg" },
      { url: "/images/projects/05/let-3d3.jpg" },
    ],
  },
  {
    id: 6,
    mainImage: "/images/projects/06/mar-capa.jpg",
    title: "Galeria 25 de Março",
    text: "Description of Project 6",
    tags: ["obra"],
    carousel_images: [
      { url: "/images/projects/06/mar-1.jpg" },
      { url: "/images/projects/06/mar-2.jpg" },
      { url: "/images/projects/06/mar-3.jpg" },
      { url: "/images/projects/06/mar-4.jpg" },
      { url: "/images/projects/06/mar-5.jpg" },
      { url: "/images/projects/06/mar-6.jpg" },
      { url: "/images/projects/06/mar-7.jpg" },
      { url: "/images/projects/06/mar-8.jpg" },
    ],
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
