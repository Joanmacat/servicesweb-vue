import { defineStore } from "pinia";

export const servicesStore = defineStore("service", {
  state: () => ({
    services: [
      {
        name: "Lausengier, S.L",
        description: "Blablablabla blablabla",
        location: "Arinsal",
        image:
          "https://www.lausengier.com/wp-content/uploads/2022/03/company.jpg",
        link: "https://www.lausengier.com/",
        contact: "https://www.lausengier.com/",
      },
    ],
  }),
});
