import { create } from "zustand";

interface NavbarState {
  activeItem: string;
  setActiveItem: (id: string) => void;
}

const useNavbarStore = create<NavbarState>((set) => ({
  activeItem: "home",
  setActiveItem: (id) => set({ activeItem: id }),
}));

export default useNavbarStore;
