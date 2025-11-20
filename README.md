# 📚 UTS - Pemrograman Web Mobile (PMB)
## Personal Website: Hobby & Comic Collection

---

### 👤 Student Information
- **Nama**: Muhammad Maulana Firdaussyah
- **NIM**: 233210013
- **Program**: Sistem Informasi Akuntansi (D3)

### 📖 Course Details
- **Mata Kuliah**: Pemrograman Web Mobile SIA Ganjil 2025
- **Dosen Pengampu**: Basuki Heri W - SA1919G
- **Tipe Tugas**: UTS (Ujian Tengah Semester) Project
- **Deadline**: Jumat, 21 November 2025 pukul 13:00 WIB

---

---

## 📋 Assignment Brief

This project is an UTS assignment for the **Web Mobile Programming** course. The requirement is to create a beautiful Bootstrap-based website based on your personal hobbies.

**Key Requirements:**
- ✅ Bootstrap-based responsive web design
- ✅ Theme based on personal hobbies/interests
- ✅ Include hobby-related photos (personal photos preferred for authenticity)
- ✅ AI usage is allowed
- ✅ **Design quality is the primary evaluation criteria** (coding is secondary since AI was used)
- ✅ Can be hosted or submitted as complete files/screenshots
- ✅ If file size is too large, provide comprehensive report with screenshots


---

## 🌐 Demo & Links

A modern, responsive portfolio website built with Bootstrap 5 featuring a comic collection showcase, project portfolio, and interactive parallax effects.

