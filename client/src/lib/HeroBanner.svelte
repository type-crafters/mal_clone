<script lang="ts">
    import type { Anime } from "$lib/types";

    export const anime: Anime = {
        video: {
            srcset: [ { src: "/video/video.mp4", mime: "video/mp4" } ],
            tracks: [ { kind: "captions", src: "static/track/captions.vtt", lang: "en", label: "English" } ],
            title: "My Hero Academia trailer"
        },
        image: {
            srcset: [{ media: "(min-width: 0px;)", src: "/image/image.png", mime: "image/png" }],
            title: "My Hero Academia poster",
        },
        name: "My Hero Academia",
        seasons: 7,
        episodes: 26,
    };
</script>

<section id="hero-banner">
    <div
        id="banner-container"
        class="w-full flex justify-center max-[639px]:h-80 sm:bg-gradient-to-r sm:from-black sm:via-neutral-700 sm:via-50% sm:to-black"
    >
        <div
            id="banner-wrapper"
            class="max-[639px]:w-full max-[639px]:h-full max-[639px]:relative sm:w-2/3 lg:w-1/2 sm:aspect-video sm:h-auto"
        >
            {#if anime.video}
                <!-- svelte-ignore a11y-media-has-caption -->
                <video title={anime.video.title} class="max-[639px]:absolute max-[639px]:inset-0 w-full h-full max-[639px]:object-cover" controls>
                    {#each anime.video.srcset as source}
                        <source media={source.media} src={source.src} type={source.mime} />
                    {/each}
                    {#each anime.video.tracks as track}
                        <track kind={track.kind} src={track.src} srclang={track.lang} label={track.label} />
                    {/each}
                </video>
            {:else}

            <picture title={anime.image.title} class="absolute inset-0 sm:static w-full h-full overflow-hidden">
                    {#each anime.image.srcset as source}
                        <source media={source.media} srcset={source.src} type={source.mime} />
                    {/each}
                    <img src={anime.image.srcset[0].src} alt="fallback" class="w-full h-full object-cover" />
                </picture>
            {/if}
        </div>
    </div>
</section>
