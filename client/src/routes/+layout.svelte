<script lang="ts">
    import "../global.css";
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<Header />
<main class="px-1 md:px-8 py-8">
    <slot/>
</main>
<Footer/>