- **Live Demo**: [View Demo](https://maulana-tech.github.io/UTS-PMB/)
- **GitHub Repository**: [UTS Pemograman Mobile](https://github.com/maulana-tech/UTS-PMB.git)

## ✨ Features

### Core Sections
- **Home Page**: Hero section with featured projects and comic collection
- **About Me**: Personal bio with experience overview, tech skills marquee, and hobbies gallery
- **Projects**: Showcase of completed projects (10+ projects delivered)
- **Comics**: Curated manga/manhwa collection with detailed reviews
  - Blue Lock - Sports Drama
  - Naruto - Adventure/Fantasy
  - Jujutsu Kaisen - Action/Supernatural
  - One Punch Man - Action/Comedy
  - Solo Leveling - Fantasy/Action
  - Lookism - School/Supernatural
  - Doom Breaker - Action/Fantasy
  - The Greatest Estate Developer - Fantasy/Comedy
- **Gallery**: Hiking photography collection (responsive grid)
- **Contact**: Get in touch section

### Technical Features
- **Parallax Scrolling**: 10+ parallax effect types with smooth animations
- **Responsive Design**: Mobile-first approach with Bootstrap grid
- **Performance Optimized**: Smooth scroll, lazy loading, optimized images
- **Modern UI/UX**: Premium card designs with hover effects, gradient overlays, backdrop filters, smooth AOS animations
- **Interactive Elements**: Carousel, modals, dropdowns, smooth navigation

## 🎨 Design System

### Color Palette
- **Primary**: `#C1FF72` (Modern Green)
- **Secondary**: `#1F2A2E` (Dark Charcoal)
- **Light Gray**: `#F4F8FA`
- **Accent**: Various gradients and overlays

### Typography
- **Font Family**: Manrope (Google Fonts)
- **Font Weights**: 200-800 for visual hierarchy

### Layout
- **Grid System**: Bootstrap 5.3.6 (12-column responsive)
- **Spacing**: Consistent 8px base unit system
- **Breakpoints**: xs, sm (576px), md (768px), lg (992px), xl (1200px), xxl (1400px)

## 📁 Project Structure

```
UTS - PMB-1.0.0/
├── index.html                 # Home page
├── html/
│   ├── about-us.html         # About section
│   ├── projects.html         # Projects portfolio
│   ├── comics.html           # Comics collection
│   ├── comic-*.html          # Comic detail pages (8 pages)
│   ├── gallery.html          # Hiking gallery
│   └── contact.html          # Contact form
├── assets/
│   ├── css/
│   │   ├── styles.css        # Main stylesheet
│   │   └── bootstrap.css     # Bootstrap 5.3.6
│   ├── js/
│   │   ├── custom.js         # Custom functionality
│   │   ├── parallax.js       # Parallax effects system
│   │   └── preloader.js      # Page preloader
│   ├── images/
│   │   ├── hiking/           # Hiking photos (hiking-1 to hiking-6)
│   │   ├── komik/            # Comic images (8 categories)
│   │   ├── portfolio/        # Project images
│   │   ├── backgrounds/      # Hero banners
│   │   ├── logos/            # Logo assets
│   │   └── svgs/             # Icon SVGs
│   ├── libs/
│   │   ├── bootstrap/        # Bootstrap framework
│   │   ├── jquery/           # jQuery
│   │   ├── owl.carousel/     # Carousel plugin
│   │   └── aos-master/       # Animate on Scroll
│   └── scss/
│       ├── styles.scss       # Main SCSS
│       ├── parallax.scss     # Parallax animations
│       └── [components]      # Modular styles
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code, Sublime)
- Node.js (optional, for SCSS compilation)

### Installation

1. **Clone the Repository**
```bash
git clone https://github.com/maulana-tech/UTS-PMB.git.git
cd UTS - PMB
```

2. **Open Locally**
Open `index.html` in browser or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using VS Code Live Server
# Install extension and click "Go Live"
```

3. **Build SCSS (Optional)**
```bash
sass assets/scss/styles.scss assets/css/styles.css
```

## 📦 Dependencies

- **Bootstrap 5.3.6**: Frontend framework
- **jQuery**: DOM utilities
- **OWL Carousel**: Image slider
- **AOS**: Scroll animations
- **Iconify Icons**: SVG icons
- **Google Fonts**: Manrope typeface

## 🎯 Key Pages

| Page | Description | Features |
|------|-------------|----------|
| index.html | Home/Landing | Hero, featured comics, projects, hobbies |
| about-us.html | Personal Bio | Experience, skills, hobbies with parallax |
| projects.html | Portfolio | 10+ projects showcase |
| comics.html | Collection | 8 manga/manhwa with reviews |
| gallery.html | Photography | 16 hiking photos in grid |
| contact.html | Contact | Get in touch form |

## 🎨 Parallax Effects

10+ interactive parallax effects included:
- **parallax-card**: 3D card flip
- **parallax-image**: Image zoom
- **parallax-text**: Text reveal
- **parallax-depth**: 3D depth effect
- **parallax-zoom**: Scale animation
- And more...

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 991px
- **Desktop**: 992px - 1199px
- **Large Desktop**: 1200px+

Fully responsive across all devices.

## 🛠️ Customization

### Change Primary Color
Edit `/assets/css/styles.css` and update `#0d6cf0` to your color.

### Add New Projects
1. Duplicate project card in `projects.html`
2. Add images to `/assets/images/portfolio/`
3. Update title and description

### Add New Comics
1. Create `html/comic-{title}.html`
2. Use existing comic page as template
3. Update images, title, description, links
4. Add to `comics.html` grid

## 📄 License

- **Design & Code**: Personal portfolio use
- **Bootstrap**: MIT License
- **Third-party Libraries**: Respective licenses
- **Images**: Original photography and comic references

## 👨‍💻 Author

**Muhammad Maulana Firdaussyah**
- NIM: 233210013
- D3 Accounting Information Systems - UTDI
- Fullstack Web Developer (1.5+ years)
- Email: developerlana0@gmail.com
- Instagram: [@lana.dev_](https://instagram.com/lana.dev_)
- GitHub: [@maulana-tech](https://github.com/maulana-tech)

## 🙏 Acknowledgments

- **Bootstrap Team**: Amazing framework
- **WrapPixel**: Design inspiration
- **Vercel**: Hosting platform
- **GDSC & GDG**: Community support

## 📞 Support & Contact

Questions or collaboration? Reach out:
- Email: developerlana0@gmail.com
- Instagram: [@lana.dev_](https://instagram.com/lana.dev_)

---

**Version**: 1.0.0  
**Last Updated**: November 2025  
**Status**: Active Development  
**Built with**: Bootstrap 5 • React Ready • Performance Optimized
