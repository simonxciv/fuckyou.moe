export const csr = false;
export const load: import('./$types').LayoutLoad = ({ url }) => {
	const moeParam = url.searchParams.get('moe')?.toString();
	return {
		moe: `Fuck you, Moe${moeParam ? ` ${moeParam}` : ''}`
	};
};
