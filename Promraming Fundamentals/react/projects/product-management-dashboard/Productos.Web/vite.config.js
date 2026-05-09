import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],

    server: {
        proxy: {
            '/api': {
                target: 'https://aws-1-us-east-2.pooler.supabase.com:6543',
                secure: false
            }
        }
    }
})