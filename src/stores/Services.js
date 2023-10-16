import { defineStore } from "pinia";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

export const servicesStore = defineStore("service", {
  state: () => ({
    services: [],
  }),

  actions: {
    async fetchData() {
      const querySnapshot = await getDocs(collection(db, "services"));
      querySnapshot.forEach((doc) => {
        this.services.push(doc.data());
      });
    },
  },
});
