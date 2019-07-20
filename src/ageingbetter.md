---
layout: default
title:  "Power BI PPTX MicroService"
date:   2019-07-07 13:17:19 +0100
categories: powerbi nodejs mongodb javascript
---

<section class="section section--white" markdown="1">
<div class="section__content flexgrid flexgrid--columns" markdown="1">
<h1 class="section__header" markdown="1">PowerBI PPTX MicroService</h1>

#### Goals
-	The client has a Power BI Report with more than 15 pages
-	As a result, they can’t use Power BI’s in built PowerPoint export as it has a 15 page limit
-	They’re also migrating to Power BI Embedded
-	The in-built PowerPoint export functionality provided by Microsoft takes 5-10 minutes to export, ideally the new solution needs to be faster but doesn’t need to be instant


#### Proposed Solution
-	Create a NodeJS application that can take a Power BI report ID and set of filters, and return a PPTX file containing high resolution screenshots of the report (similar to Microsoft’s feature)
-	The report file is stored in a folder directory after the first time it is ran. This means the second person who tries to grab the report with the same filter criteria will get the pre-rendered report instantly
-	MongoDB is used to store file references
-	NodeJS generates this report using puppeteer, which is Google’s chromium automation tool which boasts faster speeds than selenium, and promise support.
-	Create it as a micro-service, so it can be used across different projects going forward, and can be put on its own server if the chromium automation is intensive on RAM and CPU resources.

#### Result
{::nomarkdown}  
<a class="project__link" href="https://github.com/mhammo/powerbi-powerpoint-service" markdown="1">
  <span>See the github repo here</span>
  <svg class="project__link_arrow" viewBox="0 0 13.5 12.2">
    <path d="M7.5 12.2l-.7-.7 5.3-5.4L6.8.7l.7-.7 6 6.1"></path>
    <path opacity="0.5" d="M0 5.6h12.4v1H0z"></path>
  </svg>
</a>
{:/}  
-	We deployed the NodeJS application on its own low cost Linux server
-	PPTX files rendered in 2 minutes, which to put it in perspective is at least twice as fast as the Microsoft service at its fastest
-	Files were deleted on a cron job, whenever the Power BI report was updated with new data
-	The micro-service has been used on another project now to generate PPTX files for sending automated emails to stakeholders
</div>
</section>