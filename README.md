# QEditor Website

This is the official landing page for QEditor, built with React + Vite.

## Features

- **Modern UI:** Clean, responsive design using Vanilla CSS.
- **Internationalization (i18n):** Support for English and Chinese.
- **Download Center:** Easy access to download links for Windows and Linux.
- **Extensible:** Data-driven content management via `src/data.js`.

## Development

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Start development server:
    ```bash
    npm run dev
    ```

## Deployment (Cloudflare Pages)

1.  Build the project:
    ```bash
    npm run build
    ```

2.  Deploy the `dist/` directory to Cloudflare Pages.
    - **Build Command:** `npm run build`
    - **Build Output Directory:** `dist`

## Updating Content

- **Text:** Edit `src/data.js` to update descriptions or translations.
- **Versions:** Add new version entries to the `downloads` object in `src/data.js`.
