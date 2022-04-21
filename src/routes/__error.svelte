<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				status: status
			}
		};
	}
</script>

<script>
	export let status;
</script>

<svelte:head>
	<title>{status}, fucking idiot</title>
	<meta property="og:title" content={`${status}, fucking idiot`} />
	<meta name="twitter:title" content={`${status}, fucking idiot`} />
</svelte:head>

<h1>{status} <span>fucking idiot</span></h1>

<style>
	span {
		font-size: 0.35em;
		display: block;
		font-family: 'Courier New', Courier, monospace;
		font-weight: bold;
	}
</style>
