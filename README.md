# Nykøbing Mors Frikirke — Website

A static, multi-page church website built with plain HTML, CSS, and vanilla JavaScript. Danish-first with an EN/DA language toggle. Ready for GitHub Pages deployment.

---

## 1. Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `nykoebing-frikirke`)
2. Push this folder to the `main` branch:
   ```bash
   cd nykoebing-frikirke
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/nykoebing-frikirke.git
   git push -u origin main
   ```
3. Go to **Settings > Pages** in your GitHub repo
4. Under **Source**, select **Deploy from a branch**
5. Choose `main` branch and `/ (root)` folder, then click **Save**
6. Your site will be live at `https://YOUR-USERNAME.github.io/nykoebing-frikirke/`

---

## 2. Replace Placeholder Images

Place your own images in the `assets/images/` folder with these exact filenames:

| Filename              | Used on        | Recommended size |
|-----------------------|----------------|------------------|
| `church-exterior.jpg` | Home page      | 800x600 px       |
| `about-hero.jpg`      | About / Ministry / Reflections hero banner | 1920x800 px |
| `team-1.jpg`          | Ministry page  | 400x400 px (square) |
| `team-2.jpg`          | Ministry page  | 400x400 px (square) |
| `team-3.jpg`          | Ministry page  | 400x400 px (square) |
| `team-4.jpg`          | Ministry page  | 400x400 px (square) |
| `reflection-1.jpg`    | Reflections page | 800x500 px     |
| `reflection-2.jpg`    | Reflections page | 800x500 px     |
| `reflection-3.jpg`    | Reflections page | 800x500 px     |

---

## 3. Replace the Drone / Hero Video

Place your video file at: `assets/video/hero.mp4`

Optionally add a poster (still frame shown before video loads): `assets/video/hero-poster.jpg`

### Compression guidance (HandBrake)

1. Open [HandBrake](https://handbrake.fr/) and load your video
2. **Preset:** Fast 1080p30
3. **Video tab:**
   - Codec: H.264
   - Quality: RF 28 (constant quality)
   - Framerate: Same as source or 30fps
4. **Dimensions tab:** Max width 1920
5. **Audio tab:** Remove all audio tracks (not needed for a muted background)
6. **Target file size:** Under 15 MB for fast web loading
7. Export as `.mp4`

---

## 4. Add Your Facebook Page

In `index.html`, find the Facebook iframe and replace `YOUR-PAGE-HERE` in the `src` URL with your actual Facebook page path.

For example, if your page URL is `https://www.facebook.com/NykobingFrikirke`, replace `YOUR-PAGE-HERE` with `NykobingFrikirke`.

You can also generate a fresh embed at: https://developers.facebook.com/docs/plugins/page-plugin/

---

## 5. Replace the Google Maps Embed

In `om-os.html`, find the map iframe (marked with a `<!-- REPLACE -->` comment).

To get your own embed:

1. Go to [Google Maps](https://maps.google.com)
2. Search for your church address
3. Click **Share > Embed a map**
4. Copy the `<iframe>` code
5. Replace the entire existing `<iframe>` tag in `om-os.html`

---

## 6. Add Real Team Members

In `tjeneste.html`, update each team card:

- Replace the `src` attribute on `<img>` tags with the correct photo filename
- Update the names and roles in `assets/js/lang.js` under both `da` and `en` objects:
  - `team_1_name`, `team_1_role` through `team_4_name`, `team_4_role`
- To add more team members, duplicate a `<div class="team-card">` block and add corresponding keys to `lang.js`

---

## 7. Add Real Reflections / Blog Posts

In `refleksioner.html`, update each reflection card:

- Replace placeholder images in `assets/images/`
- Update the text in `assets/js/lang.js` under both `da` and `en`:
  - `reflection_1_date`, `reflection_1_title`, `reflection_1_excerpt` (and 2, 3, etc.)
- To add more posts, duplicate a `<div class="reflection-card">` block and add matching keys to `lang.js`
- Update the `href="#"` links to point to full blog post pages if desired

---

## File Structure

```
nykoebing-frikirke/
├── index.html            ← Home page
├── om-os.html            ← About Us
├── tjeneste.html         ← Ministry / Team
├── refleksioner.html     ← Reflections / Blog
├── assets/
│   ├── css/
│   │   └── style.css     ← All styles
│   ├── js/
│   │   ├── main.js       ← Nav, language toggle, AOS init
│   │   └── lang.js       ← All DA/EN text strings
│   ├── images/           ← Place your images here
│   └── video/            ← Place hero.mp4 here
└── README.md
```

---

## Tech Notes

- **Language toggle:** Persists via `localStorage` across page navigation
- **Scroll animations:** Powered by [AOS](https://michalsnik.github.io/aos/) via CDN
- **Fonts:** Google Fonts (Playfair Display + Lato)
- **No build step required** — edit HTML/CSS/JS directly and push
