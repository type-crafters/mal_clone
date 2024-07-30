<script lang="ts">
    import HeroBanner from "$lib/HeroBanner.svelte";
    import StarRating from "$lib/StarRating.svelte";
    import Accordion from "$lib/Accordion.svelte";
    import type { Anime } from "$lib/types";

    export const anime: Anime = {
        video: {
            srcset: [ { src: "/video/video.mp4", mime: "video/mp4" } ],
            tracks: [ { kind: "captions", src: "static/track/captions.vtt", lang: "en", label: "English" } ],
            title: "Super Mario 3D World trailer"
        },
        image: {
            srcset: [ {media: "(min-width: 0px;)", src: "/image/image.png", mime: "image/png" } ],
            title: "Super Mario 3D World poster"
        },
        name: "Super Mario 3D World",
        seasons: 7,
        episodes: 26,
    }
</script>

<HeroBanner />
<main id="media-information" class="container mx-auto px-3 md:px-8">
    <section id="main-info" class="my-8">
        <h1 id="media-name" class="text-3xl font-semibold my-4">{anime.name}</h1>
        <div id="seasons-episodes" class="flex items-center gap-3 text-sm text-slate-400">
            <span id="season-count">{anime.seasons} Seasons</span>
            |
            <span id="episode-count">{anime.episodes} Episodes (on average)</span>
        </div>
        <div id="star-ratings">
            <StarRating size="md"/>
        </div>
        <div id="action-buttons" class="my-6 text-sm md:text-md flex flex-col sm:flex-row w-full md:w-3/4 lg:w-1/2 2xl:w-1/3 gap-5">
            <button class="button bg-blue-500 hover:bg-blue-600 active:bg-blue-700" id="list">
                <i class="icon bi bi-plus-lg"></i>
                <span>ADD TO LIST</span>
            </button>
            <button class="button bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700" id="fav">
                <i class="icon bi bi-heart-fill"></i>
                <span>ADD TO FAVORITES</span>
            </button>
        </div>
    </section>
    <Accordion/>
</main>

<style lang="postcss">
    .button {
        @apply flex flex-1 items-center justify-center gap-1 p-2 rounded-full text-lg duration-150;
    }
</style>