import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MR Real StrongMan Gym',
    short_name: 'StrongMan Gym',
    description: 'Premier fitness and unisex gym in Mannachanallur, Trichy.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ef4444',
    icons: [
      {
        src: '/logo/Logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
