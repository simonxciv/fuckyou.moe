<script lang="ts" context="module">
    import type { Load } from "@sveltejs/kit";
    export const load: Load = ({ url }) => {
        const moeLast = url.searchParams.get('moe')?.toString() ?? '';
        const moeText = `Fuck you, Moe` + (moeLast ? ` ${moeLast}` : '');
        return {
            props: {
                moe: moeText
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
    <meta property="og:description" content={`You're a real piece of shit.`}>

    <meta name=”twitter:title” content={moe} />
    <meta name=”twitter:description” content={`You're a real piece of shit.`} />
</svelte:head>

<div>
    <h1>
        {moe}
    </h1>
</div>

<style>
    div {
        min-height: 100vh;
        display: grid;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    h1 {
        display: inline-block;
        -webkit-background-clip: text;
        background-clip: text;
        background-image: linear-gradient(to right,#6366f1, #a855f7, #ec4899);
        color: transparent;
        font-family: 'Pacifico', cursive;
        font-weight: normal;
        font-size: 1.5rem;
    }
    @media screen and (min-width: 300px) {
        h1 {
            font-size: 2rem;
        }
    }
    @media screen and (min-width: 480px) {
        h1 {
            font-size: 3rem;
        }
    }
    @media screen and (min-width: 750px) {
        h1 {
            font-size: 4rem;
        }
    }
    @media screen and (min-width: 1000px) {
        h1 {
            font-size: 6rem;
        }
    }
    @media screen and (min-width: 1500px) {
        h1 {
            font-size: 8rem;
        }
    }
</style>