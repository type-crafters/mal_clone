<script lang="ts">
    export const size: string = "md";

    const sizes: {[key: string]: number} = {
        "xs": 1.0,
        "sm": 1.25,
        "md": 1.50,
        "lg": 2.0,
        "xl": 2.50
    }
</script>

<div id="star-container" class="my-4">
    <div id="star-wrapper" class="flex items-center gap-3">
        <i class="bi bi-star" style="font-size: { sizes.size } rem;"></i>
        <i class="bi bi-star" style="font-size: { sizes.size } rem;"></i>
        <i class="bi bi-star" style="font-size: { sizes.size } rem;"></i>
        <i class="bi bi-star" style="font-size: { sizes.size } rem;"></i>
        <i class="bi bi-star" style="font-size: { sizes.size } rem;"></i>
    </div>
</div>