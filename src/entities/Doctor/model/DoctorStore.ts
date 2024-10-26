import { createStore } from "zustand";

interface State {}

interface Action {}

export const useDoctorStore = createStore<State & Action>((set) => ({}));
