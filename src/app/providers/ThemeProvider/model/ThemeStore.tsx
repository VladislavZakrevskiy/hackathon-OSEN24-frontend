import { create } from "zustand";

interface ThemeState {
	theme: "dark" | "light" | "system";
}

interface ThemeActions {
	setTheme: (theme: "dark" | "light" | "system") => void;
}

type ThemeSchema = ThemeActions & ThemeState;

export const useTheme = create<ThemeSchema>((set) => ({
	theme: "system",
	setTheme: (theme) => set(() => ({ theme })),
}));
