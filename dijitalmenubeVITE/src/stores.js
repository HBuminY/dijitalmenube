import { writable } from 'svelte/store';

function crActiveCategory() {
	const { subscribe, set } = writable(0);

	return {
		subscribe,
		activate: (categoryName) => set(categoryName)
	};
}

export const activeCategory = crActiveCategory();