---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->


<div class="publications">
  <div style="margin-bottom: 3rem;">  
  <h2>Journal Articles</h2>
  {% bibliography -q @*[keywords=JA] %}
  </div>
  
  <div style="margin-bottom: 3rem;">  
  <h2>Conference Proceedings</h2>
  {% bibliography -q @*[keywords=CP] %}
  </div>
  
  <div style="margin-bottom: 3rem;">  
  <h2>Conference Abstracts</h2>
  {% bibliography -q @*[keywords=CA] %}
  </div>
  
  
</div>
