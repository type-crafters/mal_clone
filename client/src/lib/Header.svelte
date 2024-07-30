
<div class="bg-tune-900 px-6 h-16">
    <div class="flex justify-end sm:justify-center items-center max-[639px]:pt-3.5 max-w-6xl mx-auto header_font ">
        <nav class="sm:flex justify-between items-center w-full mx-4 my-2 hidden gap-2">
            <div class="flex justify-center w-1/3 gap-3 text-sm sm:text-lg">
                <a href="/anime" class="hover:bg-tune-500 py-1 px-2 rounded-lg">Anime</a>
                <a href="/manga" class="hover:bg-tune-500 py-1 px-2 rounded-lg">Manga</a>
                <a href="/genres" class="hover:bg-tune-500 py-1 px-2 rounded-lg">Géneros</a>
            </div>
            <div class="flex justify-center w-1/3 text-md sm:text-xl">
                Anime Dex
                <!-- placeholder Logo -->
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                </svg> -->
            </div>
            <div class="flex justify-center w-1/3 items-center gap-5">
                <form method="post" id="search">
                    <div id="searchbox-container" class="flex flex-row-reverse gap-1 items-center rounded-full px-4 py-1 bg-neutral-800 shadow-inner">
                        <button type="submit" id="search">
                            <i class="bi bi-search text-xl"></i>
                        </button>
                        <input type="search" size="9" name="searchbox" id="searchbox" class="py-1 px-4 bg-transparent focus:outline-none" placeholder="Find anime...">
                    </div>
                </form>

                <!-- <input type="search"> -->
                <div id="avatarButton" class="relative inline-block">
                    <button 
                        type="button" 
                        data-dropdown-toggle="userDropdown" 
                        data-dropdown-placement="bottom-start" 
                        class="w-10 h-10 overflow-hidden rounded-full border-2 border-gray-300 dark:border-gray-600 focus:outline-none hover:ring-2 hover:ring-green-500 dark:hover:ring-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <img src="https://via.placeholder.com/150" alt="" class="w-full h-full object-cover">
                    </button>
                </div>
            </div>
        </nav>

        <input id="sidebar-active" class="hidden" type="checkbox">
        <!-- mobile navbar -->
        <nav id="mobile-navbar" class="fixed top-0 right-0 z-10 w-72 h-full bg-tune-800 transform translate-x-full transition-transform duration-500 ease-in-out">
            
            <label for="sidebar-active" class="block pt-1 pb-3 px-1 w-full">
                <i class="bi bi-x text-4xl"></i>
            </label>
            <a href="/anime" class="block hover:bg-tune-500 py-3 px-4 rounded-lg w-full">Anime</a>
            <a href="/manga" class="block hover:bg-tune-500 py-3 px-4 rounded-lg w-full">Manga</a>
            <a href="/genres" class="block hover:bg-tune-500 py-3 px-4 rounded-lg w-full">Géneros</a>

            <div class="flex items-center gap-5 py-20 px-4">
                <form method="post" id="search">
                    <div id="searchbox-container" class="flex flex-row-reverse gap-1 items-center rounded-full px-4 py-1 bg-neutral-800 shadow-inner">
                        <button type="submit" id="search">
                            <i class="bi bi-search text-xl"></i>
                        </button>
                        <input type="search" size="7" name="searchbox" id="searchbox" class="py-1 px-4 bg-transparent focus:outline-none" placeholder="Find anime...">                    
                    </div>
                </form>

                <!-- <input type="search"> -->
                <div id="avatarButton" class="relative inline-block">
                    <button 
                        type="button" 
                        data-dropdown-toggle="userDropdown" 
                        data-dropdown-placement="bottom-start" 
                        class="w-10 h-10 overflow-hidden rounded-full border-2 border-gray-300 dark:border-gray-600 focus:outline-none hover:ring-2 hover:ring-green-500 dark:hover:ring-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <img src="https://via.placeholder.com/150" alt="" class="w-full h-full object-cover">
                    </button>
                </div>
            </div>
        </nav>

        <div class="flex items-center sm:hidden">
            <label for="sidebar-active">
                <svg class="w-8 h-8 text-gray-800 dark:text-tune-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
                </svg>
            </label>
        </div>
    </div>
</div>

<style>

    #sidebar-active:checked ~ #mobile-navbar {

        transform: translateX(0);
    }
</style>