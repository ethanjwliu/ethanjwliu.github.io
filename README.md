# Ethan Liu — Research Portfolio

A personal portfolio site for **Jiawei "Ethan" Liu** — applied economist, data scientist, and PhD researcher. Built as a fast, dependency-free static site.

🔗 **Live:** https://YOUR-USERNAME.github.io/ethan-liu-portfolio/

## Highlights

- **Home** — hero, "What I Do" capability carousel, and a filterable "Selected Work" carousel
- **Research & Projects** — segmented view (Academic Research / Applied Projects) with topic filters
- **Toolbox** — methods → tools → evidence table, each linking to the project where it was used
- **About** — education timeline, experience, and publications
- Client-side routing via URL hash (`#research`, `#toolbox`, `#about`), responsive down to mobile

## Tech

Plain **HTML + CSS + vanilla JavaScript** — no build step, no framework, no dependencies. Fonts (IBM Plex Sans / Mono) load from Google Fonts.

```
index.html    # markup + page structure
styles.css    # design system (tokens) + all styling
app.js        # content data, rendering, routing, carousels, filters
headshot.jpg  # profile photo
*.pdf         # resume + linked reports
```

To edit content (projects, publications, toolbox rows, capabilities), update the data arrays near the top of [`app.js`](app.js).

## Run locally

Any static file server works:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

1. Push these files to a GitHub repository.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Choose the `main` branch and `/ (root)` folder, then **Save**.
4. Your site goes live at `https://YOUR-USERNAME.github.io/REPO-NAME/` within a minute or two.

## License

Content © 2026 Jiawei "Ethan" Liu. Code available under the MIT License.
