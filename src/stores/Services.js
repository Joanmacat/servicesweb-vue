import { defineStore } from "pinia";

export const servicesStore = defineStore("service", {
  state: () => ({
    services: [
      {
        id: 1,
        title: "Lausengier, S.L",
        description: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
        location: "Arinsal",
        image:
          "https://www.lausengier.com/wp-content/uploads/2022/03/blockchaindlt.jpg",
        link: "https://www.lausengier.com/",
        contact: "https://www.lausengier.com/",
      },
      {
        id: 2,
        title: "BP Economistes, S.L",
        description: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
        location: "Arinsal",
        image:
          "https://www.lausengier.com/wp-content/uploads/2022/03/company.jpg",
        link: "https://www.nectar.tech",
        contact: "https://www.lausengier.com/",
      },
      {
        id: 3,
        title: "Nectar",
        description: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
        location: "Arinsal",
        image:
          "https://www.lausengier.com/wp-content/uploads/2022/03/company.jpg",
        link: "https://www.lausengier.com/",
        contact: "https://www.lausengier.com/",
      },
       {
        id: 4,
        title: "Lausengier, S.L",
        description: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
        location: "Arinsal",
        image:
          "https://www.lausengier.com/wp-content/uploads/2022/03/blockchaindlt.jpg",
        link: "https://www.lausengier.com/",
        contact: "https://www.lausengier.com/",
      },
      {
        id: 5,
        title: "BP Economistes, S.L",
        description: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
        location: "Arinsal",
        image:
          "https://www.lausengier.com/wp-content/uploads/2022/03/company.jpg",
        link: "https://www.nectar.tech",
        contact: "https://www.lausengier.com/",
      },
      {
        id: 6,
        title: "Nectar",
        description: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
        location: "Arinsal",
        image:
          "https://www.lausengier.com/wp-content/uploads/2022/03/company.jpg",
        link: "https://www.lausengier.com/",
        contact: "https://www.lausengier.com/",
      },
       {
        id: 7,
        title: "Lausengier, S.L",
        description: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
        location: "Arinsal",
        image:
          "https://www.lausengier.com/wp-content/uploads/2022/03/blockchaindlt.jpg",
        link: "https://www.lausengier.com/",
        contact: "https://www.lausengier.com/",
      },
      {
        id: 8,
        title: "BP Economistes, S.L",
        description: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
        location: "Arinsal",
        image:
          "https://www.lausengier.com/wp-content/uploads/2022/03/company.jpg",
        link: "https://www.nectar.tech",
        contact: "https://www.lausengier.com/",
      },
      {
        id: 9,
        title: "Nectar",
        description: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
        location: "Arinsal",
        image:
          "https://www.lausengier.com/wp-content/uploads/2022/03/company.jpg",
        link: "https://www.lausengier.com/",
        contact: "https://www.lausengier.com/",
      },
       {
        id: 10,
        title: "Lausengier, S.L",
        description: "Blablablabla blablabla",
        location: "Arinsal",
        image:
          "https://www.lausengier.com/wp-content/uploads/2022/03/blockchaindlt.jpg",
        link: "https://www.lausengier.com/",
        contact: "https://www.lausengier.com/",
      },
      {
        id: 11,
        title: "BP Economistes, S.L",
        description: "Blablablabla blablabla",
        location: "Arinsal",
        image:
          "https://www.lausengier.com/wp-content/uploads/2022/03/company.jpg",
        link: "https://www.nectar.tech",
        contact: "https://www.lausengier.com/",
      },
      {
        id: 13,
        title: "Nectar",
        description: "Blablablabla blablabla",
        location: "Arinsal",
        image:
          "https://www.lausengier.com/wp-content/uploads/2022/03/company.jpg",
        link: "https://www.lausengier.com/",
        contact: "https://www.lausengier.com/",
      }
    ],
  }),
});