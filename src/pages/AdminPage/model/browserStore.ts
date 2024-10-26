import { v4 } from "uuid";
import { create } from "zustand";

// Типы для API данных
export interface Doctor {
	id: string;
	__typename: string;
	clinic: { id: string; name: string };
	doctor: {
		entityId: string;
		entity: {
			doctorType: { id: string; name: string };
			person: {
				entityId?: string;
				entity?: {
					firstName: string;
					lastName: string;
					inn?: string | null;
					birthDate?: string | null;
				};
			};
		};
	};
	person: { entityId: string; entity: { firstName: string; lastName: string } };
}

export interface Office {
	id: string;
	__typename: string;
	clinic: { id: string; name: string };
	officeNumber: string;
}

export interface DoctorAvailability {
	id: string;
	beginDate: string;
	endDate: string;
	clinicOffice: { id: string; officeNumber: string };
}

export type PageType = "Doctor" | "Office" | "DoctorAvaible" | "New";

interface Page {
	id: string;
	type: PageType;
	data: Doctor[] | Office[] | DoctorAvailability[] | null;
}

interface State {
	pages: Page[];
	currentPageId: string | null;
	addPage: (type: PageType, id?: string) => void;
	setCurrentPage: (pageId: string) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setData: (pageId: string, data: any[]) => void;
}

// Store
export const usePageStore = create<State>((set) => ({
	pages: [],
	currentPageId: null,

	// Добавление новой вкладки
	addPage: (type, id = v4()) => {
		const newPage: Page = {
			id: `${id}`,
			type,
			data: null,
		};
		set((state) => ({ pages: [...state.pages, newPage], currentPageId: newPage.id }));
	},

	// Установка текущей вкладки
	setCurrentPage: (pageId) => set({ currentPageId: pageId }),

	// Установка данных после загрузки
	setData: (pageId, data) => {
		set((state) => ({
			pages: state.pages.map((page) => (page.id === pageId ? { ...page, data } : page)),
		}));
	},
}));
