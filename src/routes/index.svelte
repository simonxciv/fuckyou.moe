<script lang="ts" context="module">
    import type { Load } from "@sveltejs/kit";
    export const load: Load = ({ url }) => {
        return {
            props: {
                moe: url.searchParams.get('moe')?.toString() ?? undefined
            }
        }
    }
</script>

<script lang="ts">
    export let moe: string;

    $: moeText = `Fuck you, Moe${moe ? ` ${moe}` : ''}`
</script>

<svelte:head>
    <title>{moeText}</title>
</svelte:head>

<div>
    <h1>
        {moeText}
    </h1>
</div>

<style>
    div {
        min-height: 100vh;
        display: grid;
        align-items: center;
        justify-content: center;
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
    @media screen and (min-width: 1400px) {
        h1 {
            font-size: 8rem;
        }
    }
</style>