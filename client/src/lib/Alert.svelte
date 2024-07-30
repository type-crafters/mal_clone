<script lang="ts">
    import { onMount } from "svelte";

    export let id: string = "default"
    export let color: string = "info"; 
    export let title: string | undefined = undefined;
    export let text: string;
    const colors: {[key: string]: {[key: string]: string}} = {
        success: {background: "#BBF7D0", accent: "#166534"},
        warning: {background: "#FEF08A", accent: "#854D0E"},
        danger: {background: "#FECACA", accent: "#991B1B"},
        info: {background: "#BFDBFE", accent: "#2563EB"},
    }

    function closeAlert() {
        const alert = document.getElementById("alert-"+id) as HTMLDivElement;
        alert.style.display = "none";
    }

    onMount(() => {setTimeout(closeAlert, 7000)});
</script>

<div id={"alert-" + id} class="alert fixed top-4 right-4 py-1 px-3 flex items-center justify-between gap-5 min-w-72 max-w-[60%] z-50" style:background-color={colors[color].background} style:border={"1px solid" + colors[color].accent}>
    <div id="alert-content" class="line-clamp-2">
        {#if title} 
        <b id="title" class="font-bold" style:color={colors[color].accent}>{title}</b>
        <span id="text" style:color={colors[color].accent}>{text}</span>
        {/if}  
    </div>
    <button on:click={closeAlert}>
        <i class="icon bi bi-x text-lg" style:color={colors[color].accent}></i>
    </button>
</div>

<style>
    @keyframes fade { from { opacity: 1; } to { opacity: 0; display: none; } }

    .alert {
        animation: fade 1s ease-in-out 1 forwards 5s;
    }
</style>