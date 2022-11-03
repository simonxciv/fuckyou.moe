<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status}, fucking idiot</title>
	<meta property="og:title" content={`${$page.status}, fucking idiot`} />
	<meta name="twitter:title" content={`${$page.status}, fucking idiot`} />
</svelte:head>

<h1>{$page.status} <span>fucking idiot</span></h1>

<style>
	span {
		font-size: 0.35em;
		display: block;
		font-family: 'Courier New', Courier, monospace;
		font-weight: bold;
	}
</style>
