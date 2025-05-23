English | [中文](./README-zh.md)

# SOV710 Blog

Welcome to the SOV710 Blog repository! This blog is built with [VuePress v2](https://v2.vuepress.vuejs.org/) and themed with the powerful [vuepress-theme-hope](https://theme-hope.vuejs.press/). It features daily and weekly summaries, technical columns (like Intel Manual Translations), and a friends link page, all managed with `pnpm`.

## ✨ Features

* **VuePress v2**: Modern static site generator.
* **vuepress-theme-hope**: Feature-rich and highly customizable theme.
* **Markdown Content**: All content is written in Markdown.
* **Automated Post List**: `scripts/update-posts-list.js` automatically generates a list of posts.
* **Custom Columns**: Dedicated section for "Intel手册中文翻译".
* **Friends Page**: A stylish page to showcase links to friends' blogs/sites.
* **GitHub Pages Deployment**: Automated deployment using GitHub Actions.
* **Giscus Comment System**: (Planned and documented for setup).
* **PNPM Package Management**: Efficient and fast package management.

## 📂 Project Structure

```
.github/
└── workflows/
    └── deploy.yml        # GitHub Actions workflow for deployment
docs/
├── .vuepress/
│   ├── dist/             # Build output (generated)
│   ├── public/           # Static assets (favicons, friend avatars, etc.)
│   │   └── friends/
│   ├── styles/           # Custom styles (if any)
│   ├── config.js         # VuePress site-level configuration
│   └── theme.ts          # vuepress-theme-hope configuration
├── columns/
│   └── intel-manual-translate/ # Content for Intel Manual translations
│       ├── README.md
│       └── *.md
├── posts/                  # Blog posts (daily & weekly summaries)
│   ├── README.md           # Main post list (auto-generated by script)
│   └── *.md
├── README.md               # Homepage content
├── friends.md              # Friends link page content
└── about.md                # About Me page content
scripts/
└── update-posts-list.js  # Script to generate docs/posts/README.md
.gitignore
package.json
pnpm-lock.yaml
README.md                   # This file
```

## Prerequisites

Before you begin, ensure you have the following installed:

* [Node.js](https://nodejs.org/) (version specified in `.github/workflows/deploy.yml`, e.g., v20 or newer recommended)
* [pnpm](https://pnpm.io/installation) (version specified in `package.json` under `packageManager`, e.g., v10.11.0)

## 🚀 Local Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SOV710/sov710.github.io.git
   cd sov710.github.io
   ```
2. **Install dependencies:**

   ```bash
   pnpm install
   ```
3. **Update the posts list (manual trigger if needed):**
   The `update-posts` script is usually run before starting the dev server or building. You can also run it manually:

   ```bash
   pnpm update-posts
   ```

   This script reads your post files and updates `docs/posts/README.md`.
4. **Run the development server:**

   ```bash
   pnpm docs:dev
   ```

   This command will start a local development server. VuePress will automatically update the browser as you make changes to your content or configuration files. The `update-posts` script should ideally be part of your `docs:dev` or a pre-dev script if you want it fully automated on every start. The current GitHub Actions workflow runs it before building.
5. **Clean cache and run dev server (if needed):**

   ```bash
   pnpm docs:clean-dev
   ```
6. **Build for production:**
   To create a production-ready build of your site:

   ```bash
   pnpm docs:build
   ```

   The static files will be generated in the `docs/.vuepress/dist` directory.

## ✍️ Content Management

### Adding New Blog Posts (Daily/Weekly Summaries)

1. Create a new Markdown file (e.g., `d-YYMMDD.md` for daily, `w-YYMMDD.md` for weekly) in the `docs/posts/` directory.
2. Add frontmatter to your post. Example:

   ```yaml
   ---
   title: 每日总结喵 | Apr 10 # Or "25 Apr Xth 周总结"
   date: YYYY-MM-DD
   category:
     - 日总结 # Or "周结"
   tag:
     - SpecificTechTag1
     - SpecificTechTag2
   # Add other vuepress-theme-hope frontmatter options as needed
   # icon: ...
   # breadcrumb: ...
   ---

   # Your Post Title (can be same as frontmatter title)

   Your Markdown content here...
   ```
3. After adding or modifying posts, run `pnpm update-posts` to regenerate the `docs/posts/README.md` list.

### Adding Articles to "Intel手册中文翻译" Column

1. Create a new Markdown file in the `docs/columns/intel-manual-translate/` directory (e.g., `02-chapter-name.md`).
2. Add frontmatter. Example:

   ```yaml
   ---
   title: Intel手册第七章中文翻译：中断和异常处理
   date: YYYY-MM-DD
   # category: # Optional for column articles, or define a specific one
   # tag: # Optional
   order: 2 # Optional: for ordering within the column sidebar if not using file-based sorting
   icon: book-open # Example icon
   # Add other vuepress-theme-hope frontmatter options as needed
   ---

   # Your Article Title

   Your translation content here...
   ```

## ⚙️ Customization

* **Theme Configuration**: Most visual and functional aspects of the theme (navbar, sidebar, blog options, plugins) are configured in `docs/.vuepress/theme.ts`.
* **Site Configuration**: Global VuePress settings (like title, description, head elements, vite bundler options) are in `docs/.vuepress/config.js`.
* **Homepage**: The content for your homepage is in `docs/README.md`.
* **Friends Page**: Managed in `docs/friends.md`. Avatars for friends are stored in `docs/.vuepress/public/friends/`.

## 🛠️ Deployment

### GitHub Pages (Automated via GitHub Actions)

This repository is configured for automated deployment to GitHub Pages using the workflow defined in `.github/workflows/deploy.yml`.

**Prerequisites for Automated Deployment:**

1. **Repository Name**: This workflow is tailored for a repository named `SOV710.github.io` where `SOV710` is your GitHub username. If your repository has a different name (e.g., `my-blog`), the base path might need adjustment in `docs/.vuepress/config.js` (usually the `base` option, though `vuepress-theme-hope` often handles this well for GitHub Pages).
2. **GitHub Pages Settings**: In your `SOV710/sov710.github.io` repository settings on GitHub:
   * Go to **Settings** -> **Pages** (under "Code and automation").
   * Under "Build and deployment", ensure the **Source** is set to **"GitHub Actions"**.

**Deployment Process:**

1. **Push to `main`**: When changes are pushed to the `main` branch (or your configured default branch), the GitHub Actions workflow will automatically trigger.
2. **Workflow Steps** (as defined in `deploy.yml`):
   * Checks out the code.
   * Sets up Node.js and pnpm.
   * Installs dependencies (`pnpm install --frozen-lockfile`).
   * Runs your custom script to update posts (`pnpm update-posts`).
   * Builds the VuePress site (`pnpm run docs:build`). The output goes to `docs/.vuepress/dist`.
   * Configures GitHub Pages.
   * Uploads the build artifact from `docs/.vuepress/dist`.
   * Deploys the artifact to GitHub Pages.
3. You can monitor the workflow's progress in the **Actions** tab of your GitHub repository.
4. Once deployed, your site will be live at `https://SOV710.github.io/`.

### Manual Deployment / Other Platforms

If you wish to deploy your site manually or to a different platform (e.g., Netlify, Vercel, a custom server):

1. **Build the Site**: Run the build command locally:

   ```bash
   pnpm update-posts # Ensure content is up-to-date
   pnpm run docs:build
   ```
2. **Locate Build Output**: The static site files will be generated in the `docs/.vuepress/dist/` directory.
3. **Deploy**: Upload the contents of the `docs/.vuepress/dist/` directory to your chosen hosting provider. Most static site hosting platforms will have instructions for deploying a directory of static HTML, CSS, and JavaScript files.

   * **Netlify/Vercel**: Connect your GitHub repository, and they can often detect VuePress projects. Set the build command to `pnpm update-posts && pnpm run docs:build` (or separate commands if their UI allows) and the publish directory to `docs/.vuepress/dist`.
   * **Self-hosted (e.g., Nginx, Apache)**: Configure your web server to serve the files from the `docs/.vuepress/dist` directory.

## 💬 Giscus Comment System (Setup Guide)

This blog is set up to use [Giscus](https://giscus.app/) for comments. Giscus uses GitHub Discussions as a backend for comments.

**Configuration Steps (after your site is deployed and live):**

1. **Create a Public GitHub Repository**: If you don't already have one, create a new **public** GitHub repository that will store the comments (e.g., `my-blog-comments`). This repository does *not* need to contain any code; Giscus will use its "Discussions" feature.
2. **Enable Discussions**: In your newly created comments repository, go to **Settings** and ensure the **Discussions** feature is enabled (under "Features").
3. **Install Giscus GitHub App**: Visit [giscus.app](https://giscus.app/).

   * Scroll down to the "Configuration" section.
   * Enter your comments repository name (e.g., `SOV710/my-blog-comments`) in the "Repository" field.
   * Giscus will guide you to install its GitHub App and authorize it for the selected comments repository (or all repositories, if you choose).
4. **Configure Giscus on giscus.app**: On the [giscus.app](https://giscus.app/) page, after selecting your repository, you'll configure further options:

   * **Page ↔️ Discussions Mapping**: Choose how Giscus should map your blog pages to discussion threads. Common choices are:
     * `pathname`: Discussion title will be the page's pathname.
     * `url`: Discussion title will be the page's full URL.
     * `title`: Discussion title will be the page's HTML `<title>`.
     * `og:title`: Discussion title will be the page's OpenGraph title meta tag.
   * **Discussion Category**: Select a discussion category in your comments repository where Giscus will create new discussions for new blog posts. You might need to create a category like "Blog Comments" or "General" in your comments repository's Discussions tab first.
   * **Features**: Choose features like reactions, emitting metadata, etc.
   * **Theme**: Select a Giscus theme that matches your blog (or choose "Theme from `<meta>` tag" to let it adapt to your `vuepress-theme-hope` light/dark mode via a meta tag).
5. **Obtain Giscus Configuration Values**: Once configured on giscus.app, it will provide you with a set of `<script>` attributes. You need to extract these values:

   * `data-repo`
   * `data-repo-id`
   * `data-category`
   * `data-category-id`
   * `data-mapping`
   * `data-reactions-enabled`
   * `data-emit-metadata`
   * `data-theme` (or `data-light-theme` / `data-dark-theme`)
6. **Add Giscus Configuration to `vuepress-theme-hope`**:
   Open your `docs/.vuepress/theme.ts` file.
   Locate the `plugins` section. `vuepress-theme-hope` typically has a `comment` plugin option for integrating comment systems.

   ```typescript
   // docs/.vuepress/theme.ts
   // ... other imports and theme options ...

   export default hopeTheme({
     // ... other theme configurations ...

     plugins: {
       // ... other plugins like blog, copyCode, catalog, components, search, icon ...

       comment: {
         provider: "Giscus", // Specify Giscus as the provider
         repo: "YOUR_USERNAME/YOUR_COMMENTS_REPO_NAME", // e.g., SOV710/my-blog-comments
         repoId: "YOUR_REPO_ID",                     // Get this from giscus.app
         category: "YOUR_DISCUSSION_CATEGORY_NAME",  // e.g., General, Announcements
         categoryId: "YOUR_CATEGORY_ID",             // Get this from giscus.app
         mapping: "pathname",                      // Or your chosen mapping
         reactionsEnabled: true,                 // Or false
         inputPosition: "top",                   // Or "bottom"
         // theme: "light", // Or your preferred theme, or use lightTheme/darkTheme
         // lightTheme: "light",
         // darkTheme: "dark_dimmed",
         // lang: "zh-CN", // Optional: to set Giscus language
       },
     },

     // ... other theme configurations ...
   });
   ```

   * Replace the placeholder values (`YOUR_USERNAME/YOUR_COMMENTS_REPO_NAME`, `YOUR_REPO_ID`, etc.) with the actual values you obtained from giscus.app.
   * Refer to the [vuepress-theme-hope Comment Plugin documentation](https://theme-hope.vuejs.press/config/plugins/comment.html) for the most up-to-date and specific options for configuring Giscus within the theme.
7. **Commit and Deploy**: After adding the Giscus configuration to `theme.ts`, commit the changes and push them to your `main` branch. The GitHub Actions workflow will rebuild and redeploy your site. Giscus comments should then appear on your blog posts.

## 📜 Scripts

* **`pnpm update-posts`** (runs `node scripts/update-posts-list.js`):
  * This script automatically scans the `docs/posts/` directory for Markdown files.
  * It extracts frontmatter (title, date, category, tags) from each post.
  * It generates/updates the `docs/posts/README.md` file to create a structured list of all your blog posts, typically grouped by year or category.
  * It is run automatically during the GitHub Actions deployment workflow before the site build.
  * You should run it manually after adding new posts locally if you want to see the updated post list in your local development server immediately or before committing.

## 📄 License

This project is [MIT Licensed](./LICENSE) (You'll need to create a LICENSE file if you don't have one, a standard MIT license is common for such projects).

---

*This README was generated with assistance from an AI model. Please review and adapt it to perfectly fit your project.*
