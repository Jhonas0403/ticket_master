import { create } from "zustand";

const useEventResults = create((set) => ({
  data: [],
  error: null,
  isLoading: false,
//   para un llamdo y guardar valores de manera global
  fetchEvents: async (params) => {
    try {
      await set(() => ({ isLoading: true }));
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${
          import.meta.env.VITE_TICKETMASTER_API_KEY
        }${params?.length ? params : ""}`
      );
      const data = await response.json();
      await set(() => ({ data, isLoading: false }));
    } catch (error) {
      await set(() => ({ error }));
    }
  },
}));

export default useEventResults;
