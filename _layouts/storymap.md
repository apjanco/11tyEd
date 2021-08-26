---
layout: default
---

<article class="page">
  <h1 class="page-title">{{ title }}</h1>
  {{ content }}
  <div id="mapdiv" style="width: 100%; height: 600px;"></div>

  <script type="text/javascript" src="https://cdn.knightlab.com/libs/storymapjs/latest/js/storymap-min.js"></script>
  <script>
// storymap_data can be an URL or a Javascript object
var storymap_data = '/static/demo/demo.json';

// certain settings must be passed within a separate options object
var storymap_options = {};

var storymap = new KLStoryMap.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
    storymap.updateDisplay(); // this isn't automatic
}
</script>
</article>
