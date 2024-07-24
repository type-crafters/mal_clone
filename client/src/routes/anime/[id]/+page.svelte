<script lang="ts">
    import StarRating from "$lib/StarRating.svelte";

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

<section id="hero-banner">
    <div id="banner-container" class="w-full bg-gradient-to-r from-black  via-neutral-800 via-50% to-black flex justify-center">
        <div id="banner-wrapper" class="w-1/2 aspect-video h-auto">
            {#if anime.video} 
            <!-- svelte-ignore a11y-media-has-caption -->
            <video title={anime.video.title} class="w-full h-full" controls>
                {#each anime.video.srcset as source}
                <source media={source.media} src={source.src} type={source.mime}/>
                {/each}
                {#each anime.video.tracks as track}
                <track kind={track.kind} src={track.src} srclang={track.lang} label={track.label}/>
                {/each}
            </video>
            {:else} 
            <picture title={anime.image.title} class="w-full h-full overflow-hidden">
                {#each anime.image.srcset as source}
                <source media={source.media} srcset={source.src} type={source.mime}/>
                {/each}
                <img src={anime.image.srcset[0].src} alt="fallback" class="w-full h-full object-cover">
            </picture>
            {/if}
        </div>
    </div>
</section>
<main id="media-information" class="container mx-auto px-8">
    <section id="main-info" class="my-8">
        <h1 id="media-name" class="text-3xl font-semibold my-4">{anime.name}</h1>
        <div id="seasons-episodes" class="flex items-center gap-5 text-sm text-slate-400">
            <span id="season-count">{anime.seasons} Seasons</span>
            <span id="episode-count">{anime.episodes} Episodes (on average)</span>
        </div>
        <div id="star-ratings">
            <StarRating />
        </div>
    </section>
</main>