import { createStore } from "zustand";

interface State {}

interface Action {}

export const useCustomerStore = createStore<State & Action>((set) => ({}));
