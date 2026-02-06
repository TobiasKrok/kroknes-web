import type { NextConfig } from 'next'
import { withPayload } from '@payloadcms/next/withPayload'
const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'https',
                hostname: 'kroknes.dev',
                pathname: '/api/cms/media/**',
            },
        ],
    },
}

export default withPayload(nextConfig)
