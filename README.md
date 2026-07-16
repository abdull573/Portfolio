# Abdullah Satti - SQA Personal Profile Website

A professional, fully responsive, and accessible one-page portfolio website designed for Abdullah Satti, an aspiring Software Quality Assurance (SQA) Engineer.

## Purpose of the Website
This portfolio is tailored to showcase Abdullah Satti's core manual testing competencies, project experience, tools usage (like Jira), and academic background to hiring managers and QA recruiters. It demonstrates high-quality, bug-free front-end code with clean responsiveness, fast load times, and key accessibility (a11y) practices.

---

## File Structure & Purpose

- **[index.html](file:///c:/Users/Admin/Desktop/SQA_Personal_Profile/index.html)**: Defines the semantic layout of the single-page website. Built using accessible structure tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), structured headings hierarchy, and appropriate ARIA landmarks for screen-reader usability.
- **[style.css](file:///c:/Users/Admin/Desktop/SQA_Personal_Profile/style.css)**: Implements the visual styling using a professional Navy Blue, White, and Teal color palette. Contains layout grids/flexboxes, interactive hover transitions, responsive mobile queries, custom accessibility outlines, and responsive bounds to ensure no overlapping or horizontal scrolls.
- **[script.js](file:///c:/Users/Admin/Desktop/SQA_Personal_Profile/script.js)**: Adds dynamic interactivity, including an accessible slide-out hamburger navigation menu for mobile users, escape-key closures, and an `IntersectionObserver` that highlights navigation options based on scroll position.
- **[profile.png](file:///c:/Users/Admin/Desktop/SQA_Personal_Profile/profile.png)**: The professional photograph of Abdullah Satti.
- **[README.md](file:///c:/Users/Admin/Desktop/SQA_Personal_Profile/README.md)**: (This file) Documentation of the website structure and instructions for launching and editing the project.

---

## How to Open the Website

Since the site is built using vanilla HTML, CSS, and JavaScript, it has no build pipelines or dependency installations. 

### Method 1: Local Browser Load
1. Locate the project folder on your computer (`c:\Users\Admin\Desktop\SQA_Personal_Profile`).
2. Double-click the `index.html` file, or right-click it and choose **Open with** followed by your preferred web browser (e.g., Chrome, Edge, Firefox, Safari).

### Method 2: Live Server Extension (Recommended for Development)
If you are using **Visual Studio Code**:
1. Open the project folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Click the **Go Live** button at the bottom-right corner of the VS Code window to launch a local development server with auto-reload capabilities.

---

## How to Change the Personal Information

All information is in the human-readable HTML markup inside `index.html`.

1. Open `index.html` using a text editor (such as VS Code, Notepad++, or Sublime Text).
2. Use the search function (`Ctrl + F` or `Cmd + F`) to find the content you want to modify:
   - **Name**: Search for `Abdullah Satti` and replace it.
   - **Title**: Search for `Software Quality Assurance Intern` and edit the text.
   - **Location**: Search for `Islamabad, Pakistan` and edit.
   - **Skills**: Add or remove `<li>` elements inside `<ul class="skills-list">` tags.
   - **Projects**: Edit titles and descriptions inside the `<article class="project-card">` tags.
   - **Socials/Contact**: Update `href` attributes in the links under `id="contact"` (e.g., `href="mailto:..."`, `href="tel:..."`, `href="https://linkedin.com/in/..."`).
3. Save the file and reload your browser window.

---

## How to Replace the Profile Image

The website displays `profile.png` as your profile image. To swap it for a different photo:

1. Copy your new professional photograph (supported formats include `.jpg`, `.png`, or `.webp`) into the root directory of this project (`c:\Users\Admin\Desktop\SQA_Personal_Profile`).
2. Rename the new file to `profile.png` (overwriting the old one), or name it something like `new-profile-picture.jpg`.
3. If you changed the filename or format, open `index.html` in your text editor and locate the `<img>` element inside the `<div class="hero-image-container">` container (approx. line 61):
   ```html
   <img src="profile.png" alt="Professional profile photo of Abdullah Satti" class="hero-profile-img">
   ```
4. Replace `src="profile.png"` with your new photo's file name (e.g., `src="new-profile-picture.jpg"`).
5. Update the `alt` attribute text to describe your image for screen reader users.
6. Save the file and reload your web page. The styling rules in `style.css` will automatically crop the photo to a perfect responsive circle with the professional teal outline.
