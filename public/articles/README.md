# Articles — Static HTML

This folder is served verbatim by Vite at `/articles/`. URLs:

- `/articles/00_Info_Input_Collection.html`
- `/articles/01_Asset_Design.html`
- ... etc.

## Wiring a YouTube video

Each article has a `<section class="video-embed" data-yt-id="REPLACE_ME">`
between the hero and the stats-bar. To enable the video:

1. Open the article HTML.
2. Change `data-yt-id="REPLACE_ME"` to the YouTube video ID
   (e.g. `data-yt-id="dQw4w9WgXcQ"` — note: just the ID, not the full URL).
3. Save and redeploy. The inline script auto-hydrates the iframe on load.

Until you set a real ID, a "Video walkthrough · coming soon" poster is shown.

## Manifest — articles.json

Use this file from the React app to render an article index / homepage
thumbnail strip. Each entry has slug, title, tag, stage, thumbnail path,
URL, and a `youtube_id` field that mirrors the per-page setting.

## Adding a new article

1. Author it in `Story_Board_Generator/Articles to Publish/`
2. Run `Marketing/publish_to_website.py` to re-stage everything
3. The build script auto-injects the embed slot and updates the manifest
