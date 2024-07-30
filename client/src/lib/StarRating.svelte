<script lang="ts">
    export let size: string = "md";
    export let rating: number = 4.5;
    export let reviews: number = 211456;

    const sizes: { [key: string]: number } = {
        xs: 1.0,
        sm: 1.25,
        md: 1.5,
        lg: 2.0,
        xl: 2.5,
    };

    function toVerboseNumber(num: number): string {
        let verbose = "";

        if(num < 1000) {
            verbose = `${num}`;
        } else if (num < 1000000) {
            verbose = `${toFixedDecimals(num/1000, 2)}K`;
        } else if (num < 1000000000) {
            verbose = `${toFixedDecimals(num/1000000, 2)}M`;
        } else {
            verbose = `${toFixedDecimals(num/1000000000, 2)}B`
        }

        return verbose;
    }

    function toFixedDecimals(num: number, decimals: number = 0) {
        return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
    }

    function drawStars(rating: number): string {
        const empty = `<i class="bi bi-star" style="font-size: ${sizes[size]}rem;"></i>`;
        const half = `<i class="bi bi-star-half" style="font-size: ${sizes[size]}rem;"></i>`;
        const full = `<i class="bi bi-star-fill" style="font-size: ${sizes[size]}rem;"></i>`;

        rating = Math.floor(rating * 2);
        let stars: string = "";

        for (let i = 0; i < 5; i++) {
            if (rating - 2 >= 0) {
                stars += full + "\n";
                rating -= 2;
            } else if (rating == 1) {
                stars += half + "\n";
                rating--;
            } else {
                stars += empty + "\n";
            }
        }

        return stars;
    }
</script>

<div id="ratings-container" class="my-4 flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-5" style="font-size: {sizes[size] - 0.5}rem;">
    <div id="star-wrapper" class="flex items-center gap-3">
        {@html drawStars(rating)}
    </div>
    <div id="number-wrapper">
        <span>Rated</span>
        <span id="number-rating">{toFixedDecimals(rating, 1)}</span>
        <span>/ 5.0 stars</span>
        <span id="total-reviews">({toVerboseNumber(reviews)})</span>
    </div>
</div>
