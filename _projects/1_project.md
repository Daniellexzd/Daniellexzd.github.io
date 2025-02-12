---
layout: page
<<<<<<< HEAD
title: accent adaptation in perception
#description: with background image
img: assets/img/accadapt.jpg
importance: 1
category: work
#related_publications: true
---

As a world language, English emcompasses a great variety of accents spoken by both native and non-native speakers. Listeners are exposed not only to standard English accents in their daily life, but also to diverse accented forms, some of which may be unfamiliar to them. While extensive research has examined how native English speakers process different accents, second language (L2) learners’ adaptation to non-native English accents remains less explored. This project investigates how L2 English learners (in this case, Mandarin learners of English) adapt to non-native English accents, compared to native English speakers. L2 learners may benefit from shared phonetic features between their first language and the target accent, as well as their leniency towards phonetic variants, potentially leading to acoustic-phonetic advantages. Conversely, native English speakers might rely more on higher-level semantic and lexical cues to resolve ambiguities caused by phonological neutralization. However, the specific adaptation strategies employed by L2 listeners remain unclear.

This project addresses three research questions: 
- (1). **Interlanguage Speech Intelligibility Benefit (ISIB)**: Will Mandarin listeners exhibit interlanguage speech intelligibility benefits (ISIBs) for words carrying a familiar non-native accent (i.e., Mandarin-accented English) that involves phonological merger? 
- (2). **Adaptation to Unfamiliar Accents**: How do Mandarin listeners perceive English words in an unfamiliar accent? Moreover, with availability of contextual resources, how well can Mandarin listeners adapt to a familiar versus unfamiliar accent, compared to native English listeners? 
- (3). **Phonetic Retuning Strategies**: What strategy do Mandarin listeners adopt when retuning the phonetic boundaries of a non-native sound under lexical guidance?




<div class="Related publications">
  <div style="margin-bottom: 3rem;">  
   <h2>Related publications</h2>  
  {% bibliography -q @*[project=AA] %}
  </div>
  
  
  
</div>
=======
title: project 1
description: with background image
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
>>>>>>> 08ba7284623e590c1d59c2871e942949fe25f24c
