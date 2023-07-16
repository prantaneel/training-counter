// uno.config.ts
import { defineConfig, presetTypography, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
    presets: [
        presetUno(),
        presetTypography(),

        presetWebFonts({
            fonts: {
                sans: [
                    {
                        name: "Inter",
                        weights: [300, 400, 500, 600, 700, 800],
                        italic: true,
                    },
                ],
            },
        }),
    ],

    theme: {
        fontFamily: {},
    },

    shortcuts: {
        // cards
        "ksp-base-card": "w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md",

        // form controls
        "ksp-input-label": "text-base font-semibold text-gray-900",
        "ksp-input-desc": "mt-1 text-sm font-medium text-gray-500",
        "ksp-base-label": "block mb-2 text-sm font-medium text-gray-900",
        "ksp-inline-input-wrapper": "inline-input px-0 py-0 font-medium",
        "ksp-inline-input": "pl-10 text-right",
        "ksp-inline-label": "absolute left-3 top-1/2 transform -translate-y-1/2 z-10 text-sm font-medium",

        "ksp-helper-text": "mt-1 text-xs font-medium text-gray-500 text-left",
        "ksp-error-text": "mt-1 text-xs font-medium text-red-600 text-left",

        // icons
        "ksp-input-icon": "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
        "ksp-input-icon-right": "absolute right-3 top-1/2 transform -translate-y-1/2"
    },
});
