import { createStore } from "zustand";

interface State {}

interface Action {}

export const useAdminStore = createStore<State & Action>((set) => ({}));
