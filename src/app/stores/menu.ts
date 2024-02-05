import { create } from 'zustand';

interface MenuState {
  isToggled: boolean;
  toggle: () => void;
}

const useMenu = create<MenuState>((set) => ({
  isToggled: false,
  toggle: () => set((state) => ({ isToggled: !state.isToggled })),
}));

export default useMenu;
