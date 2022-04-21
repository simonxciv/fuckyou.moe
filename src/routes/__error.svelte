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

<h1>{status}<span>fucking idiot</span></h1>

<style>
	span {
		font-size: 0.35em;
		display: block;
		font-family: 'Courier New', Courier, monospace;
		font-weight: bold;
	}
</style>
