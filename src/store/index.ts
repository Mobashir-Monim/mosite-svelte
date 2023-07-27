import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const currentContentStore: Writable<string> = writable('hero');
