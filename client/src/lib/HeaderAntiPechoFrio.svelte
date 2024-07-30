<header id="website-header" class="grid grid-cols-3 gap-5 py-2 text-lg">
    <div class="header-column">
        <nav id="header-navbar" class="flex items-center gap-8">
            <a href="/anime">Anime</a>
            <a href="/manga">Manga</a>
            <a href="/genres">Géneros</a>
        </nav>
    </div>
    <div class="header-column">
        <a href="/" class="text-2xl font-semibold">
            <h1>AnimeDex</h1>
        </a>
    </div>
    <div class="header-column gap-6">
        <div id="searchbox" class="flex flex-row-reverse items-center rounded-full bg-neutral-900">
            <button type="submit" class="px-2">
                <i class="bi bi-search flex items-center justify-center"></i>
            </button>
            <input type="search" name="searchbox" id="searchbox" class="py-1 px-4 bg-transparent focus:outline-none" placeholder="Find anime...">
        </div>
        <div id="profile-container" class="h-12 w-auto aspect-square rounded-full bg-cover bg-center bg-no-repeat bg-neutral-400"></div>
    </div>
</header>

<style lang="postcss">
    .header-column {
        @apply flex justify-between items-center;
    }
</style>