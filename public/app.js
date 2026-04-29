// API Base URL
const API_URL = window.location.origin + "/api";

// ===== Helper Functions =====
const formatDate = (dateString) => {
  if (!dateString) return "Present";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};

const showMessage = (element, message, type) => {
  element.textContent = message;
  element.className = `form-message ${type}`;
  setTimeout(() => {
    element.className = "form-message";
    element.textContent = "";
  }, 5000);
};

// ===== Fetch Data =====
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`);
    if (!response.ok) throw new Error("Failed to fetch");
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return [];
  }
};

// ===== Render Hero Section =====
const renderHero = async () => {
  const users = await fetchData("users");
  const user = users[0];
  if (!user) return;

  document.getElementById("heroName").textContent = user.fullName;
  document.getElementById("heroTitle").textContent = user.jobTitle || "Full Stack Developer";
  document.getElementById("heroBio").textContent =
    user.bio || "Passionate developer creating amazing digital experiences.";
  document.querySelector("#heroLocation span").textContent = user.location || "Remote";
  document.getElementById("contactLocation").textContent = user.location || "Remote";

  // Social links
  const socialContainer = document.getElementById("heroSocial");
  const footerSocial = document.getElementById("footerSocial");
  const socials = [
    { key: "github", icon: "fab fa-github" },
    { key: "linkedin", icon: "fab fa-linkedin-in" },
    { key: "twitter", icon: "fab fa-twitter" },
    { key: "website", icon: "fas fa-globe" },
  ];

  socials.forEach((s) => {
    if (user[s.key]) {
      const a = document.createElement("a");
      a.href = user[s.key];
      a.target = "_blank";
      a.innerHTML = `<i class="${s.icon}"></i>`;
      socialContainer.appendChild(a);

      const fa = a.cloneNode(true);
      footerSocial.appendChild(fa);
    }
  });
};

// ===== Render Experience =====
const renderExperience = async () => {
  const experiences = await fetchData("experiences");
  const container = document.getElementById("experienceTimeline");

  if (experiences.length === 0) {
    container.innerHTML = '<div class="loading">No experiences found.</div>';
    return;
  }

  container.innerHTML = "";
  experiences.forEach((exp, index) => {
    const item = document.createElement("div");
    item.className = "experience-item";
    item.innerHTML = `
      <div class="experience-dot"></div>
      <div class="experience-content">
        <span class="experience-date">${formatDate(exp.startDate)} - ${formatDate(exp.endDate)}</span>
        <h3 class="experience-role">${exp.role}</h3>
        <p class="experience-company">${exp.company}</p>
        ${exp.location ? `<p class="experience-location"><i class="fas fa-map-marker-alt"></i> ${exp.location}</p>` : ""}
        <p class="experience-desc">${exp.description || ""}</p>
      </div>
    `;
    container.appendChild(item);
  });
};

// ===== Render Projects =====
const renderProjects = async () => {
  const projects = await fetchData("projects");
  const container = document.getElementById("projectsGrid");

  if (projects.length === 0) {
    container.innerHTML = '<div class="loading">No projects found.</div>';
    return;
  }

  container.innerHTML = "";
  projects.forEach((project) => {
    const techs = Array.isArray(project.technologies) ? project.technologies : [];
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-image">
        ${project.imageUrl ? `<img src="${project.imageUrl}" alt="${project.title}" onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\\'fas fa-code\\'></i>'">` : '<i class="fas fa-code"></i>'}
      </div>
      <div class="project-content">
        <span class="project-category">${project.category || "Project"}</span>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tech">
          ${techs.map((t) => `<span>${t}</span>`).join("")}
        </div>
        <div class="project-links">
          ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank"><i class="fas fa-external-link-alt"></i> Live</a>` : ""}
          ${project.repoUrl ? `<a href="${project.repoUrl}" target="_blank"><i class="fab fa-github"></i> Code</a>` : ""}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
};

