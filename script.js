/* ===================================================================
   ANURAG DAS MOHAPATRA — PORTFOLIO
   Vanilla JS: no build step required, just open index.html.
   =================================================================== */

(function () {
  "use strict";

  /* -----------------------------------------------------------------
     1. SOCIAL / CONTACT CONFIG
     Edit these URLs any time — every button on the page is generated
     from this one object.
  ----------------------------------------------------------------- */
  const SOCIALS = [
    {
      name: "GitHub",
      url: "https://github.com/Anurag-DM",
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.42.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>',
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anurag-das-mohapatra-3a1243344/",
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/AnuragDM/",
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.48 23.4c-.63.63-1.5.99-2.44.99-.9 0-1.75-.34-2.4-.96l-4.2-4.2a3.44 3.44 0 0 1-.97-2.4c0-.9.35-1.76.97-2.41l4.17-4.17 5.79 5.79a1 1 0 0 0 1.41-1.41l-5.79-5.79 3.35-3.35a3.4 3.4 0 0 1 4.81 0 3.4 3.4 0 0 1 0 4.81l-1.2 1.2a1 1 0 1 0 1.41 1.41l1.2-1.2a5.4 5.4 0 0 0 0-7.63 5.4 5.4 0 0 0-7.63 0L4.05 12.6a5.44 5.44 0 0 0 0 7.65l4.2 4.2a5.35 5.35 0 0 0 3.79 1.55c1.41 0 2.77-.55 3.79-1.55l1.55-1.55a1 1 0 1 0-1.41-1.41l-1.5 1.5Z"/></svg>',
    },
    {
      name: "Email",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=anuragadm78@gmail.com",
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm18.4 2H3.6L12 12.5 20.4 6ZM3 8.24V18h18V8.24l-8.4 6.52a1 1 0 0 1-1.2 0L3 8.24Z"/></svg>',
    },
  ];

  function buildSocialButtons(container, { withLabel = true } = {}) {
    if (!container) return;
    container.innerHTML = SOCIALS.map(
      (s) => `
      <a class="social-btn" href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.name}">
        ${s.icon}
        ${withLabel ? `<span>${s.name}</span>` : ""}
      </a>`
    ).join("");
  }

  buildSocialButtons(document.getElementById("heroSocial"));
  buildSocialButtons(document.getElementById("contactSocial"));

  /* -----------------------------------------------------------------
     2. NAV — scroll shadow, mobile toggle, active-link highlight
  ----------------------------------------------------------------- */
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const progressFill = document.getElementById("progressFill");

  navToggle?.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  navLinks?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );

  const sections = document.querySelectorAll("main .section, .hero");

  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle("is-scrolled", y > 8);

    // scroll progress
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    progressFill.style.width = `${docH > 0 ? (y / docH) * 100 : 0}%`;
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const navAnchors = document.querySelectorAll(".nav__links a");
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        navAnchors.forEach((a) => {
          a.style.color = a.getAttribute("href") === `#${id}` ? "var(--text)" : "";
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("main .section[id], .hero[id]").forEach((s) => sectionObserver.observe(s));

  /* -----------------------------------------------------------------
     3. REVEAL ON SCROLL
  ----------------------------------------------------------------- */
  const revealTargets = document.querySelectorAll(
    ".section__head, .about__para, .about__stats, .timeline__item, .project, .skill-group, .ach__card, .cert-list, .edu-list, .contact__inner"
  );
  revealTargets.forEach((el) => el.classList.add("reveal"));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealTargets.forEach((el) => revealObserver.observe(el));

  /* -----------------------------------------------------------------
     4. ANIMATED STAT COUNTERS
  ----------------------------------------------------------------- */
  const counters = document.querySelectorAll(".stat__num");
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const prefix = el.dataset.prefix || "";
        const suffix = el.dataset.suffix || "";
        const isFloat = String(target).includes(".");
        const duration = 1200;
        const start = performance.now();

        function tick(now) {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = target * eased;
          el.textContent = prefix + (isFloat ? val.toFixed(2) : Math.round(val)) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.6 }
  );
  counters.forEach((c) => counterObserver.observe(c));

  /* -----------------------------------------------------------------
     5. TRAFFIQ PROJECT VISUAL — animated routing graph (SVG)
  ----------------------------------------------------------------- */
  const vizHost = document.getElementById("trafficViz");
  if (vizHost) {
    const W = 400, H = 300;
    const nodeCount = 9;
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: 40 + Math.random() * (W - 80),
        y: 40 + Math.random() * (H - 80),
      });
    }
    // connect each node to its 2 nearest neighbours
    const edges = [];
    nodes.forEach((n, i) => {
      const dists = nodes
        .map((m, j) => ({ j, d: (m.x - n.x) ** 2 + (m.y - n.y) ** 2 }))
        .filter((d) => d.j !== i)
        .sort((a, b) => a.d - b.d)
        .slice(0, 2);
      dists.forEach((d) => {
        const key = [i, d.j].sort().join("-");
        if (!edges.find((e) => e.key === key)) edges.push({ key, a: i, b: d.j });
      });
    });

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("aria-hidden", "true");

    edges.forEach((e, idx) => {
      const n1 = nodes[e.a], n2 = nodes[e.b];
      const line = document.createElementNS(svgNS, "line");
      line.setAttribute("x1", n1.x);
      line.setAttribute("y1", n1.y);
      line.setAttribute("x2", n2.x);
      line.setAttribute("y2", n2.y);
      line.setAttribute("stroke", "#2A3348");
      line.setAttribute("stroke-width", "1");
      svg.appendChild(line);

      // traveling pulse dot along the edge
      const pulse = document.createElementNS(svgNS, "circle");
      pulse.setAttribute("r", "2.6");
      pulse.setAttribute("fill", idx % 2 === 0 ? "#4FD1C5" : "#F2B84B");
      const animateMotion = document.createElementNS(svgNS, "animateMotion");
      animateMotion.setAttribute(
        "path",
        `M${n1.x},${n1.y} L${n2.x},${n2.y}`
      );
      animateMotion.setAttribute("dur", `${2.5 + Math.random() * 2.5}s`);
      animateMotion.setAttribute("repeatCount", "indefinite");
      animateMotion.setAttribute("begin", `${Math.random() * 2}s`);
      pulse.appendChild(animateMotion);
      svg.appendChild(pulse);
    });

    nodes.forEach((n, i) => {
      const circle = document.createElementNS(svgNS, "circle");
      circle.setAttribute("cx", n.x);
      circle.setAttribute("cy", n.y);
      circle.setAttribute("r", i % 3 === 0 ? "5" : "3.2");
      circle.setAttribute("fill", "#0B0F17");
      circle.setAttribute("stroke", i % 3 === 0 ? "#F2B84B" : "#4FD1C5");
      circle.setAttribute("stroke-width", "1.6");
      svg.appendChild(circle);
    });

    vizHost.appendChild(svg);
  }

  /* -----------------------------------------------------------------
     6. FAINT BACKGROUND GRAPH (full-page canvas)
  ----------------------------------------------------------------- */
  const canvas = document.getElementById("graph-bg");
  const ctx = canvas.getContext("2d");
  let bgNodes = [];
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = document.documentElement.scrollHeight;
    const density = Math.min(60, Math.floor((w * h) / 90000));
    bgNodes = Array.from({ length: density }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const viewTop = window.scrollY - 200;
    const viewBottom = window.scrollY + window.innerHeight + 200;

    bgNodes.forEach((n) => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    });

    for (let i = 0; i < bgNodes.length; i++) {
      const a = bgNodes[i];
      if (a.y < viewTop || a.y > viewBottom) continue;
      for (let j = i + 1; j < bgNodes.length; j++) {
        const b = bgNodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.strokeStyle = `rgba(79, 209, 197, ${0.08 * (1 - dist / 140)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    bgNodes.forEach((n) => {
      if (n.y < viewTop || n.y > viewBottom) return;
      ctx.fillStyle = "rgba(79, 209, 197, 0.35)";
      ctx.beginPath();
      ctx.arc(n.x, n.y, 1.4, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    resize();
    window.addEventListener("resize", resize);
    requestAnimationFrame(draw);
  }

  /* -----------------------------------------------------------------
     7. MISC
  ----------------------------------------------------------------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
