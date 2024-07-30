<script lang="ts">
    import type { ModalLink } from "$lib/types";

    export let link: ModalLink | undefined = { href: "/", text: "Go home" };
    function closeModal() {
        (document.getElementById("modal-block") as HTMLElement).style.display = "none";
    }
</script>

<section id="modal-block" class="fixed top-0 left-0 z-30 flex justify-center items-center w-screen h-screen">
    <div id="modal-darken" class="absolute top-0 left-0 w-full h-full bg-black opacity-70 pointer-events-none"></div>
    <div id="modal-card" class="relative z-50 w-full mx-2 sm:mx-4 sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-1/3 bg-neutral-600 cursor-pointer pointer-events-auto hover:shadow-md">
        <div id="button-wrapper" class="flex justify-end p-1">
            <button id="close" on:click={closeModal}>
                <i class="icon bi bi-x text-3xl text-neutral-200 hover:text-red-600 duration-150"></i>
            </button>
        </div>
        <div id="modal-content" class="h-48"></div>
        <div id="portal-wrapper" class="flex justify-center py-2">
            {#if link} 
            <a href={link.href} class="flex items-center justify-center py-2 px-4 rounded-lg text-lg duration-150 bg-blue-600 hover:bg-blue-700 active:bg-blue-800">{link.text}</a>
            {/if}
        </div>
    </div>
</section>