<script lang="ts" context="module">
    import type { Load } from "@sveltejs/kit";
    export const load: Load = ({ url }) => {
        return {
            props: {
                moe:  `Fuck you, Moe` + (url.searchParams.get('moe') ? ` ${url.searchParams.get('moe').toString()}` : '')
            }
        }
    }
</script>

<script lang="ts">
    export let moe: string;
</script>

<svelte:head>
    <title>{moe}</title>
    <meta property="og:title" content={moe} />
    <meta name="twitter:title" content={moe} />
</svelte:head>

<h1>
    {moe}
</h1>
