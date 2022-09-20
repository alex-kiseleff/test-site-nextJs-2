export interface IUrlsPicture {
	webp: string;
	png: string;
	path: string;
}

export interface IBurgerMenu {
	menuOpen: boolean;
	changeFlag?: (menuOpen: boolean) => void;
}

export interface IItemMenu {
	id: string;
	path: string;
	name: string;
	activeStyle: boolean;
}

export interface INewsBlock {
	id?: string;
	title: string;
	description: string;
}

export interface IInfoAbout {
	id?: string;
	title?: string;
	paragraph: string;
}

export interface IContact {
	id: string;
	post: string;
	name: string;
	phone: string;
	number: string;
	address?: string;
	email?: string;
}

export interface IOperator {
	id: string;
	webp: string;
	png: string;
	path: string;
}

export interface IVisibility {
	message?: string;
}

export interface IPanelService {
	id: string;
	title: string;
	path: string;
}

export interface INewsBlock {
	id?: string;
	title: string;
	description: string;
}

export interface IAbout {
	id: string;
	title?: string;
	paragraph: string;
}

export interface INewData {
	phone: string;
	sum: string;
}
