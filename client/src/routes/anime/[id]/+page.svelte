<script lang="ts">
    import HeroBanner from "$lib/HeroBanner.svelte";
    import StarRating from "$lib/StarRating.svelte";
    import type { Source, Track, Video, Picture, Anime } from "$lib/types.ts";

    export const anime: Anime = {
        video: {
            srcset: [ { src: "/video/video.mp4", mime: "video/mp4" } ],
            tracks: [ { kind: "captions", src: "static/track/captions.vtt", lang: "en", label: "English" } ],
            title: "My Hero Academia trailer"
        },
        image: {
            srcset: [ {media: "(min-width: 0px;)", src: "/image/image.png", mime: "image/png" } ],
            title: "My Hero Academia poster"
        },
        name: "My Hero Academia",
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
        <div id="action-buttons" class="my-6 text-sm md:text-md flex w-full md:w-1/2 xl:w-1/3 gap-5">
            <button class="button bg-blue-500 hover:bg-blue-600 active:bg-blue-700" id="list">
                <i class="icon bi bi-plus"></i>
                <span>ADD TO LIST</span>
            </button>
            <button class="button bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700" id="list">
                <i class="icon bi bi-filetype-php"></i>
                <span>explode()</span>
            </button>
        </div>
    </section>
</main>

<style>
    .icon {
        @apply flex items-center justify-center;
    }
    .button {
        @apply flex flex-1 items-center justify-center gap-1 p-2 rounded-lg text-lg duration-150;
    }
</style>