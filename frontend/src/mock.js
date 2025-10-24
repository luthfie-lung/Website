// Mock data for Gothic Blackmetal Portfolio

export const portfolioData = {
  id: {
    hero: {
      name: "ARKAN SHADOW",
      title: "Pengembang Web Full Stack",
      subtitle: "Menciptakan pengalaman digital yang gelap dan kuat"
    },
    about: {
      title: "Tentang Saya",
      description: "Seorang pengembang web dengan passion untuk menciptakan aplikasi yang kuat dan elegan. Terinspirasi oleh estetika gothic dan kekuatan metal, saya menghadirkan solusi digital yang unik dan berkesan.",
      stats: [
        { label: "Tahun Pengalaman", value: "5+" },
        { label: "Proyek Selesai", value: "50+" },
        { label: "Klien Puas", value: "30+" }
      ]
    },
    skills: {
      title: "Keahlian Teknis",
      categories: [
        {
          name: "Frontend",
          items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Next.js"]
        },
        {
          name: "Backend",
          items: ["Node.js", "Python", "FastAPI", "Express", "PostgreSQL"]
        },
        {
          name: "Tools & DevOps",
          items: ["Git", "Docker", "AWS", "MongoDB", "Redis"]
        },
        {
          name: "Design",
          items: ["Figma", "Photoshop", "UI/UX Design", "Responsive Design"]
        }
      ]
    },
    projects: {
      title: "Proyek Terpilih",
      items: [
        {
          id: 1,
          title: "Dark Commerce Platform",
          description: "Platform e-commerce dengan tema gothic untuk merchandise band metal",
          tags: ["React", "Node.js", "MongoDB"],
          image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
          link: "#"
        },
        {
          id: 2,
          title: "Shadow CMS",
          description: "Sistem manajemen konten untuk label rekaman underground",
          tags: ["FastAPI", "React", "PostgreSQL"],
          image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
          link: "#"
        },
        {
          id: 3,
          title: "Metal Events Hub",
          description: "Platform agregasi acara konser dan festival metal",
          tags: ["Next.js", "TypeScript", "Prisma"],
          image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop",
          link: "#"
        },
        {
          id: 4,
          title: "Void Music Player",
          description: "Music player dengan visualizer gelap dan intens",
          tags: ["React", "Web Audio API", "Canvas"],
          image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
          link: "#"
        },
        {
          id: 5,
          title: "Gothic Portfolio Template",
          description: "Template portfolio dengan estetika blackmetal",
          tags: ["React", "Tailwind", "Framer Motion"],
          image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
          link: "#"
        },
        {
          id: 6,
          title: "Darkness Blog Engine",
          description: "Engine blog minimalis dengan tema gelap",
          tags: ["Python", "FastAPI", "MongoDB"],
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
          link: "#"
        }
      ]
    },
    notes: {
      title: "Catatan & Pemikiran",
      items: [
        {
          id: 1,
          title: "Filosofi Dark Design dalam Pengembangan Web",
          excerpt: "Mengeksplorasi bagaimana estetika gelap dapat menciptakan pengalaman pengguna yang mendalam dan berkesan...",
          content: "Dark design bukan hanya tentang warna hitam. Ini tentang menciptakan kontras yang kuat, hierarki visual yang jelas, dan pengalaman yang immersive. Dalam artikel ini, saya membahas prinsip-prinsip utama dark design dan bagaimana menerapkannya dalam proyek web modern.",
          date: "2025-01-15",
          tags: ["Design", "UI/UX", "Dark Theme"],
          author: "Arkan Shadow",
          readTime: "5 menit"
        },
        {
          id: 2,
          title: "Membangun API dengan FastAPI: Panduan Lengkap",
          excerpt: "FastAPI adalah framework Python modern yang powerful untuk membangun API. Mari kita eksplor fitur-fiturnya...",
          content: "FastAPI menawarkan performa tinggi, validasi otomatis, dan dokumentasi interaktif out-of-the-box. Artikel ini membahas setup project, routing, validation dengan Pydantic, dan best practices.",
          date: "2025-01-10",
          tags: ["Python", "FastAPI", "Backend"],
          author: "Arkan Shadow",
          readTime: "8 menit"
        },
        {
          id: 3,
          title: "React Hooks: useState dan useEffect Explained",
          excerpt: "Memahami dua hooks fundamental dalam React untuk state management dan side effects...",
          content: "Hooks merevolusi cara kita menulis komponen React. useState memungkinkan functional components memiliki state, sementara useEffect menangani side effects. Mari kita pahami dengan contoh praktis.",
          date: "2025-01-05",
          tags: ["React", "JavaScript", "Frontend"],
          author: "Arkan Shadow",
          readTime: "6 menit"
        },
        {
          id: 4,
          title: "Optimasi Performa Web: Teknik & Tools",
          excerpt: "Tips dan trik untuk meningkatkan performa website Anda dengan teknik modern...",
          content: "Performa web adalah kunci user experience. Dari lazy loading, code splitting, hingga optimasi gambar - semua berperan penting. Artikel ini membahas teknik praktis yang bisa langsung diterapkan.",
          date: "2024-12-28",
          tags: ["Performance", "Web Development", "Optimization"],
          author: "Arkan Shadow",
          readTime: "7 menit"
        },
        {
          id: 5,
          title: "MongoDB vs PostgreSQL: Kapan Menggunakan Apa?",
          excerpt: "Perbandingan mendalam antara database NoSQL dan relational untuk memilih yang tepat...",
          content: "Memilih database yang tepat adalah keputusan arsitektural penting. MongoDB menawarkan fleksibilitas schema, PostgreSQL memberikan ACID compliance kuat. Mari kita analisis use case masing-masing.",
          date: "2024-12-20",
          tags: ["Database", "MongoDB", "PostgreSQL"],
          author: "Arkan Shadow",
          readTime: "10 menit"
        },
        {
          id: 6,
          title: "Authentication & Authorization: JWT Best Practices",
          excerpt: "Implementasi keamanan authentication menggunakan JSON Web Tokens dengan benar...",
          content: "JWT adalah standar industri untuk authentication. Namun, implementasi yang salah bisa menimbulkan celah keamanan. Artikel ini membahas best practices: refresh tokens, secure storage, dan token expiration.",
          date: "2024-12-15",
          tags: ["Security", "JWT", "Authentication"],
          author: "Arkan Shadow",
          readTime: "9 menit"
        }
      ]
    },
    contact: {
      title: "Hubungi Saya",
      description: "Tertarik untuk berkolaborasi atau punya proyek menarik? Mari kita wujudkan!",
      email: "arkan.shadow@darkweb.dev",
      socials: [
        { name: "GitHub", url: "https://github.com", icon: "Github" },
        { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
        { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
        { name: "Instagram", url: "https://instagram.com", icon: "Instagram" }
      ]
    }
  },
  en: {
    hero: {
      name: "ARKAN SHADOW",
      title: "Full Stack Web Developer",
      subtitle: "Crafting dark and powerful digital experiences"
    },
    about: {
      title: "About Me",
      description: "A web developer with a passion for creating powerful and elegant applications. Inspired by gothic aesthetics and the power of metal, I deliver unique and memorable digital solutions.",
      stats: [
        { label: "Years Experience", value: "5+" },
        { label: "Projects Completed", value: "50+" },
        { label: "Happy Clients", value: "30+" }
      ]
    },
    skills: {
      title: "Technical Skills",
      categories: [
        {
          name: "Frontend",
          items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Next.js"]
        },
        {
          name: "Backend",
          items: ["Node.js", "Python", "FastAPI", "Express", "PostgreSQL"]
        },
        {
          name: "Tools & DevOps",
          items: ["Git", "Docker", "AWS", "MongoDB", "Redis"]
        },
        {
          name: "Design",
          items: ["Figma", "Photoshop", "UI/UX Design", "Responsive Design"]
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          id: 1,
          title: "Dark Commerce Platform",
          description: "Gothic-themed e-commerce platform for metal band merchandise",
          tags: ["React", "Node.js", "MongoDB"],
          image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
          link: "#"
        },
        {
          id: 2,
          title: "Shadow CMS",
          description: "Content management system for underground record labels",
          tags: ["FastAPI", "React", "PostgreSQL"],
          image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
          link: "#"
        },
        {
          id: 3,
          title: "Metal Events Hub",
          description: "Aggregation platform for metal concerts and festivals",
          tags: ["Next.js", "TypeScript", "Prisma"],
          image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop",
          link: "#"
        },
        {
          id: 4,
          title: "Void Music Player",
          description: "Music player with dark and intense visualizer",
          tags: ["React", "Web Audio API", "Canvas"],
          image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
          link: "#"
        },
        {
          id: 5,
          title: "Gothic Portfolio Template",
          description: "Portfolio template with blackmetal aesthetics",
          tags: ["React", "Tailwind", "Framer Motion"],
          image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
          link: "#"
        },
        {
          id: 6,
          title: "Darkness Blog Engine",
          description: "Minimalist blog engine with dark theme",
          tags: ["Python", "FastAPI", "MongoDB"],
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
          link: "#"
        }
      ]
    },
    notes: {
      title: "Notes & Thoughts",
      items: [
        {
          id: 1,
          title: "Philosophy of Dark Design in Web Development",
          excerpt: "Exploring how dark aesthetics can create immersive and memorable user experiences...",
          content: "Dark design is not just about black colors. It's about creating strong contrast, clear visual hierarchy, and immersive experiences. In this article, I discuss the main principles of dark design and how to apply them in modern web projects.",
          date: "2025-01-15",
          tags: ["Design", "UI/UX", "Dark Theme"],
          author: "Arkan Shadow",
          readTime: "5 min read"
        },
        {
          id: 2,
          title: "Building APIs with FastAPI: Complete Guide",
          excerpt: "FastAPI is a modern, powerful Python framework for building APIs. Let's explore its features...",
          content: "FastAPI offers high performance, automatic validation, and interactive documentation out-of-the-box. This article covers project setup, routing, validation with Pydantic, and best practices.",
          date: "2025-01-10",
          tags: ["Python", "FastAPI", "Backend"],
          author: "Arkan Shadow",
          readTime: "8 min read"
        },
        {
          id: 3,
          title: "React Hooks: useState and useEffect Explained",
          excerpt: "Understanding two fundamental hooks in React for state management and side effects...",
          content: "Hooks revolutionized how we write React components. useState allows functional components to have state, while useEffect handles side effects. Let's understand with practical examples.",
          date: "2025-01-05",
          tags: ["React", "JavaScript", "Frontend"],
          author: "Arkan Shadow",
          readTime: "6 min read"
        },
        {
          id: 4,
          title: "Web Performance Optimization: Techniques & Tools",
          excerpt: "Tips and tricks to improve your website performance with modern techniques...",
          content: "Web performance is key to user experience. From lazy loading, code splitting, to image optimization - everything plays an important role. This article discusses practical techniques you can apply immediately.",
          date: "2024-12-28",
          tags: ["Performance", "Web Development", "Optimization"],
          author: "Arkan Shadow",
          readTime: "7 min read"
        },
        {
          id: 5,
          title: "MongoDB vs PostgreSQL: When to Use What?",
          excerpt: "In-depth comparison between NoSQL and relational databases to choose the right one...",
          content: "Choosing the right database is an important architectural decision. MongoDB offers schema flexibility, PostgreSQL provides strong ACID compliance. Let's analyze each use case.",
          date: "2024-12-20",
          tags: ["Database", "MongoDB", "PostgreSQL"],
          author: "Arkan Shadow",
          readTime: "10 min read"
        },
        {
          id: 6,
          title: "Authentication & Authorization: JWT Best Practices",
          excerpt: "Implementing authentication security using JSON Web Tokens correctly...",
          content: "JWT is the industry standard for authentication. However, incorrect implementation can create security vulnerabilities. This article discusses best practices: refresh tokens, secure storage, and token expiration.",
          date: "2024-12-15",
          tags: ["Security", "JWT", "Authentication"],
          author: "Arkan Shadow",
          readTime: "9 min read"
        }
      ]
    },
    contact: {
      title: "Contact Me",
      description: "Interested in collaboration or have an exciting project? Let's make it happen!",
      email: "arkan.shadow@darkweb.dev",
      socials: [
        { name: "GitHub", url: "https://github.com", icon: "Github" },
        { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
        { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
        { name: "Instagram", url: "https://instagram.com", icon: "Instagram" }
      ]
    }
  }
};

export const mockUser = {
  email: "admin@darkweb.dev",
  password: "admin123",
  name: "Arkan Shadow",
  role: "admin"
};