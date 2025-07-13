import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["'Cabin'", ...defaultTheme.fontFamily.sans],
                print: ["'EB Garamond'", ...defaultTheme.fontFamily.sans]
            }
        }
    }
}
