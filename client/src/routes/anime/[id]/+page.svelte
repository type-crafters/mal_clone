<script lang="ts">
    import StarRating from "$lib/StarRating.svelte";
    import HeroBanner from "$lib/HeroBanner.svelte";

    type Source = {
        media?: string;
        src: string;
        mime: string;
    };

    type Track = {
        kind: string;
        src: string;
        lang: string;
        label: string;
    };

    type Video = {
        srcset: Source[];
        tracks: Track[];
        title?: string;
        poster?: string;
    }; 

    type Picture = {
        srcset: Source[];
        title?: string;
    };

    type Anime = {
        video?: Video;
        image: Picture;
        name: string,
        seasons: number;
        episodes: number;
    };

    export const anime: Anime = {
        // video: {
        //     srcset: [ { src: "/video/video.mp4", mime: "video/mp4" } ],
        //     tracks: [ { kind: "captions", src: "static/track/captions.vtt", lang: "en", label: "English" } ],
        //     title: "My Hero Academia trailer"
        // },
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
<main id="media-information" class="container mx-auto px-2 md:px-8">
    <section id="main-info" class="my-5 md:my-8">
        <h1 id="media-name" class="text-2xl md:text-3xl font-semibold my-4">{anime.name}</h1>
        <div id="seasons-episodes" class="flex items-center gap-5 text-sm text-slate-400">
            <span id="season-count">{anime.seasons} Seasons</span>
            <span id="episode-count">{anime.episodes} Episodes (on average)</span>
        </div>
        <div id="star-ratings">
            <StarRating />
        </div>
    </section>
</main>