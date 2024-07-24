/** @type {import("tailwindcss").Config} */
export default {
    content: ["./src/**/*.{html,css,js,ts,svelte}"],
    theme: {
        extend: {
            colors: {

                "anidex": {
                    "50": "#f6f7f9",
                    "100": "#eceef2",
                    "200": "#d4d9e3",
                    "300": "#afb7ca",
                    "400": "#8391ad",
                    "500": "#647393",
                    "600": "#4f5c7a",
                    "700": "#414b63",
                    "800": "#384054",
                    "900": "#2b303d",
                    "950": "#212530",

                },
            }
        },
    },
    plugins: [],
}

