module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            zIndex: {
                "-10": "-10",
                "-20": "-20",
                "-30": "-30",
                "-40": "-40",
                "-50": "-50",
                "-100": "-100",
                100: "100",
            },
            inset: {
                "1/5": "20%",
                "1/6": "16.666667%",
                "1/8": "12.5%",
                "1/10": "10%",
            },
            padding: {
                full: "100%",
            },
            opacity: {
                85: "0.85",
                86: "0.86",
                87: "0.87",
                88: "0.88",
                89: "0.89",
                96: "0.96",
                97: "0.97",
                98: "0.98",
                99: "0.99",
            },
            width: {
                18: "4.5rem",
            },
            height: {
                104: "26rem",
                112: "28rem",
                120: "30rem",
                128: "32rem",
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: [],
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
