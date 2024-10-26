import { createStore } from "zustand";

interface Filter {}

interface PageState<T> {
	getBoardDataElement: (el: T) => object;
	columns: object;
	getData: () => object;
}

interface Page<T> {
	id: string;
	type: "Doctor" | "Office" | "DoctorAvaible" | "New";
	filters: Filter[];
	state: PageState<T>;
}

interface State<T = unknown> {
	pages: Array<Page>;
	currentPageId: string;
	currentPage: Page<T>;
}

interface Action {
	setPages: <T>(pages: Page<T>[]) => void;
	setCurrentPage: (newId: string) => void;
	updateCurrentPage: <T>(changes: Partial<Page<T>> & { id: string }) => void;
}

export const useBrowserStore = createStore<State & Action>((set) => ({
	pages: [
		{
			filters: [{}],
			id: "03e5849d-95f3-4e76-81f5-1c9e98201f0f",
			state: {
				columns: [],
				getBoardDataElement: () => ({}),
				getData: () => ({}),
			},
			type: "New",
		},
	],
	currentPageId: "03e5849d-95f3-4e76-81f5-1c9e98201f0f",
	currentPage: {
		filters: [{}],
		id: "03e5849d-95f3-4e76-81f5-1c9e98201f0f",
		state: { columns: [], getBoardDataElement: () => ({}), getData: () => ({}) },
		type: "New",
	},
	setCurrentPage: (newId) =>
		set((prev) => ({
			currentPageId: newId,
			currentPage: prev.pages[prev.pages.findIndex(({ id: _id }) => _id === newId)],
		})),
	updateCurrentPage: ({ id, ...changes }) =>
		set((prev) => {
			const newPages = [...prev.pages];
			const currentPage_index = newPages.findIndex(({ id: _id }) => id === _id);
			const currentPage = newPages.find(({ id: _id }) => id === _id);
			newPages[currentPage_index!] = { ...currentPage!, ...changes };
			return { ...prev, currentPage: newPages[currentPage_index!], pages: newPages };
		}),
	setPages: (pages) => set(() => ({ pages })),
}));
