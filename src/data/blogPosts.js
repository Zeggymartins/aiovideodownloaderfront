export const featureStory = {
  title: 'Inside MediaVeed Labs: How We Keep Downloads Light-Speed',
  date: 'January 2025',
  excerpt:
    'From edge caching to smart format prioritisation, we constantly tweak the pipeline so your MP4s arrive in seconds, even when platforms throttle traffic.',
};

export const blogPosts = [
  {
    slug: 'creator-workflows-mp3',
    title: '5 Creator Workflows Powered by Instant MP3s',
    date: 'Jan 20, 2025',
    tag: 'Creator Tips',
    summary:
      'Turn inspiration into action. Discover how podcasters, vloggers, and DJs use MediaVeed to build sample packs, remixes, and voice-over assets overnight.',
  },
  {
    slug: 'hls-dash-speed',
    title: 'Why HLS & DASH Make Downloads Slow (and what we do about it)',
    date: 'Jan 12, 2025',
    tag: 'Engineering',
    summary:
      'We break down the streaming protocols modern sites rely on, and explain the tricks—format ladders, chunk stitching, and caching—that keep your queue moving.',
  },
  {
    slug: 'mediaveed-roadmap-2025',
    title: 'Roadmap: Platforms & Power Features Coming in 2025',
    date: 'Jan 2, 2025',
    tag: 'Product',
    summary:
      'Threads, Facebook Reels, long-form audio extraction, and collaborative playlists are all on our radar. Here is a transparent look at what we are shipping.',
  },
];

export const blogDetailsContent = {
  'creator-workflows-mp3': {
    title: '5 Creator Workflows Powered by Instant MP3s',
    body: [
      'Creators are remix scientists. Overnight, MediaVeed enables sample-hungry DJs to spin viral snippets into new soundtracks.',
      'Voiceover artists repurpose speeches into crisp voice cuts, while vloggers strip background tracks to remix reels and Shorts.',
      'We highlight five real workflows—from podcast highlight reels to TikTok mashups—that thrive because an MP3 is one click away.',
    ],
  },
  'hls-dash-speed': {
    title: 'Why HLS & DASH Make Downloads Slow (and what we do about it)',
    body: [
      'Modern video sites serve multi-chunk playlists (HLS & DASH). This is great for adaptive streaming, but painful for raw downloads.',
      'MediaVeed stitches fragments with format ladders that favor mp4/m4a first and gracefully fall back to webm when needed.',
      'This deep dive explains chunk caching, concurrency tuning, and how MediaVeed squeezes more speed out of the same network pipe.',
    ],
  },
  'mediaveed-roadmap-2025': {
    title: 'Roadmap: Platforms & Power Features Coming in 2025',
    body: [
      'Our 2025 rollout includes Facebook Reels, Threads, and longer-form audio extraction tailored for podcasters.',
      'We are also investing in collaborative playlists with shareable download queues for teams and studios.',
      'This roadmap shares timelines, beta programs, and the customer stories influencing the product backlog.',
    ],
  },
};
