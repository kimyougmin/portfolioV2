/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                black1: "#1C1C1C",
                black2: "#171F1B",
                black3: "#818181",
                black9: "#E8E8E8"
            },
        },
    },
    plugins: [
    ],
}
