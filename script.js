const CREDITS = [
  { year: "2025", date: "2025", title: "SAE Institute Amsterdam", role: "Study programme, work in progress", venue: "Amsterdam, NL", url: "#work" },
  { year: "2024", date: "2024", title: "“Inside In in”", role: "Album & shoot production, w/ Brian Trahan", venue: "Funkhaus, Berlin", url: "#work" },
  { year: "2023", date: "2023", title: "‘BROOD’", role: "Performer — Gaweda & Kulbokaite", venue: "Centre Pompidou, Paris", url: "#work" },
  { year: "2023", date: "2023", title: "‘Herr Puntila und sein Knecht Matti’", role: "Choir — dir. Christina Tscharyiski", venue: "Berliner Ensemble, Berlin", url: "#work" },
  { year: "2023", date: "2023", title: "‘The Voice of Germany’", role: "Season 13", venue: "Television, Germany", url: "#work" },
  { year: "2023", date: "2023", title: "‘All things underdog…’", role: "Performer — Monica Mirabiles", venue: "HAU Hebbel am Ufer, Berlin", url: "#work" },
  { year: "2023", date: "2023", title: "‘SULK V’", role: "Performer — Gaweda & Kulbokaite", venue: "Kunsthalle Bremerhaven", url: "#work" },
  { year: "2022", date: "2022", title: "’Songs of Attunement‘", role: "Performer — Colin Self", venue: "Trauma Bar und Kino, Berlin", url: "#work" },
  { year: "2022", date: "2022", title: "‘G0L3M’", role: "Co-author, performer — w/ Thilo Garus", venue: "HOSEK Contemporary, Berlin", url: "#work" },
  { year: "2022", date: "2022", title: "‘Undomesticated Voices’", role: "Performer — Lara Damaso", venue: "Swiss Institute, Milan", url: "#work" },
  { year: "2022", date: "2022", title: "‘Such as — You, Kind of’", role: "2-channel video — Helene Kuemmer", venue: "HKB Hamburg", url: "#work" },
  { year: "2021", date: "2021", title: "‘Lalia’", role: "Vocal role — Gaweda & Kulbokaite", venue: "Swiss Performing Awards winner", url: "#work" },
  { year: "2021", date: "2021", title: "‘SULK IV’", role: "Performer — Gaweda & Kulbokaite", venue: "Kunstverein Hamburg", url: "#work" },
  { year: "2017", date: "2017", title: "‘Das Geheimnis der Irma Vep’", role: "Assistant director — Jan Bolender", venue: "Vaganten Bühne, Berlin", url: "#work" },
  { year: "2015", date: "2015", title: "‘Wieszcze Niespokojne’", role: "Collective work, performer", venue: "Malta Festival · Stary Teatr, Kraków", url: "#work" },
  { year: "2014", date: "2014", title: "‘Barocco’", role: "Performer — Anna Godowska", venue: "Lublin Dance Theatre", url: "#work" },
  { year: "2014", date: "2014", title: "‘Osmosis’", role: "Performer — Manon Parent", venue: "Zamek Culture Centre, Poznań", url: "#work" },
  { year: "2013", date: "2013", title: "‘Requiemachine’", role: "Choir — Marta Górnicka", venue: "Théâtre National de Strasbourg", url: "#work" },
  { year: "2012", date: "2012", title: "‘Magnificat’", role: "Choir — Marta Górnicka", venue: "Toured Zurich · Leipzig · Sarajevo · New Delhi", url: "#work" },
  { year: "2010", date: "2010", title: "‘This is the Chorus speaking’", role: "Choir — Marta Górnicka", venue: "Institute of Polish Theatre, Warsaw", url: "#work" },
  { year: "2009", date: "2009", title: "‘Szansa na Sukces’", role: "Contestant", venue: "TVP 2, Poland", url: "#work" }
];

function renderWorkList() {
  const container = document.getElementById("work-list");
  const order = [];
  const byYear = {};
  CREDITS.forEach(c => {
    if (!byYear[c.year]) { byYear[c.year] = []; order.push(c.year); }
    byYear[c.year].push(c);
  });

  const frag = document.createDocumentFragment();
  order.forEach(year => {
    const rows = byYear[year];

    const heading = document.createElement("div");
    heading.className = "year-heading reveal";
    heading.innerHTML =
      '<span class="year-num">' + year + '</span>' +
      '<span class="year-rule"></span>' +
      '<span class="year-count">' + rows.length + (rows.length === 1 ? " credit" : " credits") + '</span>';
    frag.appendChild(heading);

    rows.forEach(row => {
      const a = document.createElement("a");
      a.className = "work-row";
      a.href = row.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.innerHTML =
        '<span class="row-date">' + row.date + '</span>' +
        '<span class="row-title">' + row.title + '</span>' +
        '<span class="row-role">' + row.role + '</span>' +
        '<span class="row-venue">' + row.venue + '</span>' +
        '<span class="row-arrow">↗</span>';
      frag.appendChild(a);
    });
  });

  container.appendChild(frag);
}

function setUpScrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });
  targets.forEach(el => io.observe(el));
  setTimeout(() => targets.forEach(el => el.classList.add("is-visible")), 2200);
}

function setUpScrollProgress() {
  const bar = document.getElementById("progress-bar");
  const update = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const p = h > 0 ? Math.min(1, window.scrollY / h) : 0;
    bar.style.width = (p * 100).toFixed(2) + "%";
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function setUpHeroParallax() {
  const figure = document.getElementById("hero-figure");
  if (!figure || window.matchMedia("(pointer: coarse)").matches) return;
  window.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    figure.style.transform = "translate3d(" + x.toFixed(2) + "px," + y.toFixed(2) + "px,0)";
  }, { passive: true });
}

renderWorkList();
setUpScrollReveal();
setUpScrollProgress();
setUpHeroParallax();
