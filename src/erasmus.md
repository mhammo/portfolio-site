---
layout: default
title:  "Erasmus+ Sunburst"
date:   2019-07-07 13:17:19 +0100
categories: javascript d3 drupal php
---

<section class="section section--white" markdown="1">
<div class="section__content flexgrid flexgrid--columns" markdown="1">
<h1 class="section__header" markdown="1">Erasmus+ Sunburst</h1>

#### Goals
-	The client wanted a data visualisation to show the outputs and outcomes of the Erasmus+ EU funding programme
-	The data visualisation has to be integrated into and editable within a Drupal CMS
-	The data visualisation needed to be mobile friendly
-	When you click on a section of the sunburst, it should load in content relevant to the clicked section

#### Proposed Solution
-	Create a sunburst data visualisation using D3
-	Create the sunburst dataset using a custom Drupal database query
-	The sunburst sections are represented with taxonomies, and the content type tagged with that taxonomy is what appears underneath the sunburst upon click
-	The sunburst code is built using ES6, webpack and babel to enable quick clean development code, which can be compiled into cross-browser-compatible JS

#### Result
{::nomarkdown}  
<a class="project__link" href="https://www.erasmusplus.org.uk/erasmus-uk-logic-model#445" markdown="1">
  <span>See the sunburst visualisation here</span>
  <svg class="project__link_arrow" viewBox="0 0 13.5 12.2">
    <path d="M7.5 12.2l-.7-.7 5.3-5.4L6.8.7l.7-.7 6 6.1"></path>
    <path opacity="0.5" d="M0 5.6h12.4v1H0z"></path>
  </svg>
</a>
{:/}  
-	The client and their stakeholders were very happy with the data visualisation!
-	The website content editors were able to easily understand how to edit the sunburst content
-	The content is highly customisable in the CMS, down to even the sunburst section colors
</div>
</section>