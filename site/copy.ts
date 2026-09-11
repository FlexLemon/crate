export type Lang = 'es' | 'en'

export const SITE_URL = 'https://flexlemon.github.io/crate/'
export const DOWNLOAD_URL = 'https://github.com/FlexLemon/crate/releases/latest/download/Crate-Setup-1.0.4.exe'
export const OG_IMAGE = `${SITE_URL}logo.png`

export const copy = {
  es: {
    title: 'Crate DJ | Organizador de música para DJs y productores',
    description:
      'Crate DJ es el centro de mando de tu biblioteca musical. Organiza pistas por artista, analiza BPM y formato, convierte MP3 WAV FLAC y monta sets. App para DJs y productores en Windows.',
    ogLocale: 'es_ES',
    langEs: 'Español',
    langEn: 'English',
    kicker: 'Crate DJ',
    brand: 'Crate DJ',
    tagline: 'El centro de mando de tu biblioteca musical.',
    download: 'Descargar Crate',
    pillars: ['Organizar', 'Analizar', 'Convertir', 'Montar sets'],
    rackTitle: 'Todo lo que vas a tener en un solo programa.',
    copyright: '© 2026 DK',
    modules: [
      {
        id: 'organizar',
        title: 'Organizar',
        lead: 'Artista, BPM, género y año. Copia segura, con vista previa.',
        state: 'Listo',
      },
      {
        id: 'analizar',
        title: 'Analizar',
        lead: 'BPM, formato, bitrate y estadísticas. Sin mover archivos.',
        state: 'Próximamente',
      },
      {
        id: 'convertir',
        title: 'Convertir',
        lead: 'MP3, WAV, FLAC, AIFF. Por lotes, cuando confirmes.',
        state: 'Próximamente',
      },
      {
        id: 'sets',
        title: 'Sets',
        lead: 'Crear Set, Smart Set y analizar transiciones.',
        state: 'Próximamente',
      },
      {
        id: 'samples',
        title: 'Samples',
        lead: 'Kicks, loops y presets, clasificados para pinchar y producir.',
        state: 'Próximamente',
      },
      {
        id: 'tools',
        title: 'Tools',
        lead: 'Duplicados, renombrar y metadata.',
        state: 'Próximamente',
      },
    ],
  },
  en: {
    title: 'Crate DJ | Music library organizer for DJs and producers',
    description:
      'Crate DJ is the command center for your music library. Organize tracks by artist, analyze BPM and format, convert MP3 WAV FLAC, and build sets. Windows app for DJs and producers.',
    ogLocale: 'en_US',
    langEs: 'Español',
    langEn: 'English',
    kicker: 'Crate DJ',
    brand: 'Crate DJ',
    tagline: 'The command center for your music library.',
    download: 'Download Crate',
    pillars: ['Organize', 'Analyze', 'Convert', 'Build Sets'],
    rackTitle: 'Everything you will run in one program.',
    copyright: '© 2026 DK',
    modules: [
      {
        id: 'organizar',
        title: 'Organize',
        lead: 'Artist, BPM, genre and year. Copy-safe, with a preview.',
        state: 'Ready',
      },
      {
        id: 'analizar',
        title: 'Analyze',
        lead: 'BPM, format, bitrate and stats. Files stay put.',
        state: 'Coming soon',
      },
      {
        id: 'convertir',
        title: 'Convert',
        lead: 'MP3, WAV, FLAC, AIFF. Batch, when you hit go.',
        state: 'Coming soon',
      },
      {
        id: 'sets',
        title: 'Sets',
        lead: 'Build a set, Smart Set, and read the transitions.',
        state: 'Coming soon',
      },
      {
        id: 'samples',
        title: 'Samples',
        lead: 'Kicks, loops and presets, sorted for DJs and producers.',
        state: 'Coming soon',
      },
      {
        id: 'tools',
        title: 'Tools',
        lead: 'Duplicates, rename and metadata.',
        state: 'Coming soon',
      },
    ],
  },
} as const
