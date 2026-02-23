import { create } from 'zustand';

interface SolutionState {
  selectedId: string | null;
  hoveredId: string | null;
  setSelected: (id: string | null) => void;
  setHovered: (id: string | null) => void;
}

export const useSolutionStore = create<SolutionState>((set) => ({
  selectedId: null,
  hoveredId: null,
  setSelected: (id) => set({ selectedId: id }),
  setHovered: (id) => set({ hoveredId: id })
}));
