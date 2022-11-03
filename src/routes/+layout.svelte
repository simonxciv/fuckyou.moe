<script lang="ts">
	import { page } from '$app/stores';
	import '$lib/app.css';
	export let data: import('./$types').LayoutData;
</script>

<svelte:head>
	<title>{data.moe}</title>
	<meta name="description" content="You're a real piece of shit, you know that right?" />

	<meta name="theme-color" content="#e0fbfc" />

	<link rel="apple-touch-icon" sizes="180x180" href={`${$page.url.origin}/apple-touch-icon.png`} />
	<link rel="icon" type="image/png" sizes="32x32" href={`${$page.url.origin}/favicon-32x32.png`} />
	<link rel="icon" type="image/png" sizes="16x16" href={`${$page.url.origin}/favicon-16x16.png`} />
	<link rel="manifest" href={`${$page.url.origin}/site.webmanifest`} />

	<meta property="og:title" content={data.moe} />
	<meta property="og:image" content={`${$page.url.origin}/fuck-you-moe.png`} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://fuckyou.moe" />
	<meta name="og:description" content="You're a real piece of shit, you know that right?" />

	<meta name="twitter:title" content={data.moe} />
	<meta name="twitter:image" content={`${$page.url.origin}/fuck-you-moe.png`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://fuckyou.moe" />
	<meta name="twitter:description" content="You're a real piece of shit, you know that right?" />
</svelte:head>

<slot />
