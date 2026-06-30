(function () {
  var body = document.body;
  var toc = document.getElementById("toc");
  var search = document.getElementById("search");
  var level = document.getElementById("level");
  var theme = document.getElementById("theme");
  var expand = document.getElementById("expandAll");
  var collapse = document.getElementById("collapseAll");

  function qsa(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function slug(t) {
    return t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  function setTheme() {
    var isDark = localStorage.getItem("living-wiki-theme") === "dark";
    body.classList.toggle("dark", isDark);
  }

  function removeHighlights(node) {
    qsa(".highlight", node).forEach(function (h) {
      h.replaceWith(document.createTextNode(h.textContent));
    });
    node.normalize();
  }

  function markFirst(node, query) {
    if (!query) return;
    var walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null);
    var textNode;
    while ((textNode = walker.nextNode())) {
      var txt = textNode.nodeValue;
      var i = txt.toLowerCase().indexOf(query);
      if (i > -1 && textNode.parentNode) {
        var frag = document.createDocumentFragment();
        frag.appendChild(document.createTextNode(txt.slice(0, i)));
        var span = document.createElement("span");
        span.className = "highlight";
        span.textContent = txt.slice(i, i + query.length);
        frag.appendChild(span);
        frag.appendChild(document.createTextNode(txt.slice(i + query.length)));
        textNode.parentNode.replaceChild(frag, textNode);
        break;
      }
    }
  }

  function applyFilters() {
    var query = search ? search.value.trim().toLowerCase() : "";
    var lv = level ? level.value : "all";
    var sections = qsa("section[data-level]");
    sections.forEach(function (s) {
      removeHighlights(s);
      var text = s.textContent.toLowerCase();
      var levels = s.getAttribute("data-level") || "beginner intermediate advanced";
      var passLevel = lv === "all" || levels.indexOf(lv) > -1;
      var passText = !query || text.indexOf(query) > -1;
      s.classList.toggle("hidden", !(passLevel && passText));
      if (query && passLevel && passText) {
        markFirst(s, query);
      }
    });
  }

  function buildToc() {
    if (!toc) return;
    var headers = qsa("main h2");
    headers.forEach(function (h) {
      if (!h.id) h.id = slug(h.textContent);
      var a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent;
      
      // Add smooth scroll on click
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var target = document.getElementById(h.id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          // Update active state immediately
          setTimeout(activeToc, 100);
        }
      });
      
      toc.appendChild(a);
    });
  }

  function activeToc() {
    var links = qsa("#toc a");
    if (!links.length) return;
    var headers = links.map(function (l) {
      var id = l.getAttribute("href").slice(1);
      return document.getElementById(id);
    });
    var current = headers[0];
    headers.forEach(function (h) {
      if (h && h.getBoundingClientRect().top <= 140) current = h;
    });
    links.forEach(function (l) {
      l.classList.toggle("active", l.getAttribute("href") === "#" + current.id);
    });
  }

  function bindTracker() {
    qsa("input[data-track]").forEach(function (cb) {
      var key = "tracker:" + cb.getAttribute("data-track");
      cb.checked = localStorage.getItem(key) === "1";
      cb.addEventListener("change", function () {
        localStorage.setItem(key, cb.checked ? "1" : "0");
      });
    });
  }

  setTheme();
  buildToc();
  bindTracker();
  applyFilters();
  activeToc();

  if (theme) {
    theme.addEventListener("click", function () {
      var next = body.classList.contains("dark") ? "light" : "dark";
      localStorage.setItem("living-wiki-theme", next);
      setTheme();
    });
  }

  if (search) search.addEventListener("input", applyFilters);
  if (level) level.addEventListener("change", applyFilters);

  if (expand) {
    expand.addEventListener("click", function () {
      qsa("details").forEach(function (d) { d.open = true; });
    });
  }

  if (collapse) {
    collapse.addEventListener("click", function () {
      qsa("details").forEach(function (d) { d.open = false; });
    });
  }

  window.addEventListener("scroll", activeToc, { passive: true });

  // Mark external links with visual indicator
  (function() {
    var links = qsa("a[href^='https://learn.microsoft.com']");
    links.forEach(function(link) {
      link.classList.add("external-link");
      link.title = (link.title ? link.title + " (opens in new tab)" : "Opens Microsoft Learn in new tab");
    });
  })();
})();
