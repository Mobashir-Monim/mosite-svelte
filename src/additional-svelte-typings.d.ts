declare namespace svelteHTML {
	// enhance elements
	interface IntrinsicElements {
		// 'my-custom-element': { someattribute: string; 'on:event': (e: CustomEvent<any>) => void };
	}
	// enhance attributes
	interface HTMLAttributes<T> {
		'on:enterViewport'?: (event: any) => any;
	}
}