// ===== Render Skills =====
const renderSkills = async () => {
  const skills = await fetchData("skills");
  const container = document.getElementById("skillsContainer");

  if (skills.length === 0) {
    container.innerHTML = '<div class="loading">No skills found.</div>';
    return;
  }

  // Group by category
  const categories = {};
  skills.forEach((skill) => {
    if (!categories[skill.category]) categories[skill.category] = [];
    categories[skill.category].push(skill);
  });

  const categoryIcons = {
    frontend: "fa-desktop",
    backend: "fa-server",
    database: "fa-database",
    devops: "fa-cloud",
    tools: "fa-tools",
    soft: "fa-users",
  };

  const categoryNames = {
    frontend: "Frontend Development",
    backend: "Backend Development",
    database: "Database",
    devops: "DevOps & Cloud",
    tools: "Tools & Platforms",
    soft: "Soft Skills",
  };

  container.innerHTML = "";
  Object.entries(categories).forEach(([cat, catSkills]) => {
    const card = document.createElement("div");
    card.className = "skill-category";
    card.innerHTML = `
      <h3 class="skill-category-title">
        <i class="fas ${categoryIcons[cat] || "fa-code"}"></i>
        ${categoryNames[cat] || cat}
      </h3>
      ${catSkills
        .map(
          (skill) => `
        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">${skill.icon || ""} ${skill.name}</span>
            <span class="skill-percent">${skill.proficiency || 0}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" style="width: 0%" data-width="${skill.proficiency || 0}%"></div>
          </div>
        </div>
      `
        )
        .join("")}
    `;
    container.appendChild(card);
  });

  // Animate progress bars
  setTimeout(() => {
    document.querySelectorAll(".skill-progress").forEach((bar) => {
      bar.style.width = bar.dataset.width;
    });
  }, 300);
};

// ===== Render Testimonials =====
const renderTestimonials = async () => {
  const testimonials = await fetchData("testimonials");
  const container = document.getElementById("testimonialsGrid");

  if (testimonials.length === 0) {
    container.innerHTML = '<div class="loading">No testimonials found.</div>';
    return;
  }

  container.innerHTML = "";
  testimonials.forEach((t) => {
    const initials = t.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

    const card = document.createElement("div");
    card.className = "testimonial-card";
    card.innerHTML = `
      <div class="testimonial-rating">${"★".repeat(t.rating || 5)}${"☆".repeat(5 - (t.rating || 5))}</div>
      <p class="testimonial-text">${t.message}</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">
          ${t.imageUrl ? `<img src="${t.imageUrl}" alt="${t.name}" onerror="this.style.display='none'; this.parentElement.textContent='${initials}'">` : initials}
        </div>
        <div class="testimonial-info">
          <h4>${t.name}</h4>
          <p>${t.role || ""}${t.company ? ` at ${t.company}` : ""}</p>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
};

// ===== Contact Form =====
const handleContactForm = () => {
  const form = document.getElementById("contactForm");
  const messageEl = document.getElementById("formMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      content: document.getElementById("content").value,
    };

    try {
      const response = await fetch(`${API_URL}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      showMessage(messageEl, "Message sent successfully! I'll get back to you soon.", "success");
      form.reset();
    } catch (error) {
      showMessage(messageEl, "Failed to send message. Please try again.", "error");
    }
  });
};

// ===== Mobile Navigation =====
const initMobileNav = () => {
  const toggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const icon = toggle.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      const icon = toggle.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    });
  });
};

// ===== Active Nav Link on Scroll =====
const initActiveNav = () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
};

// ===== Navbar Scroll Effect =====
const initNavbarScroll = () => {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(15, 23, 42, 0.95)";
    } else {
      navbar.style.background = "rgba(15, 23, 42, 0.8)";
    }
  });
};

// ===== Set Year =====
const setYear = () => {
  document.getElementById("year").textContent = new Date().getFullYear();
};

// ===== Initialize =====
document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderExperience();
  renderProjects();
  renderSkills();
  renderTestimonials();
  handleContactForm();
  initMobileNav();
  initActiveNav();
  initNavbarScroll();
  setYear();
});

