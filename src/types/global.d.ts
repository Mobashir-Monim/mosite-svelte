declare namespace svelte.JSX {
	interface HTMLProps<T> {
		enterViewport?: (e: CustomEvent) => void;
	}
}
