<script lang="ts">
    import Header from "$lib/Header.svelte";
    import HeaderAntiPechoFrio from "$lib/HeaderAntiPechoFrio.svelte";
    import Footer from "$lib/Footer.svelte";
    import "../global.css";
    import "bootstrap-icons/font/bootstrap-icons.min.css";
</script>

<Header /> 
<slot/>
<Footer />