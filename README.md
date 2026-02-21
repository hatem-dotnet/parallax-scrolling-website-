# 🌙 Parallax Scrolling Website

A visually immersive parallax scrolling website built with pure HTML, CSS, and Vanilla JavaScript — no frameworks, no libraries.

---

## ✨ Features

- 🎞️ Multi-layer parallax effect with independent image movement on scroll
- 🌅 Dynamic background color transition triggered by scroll position
- 📌 Fixed responsive header with smooth hover states
- 🎯 Layered image depth using z-index management
- 💡 Clean, organized, and bug-free code structure

---

## 🛠️ Built With

| Technology | Usage |
|------------|-------|
| HTML5 | Page structure & semantic markup |
| CSS3 | Styling, layout, transitions |
| Vanilla JS | Scroll-based parallax logic |

---

## 📁 Project Structure

```
parallax-scrolling-website/
│
├── index.html       # Main HTML structure
├── style.css        # All styles and layout
├── index.js         # Parallax scroll logic
│
├── stars1.webp
├── moon2.webp
├── mountains3.webp
├── mountains4.webp
├── river5.webp
├── boat6.webp
└── mountains7.webp
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/hatem-dotnet/parallax-scrolling-website-.git
```

### 2. Open the project
```bash
cd parallax-scrolling-website
```

### 3. Run it
Just open `index.html` in your browser — no installations needed!

---

## 🎬 How It Works

As the user scrolls down the page, each image layer moves at a **different speed** using `window.onscroll` and inline style manipulation via JavaScript.

```js
window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + "px";
    moon.style.top = value * 4 + "px";
    // ... more layers
};
```

This creates the **depth illusion** that makes the scene feel 3D and alive.

---

## 📸 Preview

> Add a screenshot or screen recording of your site here for best results!

---

## 👨‍💻 Author

**Hatem** — [@hatem-dotnet](https://github.com/hatem-dotnet)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
