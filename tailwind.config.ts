import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: "#ffffff",
                default: "green",
                "orange-action": "#F98A43",
                "purple-action": "#7A29DC",
                "green-action": "18A194",
                "dark-bg": "#121F28",
                "light-bg": "#1C2933",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui(), require("daisyui")],
};
export default config
