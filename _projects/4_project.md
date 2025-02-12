---
layout: page
<<<<<<< HEAD
title: spoken word recognition
#description: with background image
img: assets/img/towel.jpg
importance: 1
category: work
#related_publications: true
---

Native speakers of a tonal language (like Chinese) use relative pitch height and contour 
to differentiate the meaning of words. The role of tone information in real-time language processing
still remains unclear, despite the fact that many languages have lexical tones. In particular, there is
ongoing debate about how lexical tones compare to vowels and consonants in accessing to different
lexical representations. Moreover, this question is currently explored more clearly in single-word priming studies, but not in contexts where words are accessed as part of a sentence even though in daily speech communication, tones and vowels are more commonly embedded in a semantic context. 

This study investigates the role of semantic predictability in tonal and vowel processing by examining how contextual constraints influence lexical access. Specifically, we address two sets of key questions:

**Predictive Processing and Phonological Competition**:

- Can activation of a spoken target be observed before the target word is heard?
- Does phonological competition occur in this pretarget time window?
- How does the strength of prior context modulate these effects?

**Anticipation of Tone and Rime Information**:

- Do listeners anticipate tone or rime information of an upcoming target word before its acoustic signal becomes available?
- If so, which type of information exerts a stronger influence?
- Does the strength of prior context modulate phonological competition?

By addressing these questions, this study aims to provide new insights into the interaction between contextual effects and phonological processing of tonal and segmental information in spoken language comprehension.




<div class="Related publications">
  <div style="margin-bottom: 3rem;">  
   <h2>Related publications</h2>  
  {% bibliography -q @*[project=TOW] %}
  </div>
  
  
  
</div>
=======
title: project 4
description: another without an image
img:
importance: 3
category: fun
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

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
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
