## Website Files for psingh.co.uk

This repository contains the static HTML files, CSS, and JavaScript for the `psingh.co.uk` website. The site is designed to be fully responsive and ready for static hosting.

### 📁 File Structure

```
/
├── index.html          (Redirects to startup.html)
├── startup.html        (Startup dashboard)
├── crm.html            (CRM dashboard)
├── shoppingtrends.html (Shopping Trends dashboard)
├── about.html          (About page)
├── css/
│   └── styles.css
└── js/
    └── main.js
```

### 🚀 Getting Started

1. **Clone or Download:** Get the files from this repository.
2. **Static Hosting:** Upload the entire folder to a static hosting service (e.g., GitHub Pages, Netlify, Vercel). The `index.html` file will automatically redirect visitors to the `startup.html` page.

### 📝 How to Update Content

#### 1. Power BI Dashboard URLs

To change the embedded dashboards, open the relevant HTML file (`startup.html`, `crm.html`, or `shoppingtrends.html`) and find the `<iframe>` tag.

- **Locate:** Look for the `<iframe ...>` element inside the `<div class="aspect-video">` container.
- **Update:** Replace the `src="..."` attribute with your new Power BI "Publish to Web" URL.

#### 2. Page Content & Introductions

The descriptive text at the top of each dashboard page is located within a `<section>` tag just before the dashboard embed.

- **Find:** Look for the `<section class="text-center mx-auto max-w-4xl p-6">` block.
- **Edit:** Modify the headings and paragraphs within this section as needed.

#### 3. DAX Code and Explanations

The DAX documentation is in a collapsible accordion section.

- **Find:** Scroll to the `<section id="dax-measures" ...>` section.
- **Add/Remove Measures:**
  - To add a new measure, copy one of the existing `<div class="border-b border-gray-200">` blocks.
  - Change the `<h3>` heading to the new measure name.
  - Update the `<pre><code>` block with the new DAX expression.
  - Write a new plain-English explanation in the `<p>` tag.
  - To remove a measure, simply delete its corresponding `<div>` block.

#### 4. About Page Content

The About page content is plain HTML.

- **Find:** Open `about.html` and look for the `<main>` section.