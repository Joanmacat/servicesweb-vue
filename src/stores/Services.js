import { defineStore } from "pinia";
import { db } from "../utils/firebase";
import { doc, collection, getDocs, deleteDoc } from "firebase/firestore";

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

    async deleteService(serviceId) {
      // Aquí asumiremos que serviceId es el identificador único del servicio que deseas eliminar.
      try {
        console.log(serviceId);
        // Elimina el documento en la colección "services" con el ID proporcionado.
        await deleteDoc(doc(collection(db, "services"), serviceId));

        // Actualiza el store eliminando el servicio con el ID correspondiente.
        this.services = this.services.filter(
          (service) => service.id !== serviceId
        );

        // Puedes realizar otras acciones necesarias después de eliminar el servicio.
      } catch (error) {
        console.error("Error al eliminar el servicio:", error);
      }
    },
  },
});
