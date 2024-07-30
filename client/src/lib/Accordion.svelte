<script lang="ts">
    import type { Accordion } from "./types";
    import { AccordionCardType } from "./types";

    export let accordion: Accordion = {
        name: "media-accordion",
        items: [
            {
                id: "synopsis",
                title: "Synopsis",
                type: AccordionCardType.TEXT,
                content:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit necessitatibus cupiditate velit. Est nisi quod blanditiis hic? Ullam similique dolorum sit architecto, esse dicta nostrum rerum qui debitis nemo nesciunt. " +
                    "Alias reprehenderit nam officiis similique iste aut nihil! Animi debitis quidem corrupti saepe. Ad, sit perspiciatis, voluptates autem maxime temporibus saepe ex veniam laudantium fugiat expedita minus impedit nemo vel? " +
                    "Tenetur vero reprehenderit iusto molestiae inventore, atque ipsa laborum praesentium voluptatem quas eligendi ex quis ducimus. Ipsam architecto dolorem porro necessitatibus quibusdam sunt corporis sapiente! Ea cumque incidunt voluptatem id! " +
                    "Quia maxime nisi fugit, sint optio necessitatibus! Labore ab optio atque a dolore perferendis iusto! Impedit est eaque asperiores eveniet nemo in. Iusto ab doloremque esse adipisci distinctio numquam alias. " +
                    "Ipsum, minima, vitae nobis deleniti, reiciendis accusamus architecto aut ipsa facilis optio illum voluptatibus. Facere nesciunt quibusdam repudiandae quia libero vero, inventore non recusandae ea incidunt facilis id rerum voluptas!",
            },
            {
                id: "episodes",
                title: "Episodes",
                type: AccordionCardType.TEXT,
                content:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit necessitatibus cupiditate velit. Est nisi quod blanditiis hic? Ullam similique dolorum sit architecto, esse dicta nostrum rerum qui debitis nemo nesciunt. " +
                    "Alias reprehenderit nam officiis similique iste aut nihil! Animi debitis quidem corrupti saepe. Ad, sit perspiciatis, voluptates autem maxime temporibus saepe ex veniam laudantium fugiat expedita minus impedit nemo vel? " +
                    "Tenetur vero reprehenderit iusto molestiae inventore, atque ipsa laborum praesentium voluptatem quas eligendi ex quis ducimus. Ipsam architecto dolorem porro necessitatibus quibusdam sunt corporis sapiente! Ea cumque incidunt voluptatem id! " +
                    "Quia maxime nisi fugit, sint optio necessitatibus! Labore ab optio atque a dolore perferendis iusto! Impedit est eaque asperiores eveniet nemo in. Iusto ab doloremque esse adipisci distinctio numquam alias. " +
                    "Ipsum, minima, vitae nobis deleniti, reiciendis accusamus architecto aut ipsa facilis optio illum voluptatibus. Facere nesciunt quibusdam repudiandae quia libero vero, inventore non recusandae ea incidunt facilis id rerum voluptas!",
            },
        ],
    };

    function openAccordion(event: Event) {
        const checkbox = event.target as HTMLInputElement;
        const id: string = checkbox.value;
        const icon = document.getElementById(id + "-icon") as HTMLElement
        const content = document.getElementById(id + "-content") as HTMLDivElement;

        console.log(icon);

        if (checkbox.checked) {
            content.style.maxHeight = content.scrollHeight + "px";
            icon.style.transform = "rotate(90deg)"
        } else {
            content.style.maxHeight = "0";
            icon.style.transform = "rotate(0)"
        }
    }
</script>

<section id="accordion-container">
    <div id={accordion.name} class="grid grid-flow-row gap-1">
        {#each accordion.items as item}
            <div class="accordion-card" id={item.id}>
                <div class="accordion-card-tile" id={item.id + "-tile"}>
                    <h3 class="accordion-card-title" id={item.id + "-title"}>{item.title}</h3>
                    <label for={"display-" + item.id}>
                        <input type="checkbox" class="accordion-display-button" id={"display-" + item.id} value={item.id} on:change={openAccordion}/>
                        <i class="icon bi bi-chevron-right display-button-icon" id={item.id + "-icon"}></i>
                    </label>
                </div>
                <div class="accordion-card-content" id={item.id + "-content"}>
                    {#if item.type == AccordionCardType.TEXT}
                        <p class="accordion-card-paragraph" id={item.id + "-paragraph"}>{item.content}</p>
                    {:else if item.type == AccordionCardType.HTML}
                        {@html item.content}
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</section>

<style lang="postcss">
    .accordion-card-tile {
        @apply flex justify-between items-center px-4 py-2 bg-neutral-700;
    }

    .accordion-card-title {
        @apply text-2xl;
    }

    .display-button-icon {
        transition: transform 200ms ease-in-out;
        @apply text-xl text-blue-400 cursor-pointer;
    }

    .display-button-icon:hover {
        text-shadow: 0px 0px 4px rgb(191 219 254);
    }

    .accordion-display-button:checked + .display-button-icon {
        transform: rotate(90deg);
    }

    .accordion-display-button {
        @apply hidden;
    }

    .accordion-card-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 300ms ease-in-out;
    }

    .accordion-card-paragraph {
        @apply text-lg px-2 py-1 overflow-hidden;
    }
</style>
