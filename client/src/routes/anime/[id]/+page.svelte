<script lang="ts">
    type Season = {
        season: string;
        year: number;
    }
    type Media = {
        title: string;
        type: string;
        genres: string[];
        episodes: number;
        season: Season;
        studio: string;
        demographic: string;
        rating: string;
    };

    let media: Media = { 
        title: "Oshi No Ko", 
        type: "Anime", 
        genres: ["Romance", "Drama", "Mystery"],
        episodes: 12,
        season: { season:"Summer", year: 2024 },
        studio: "Doga Kobo",
        demographic: "Seinen",
        rating: "PG-13"
    }
</script>

<div class="sm:container mx-auto bg-red grid grid-flow-row gap-4">
    <section id="title-container" class="p-2 bg-blue-500">
        <h2 class="text-2xl font-semibold">{media.title}</h2>
    </section>
    <section id="principal-information" class="flex flex-col md:flex-row gap-6">
        <div id="first-column" class="flex flex-col justify-center items-center">
            <div id="poster-container" class="w-[240px] aspect-[3/4] lg:w-[280px] xl:w-[300px] h-auto bg-green-500"></div>
            <div id="buttons-container" class="w-full max-w-72 grid grid-flow-col gap-2 my-4">
                <button class="px-2 py-1 rounded bg-purple-500">Add to list</button>
                <button class="px-2 py-1 rounded bg-purple-500">Add to list</button>
            </div>
        </div>
        <div id="info-grid" class="flex flex-col gap-4 flex-1">
            <div id="genres-container" class="info-container">
                <p id="genres">
                    <span class="cat-key">Genres:</span>
                    <span class="cat-value">{media.genres.join(", ")}</span>
                </p>
            </div>
            <div id="episodes-container" class="info-container">
                <p id="episodes">
                    <span class="cat-key">Episodes:</span>
                    <span class="cat-value">{media.episodes}</span>
                </p>
            </div>
            <div id="season-container" class="info-container">
                <p id="season">
                    <span class="cat-key">Season:</span>
                    <span class="cat-value">{media.season.season}&nbsp;{media.season.year}</span>
                </p>
            </div>
            <div id="studio-container" class="info-container">
                <p id="studio">
                    <span class="cat-key">Studio:</span>
                    <span class="cat-value">{media.studio}</span>
                </p>
            </div>
            <div id="demographic-container" class="info-container">
                <p id="demographic">
                    <span class="cat-key">Demographic:</span>
                    <span class="cat-value">{media.demographic}</span>
                </p>
            </div>
            <div id="pg-rating-container" class="info-container">
                <p id="pg-rating">
                    <span class="cat-key">Rating:</span>
                    <span class="cat-value">{media.rating}</span>
                </p>
            </div>
        </div>
    </section>
</div>

<style>
    .info-container {
        @apply bg-red-500;
    }

    .cat-key, .cat-value {
        @apply text-lg;
    }

    .cat-key {
        @apply font-bold;
    }
</style>
