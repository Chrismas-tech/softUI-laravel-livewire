import { defineConfig } from "vite";
import laravel, { refreshPaths } from 'laravel-vite-plugin';
export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/scss/soft-ui-dashboard.scss", "resources/js/app.js"],
            refresh: [
                ...refreshPaths,
                'app/Http/Livewire/**',
            ],
        }),
    ],
});
