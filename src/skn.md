---
layout: default
title:  "SK:N REST API"
date:   2019-07-07 13:17:19 +0100
categories: dotnetcore sql redis jmeter jenkins
---

<section class="section section--white" markdown="1">
<div class="section__content flexgrid flexgrid--columns" markdown="1">
<h1 class="section__header" markdown="1">SK:N REST API</h1>

#### Goals
-	The client is the UK’s leading skin clinic
-	As part of an aggressive marketing strategy, they want to be the first skin clinic in the UK to have online consultation booking, at the moment it’s all done using call-back forms!
-	As a result, they need a secure way of placing orders through to their in-clinic booking system, and to send the booking deposits to their finance ledgers
-	It needs to be fast! Their current in-clinic booking system could take 20 seconds for a booking to go through, we need all data retrieval to be under a second, and for order placement to be a few seconds.
-	They’re concerned about the impact of online booking on their database, as they’re certain the above performance issues are database related


#### Proposed Solution
-	Create a .NET Core based REST API, as it’s one of the fastest frameworks out there
-	Offset any load on the database by using in-memory array processing, along with Redis caching, to do the heavy lifting on the data
-	It will be load tested using JMeter to show it can perform well with 200 concurrent users
-	All vital functionality will have unit tests, integration tests and functional test written as needed to maintain stability
-	Payments will be processed on Stripe using Payment Intents (SCA compliant)
-	We will provide a database optimisation service to identify any issues with their current database setup
-	Use serilog along with a log parsing application to monitor all application errors, and use the NGIX access logs to monitor performance
-	Use docusaurus to create help guides, and swashbuckler to auto-generate API documentation

#### Result
{::nomarkdown}  
<a class="project__link" href="https://api.sknclinics.co.uk" markdown="1">
  <span>API documentation website</span>
  <svg class="project__link_arrow" viewBox="0 0 13.5 12.2">
    <path d="M7.5 12.2l-.7-.7 5.3-5.4L6.8.7l.7-.7 6 6.1"></path>
    <path opacity="0.5" d="M0 5.6h12.4v1H0z"></path>
  </svg>
</a>
<a class="project__link" href="https://docs.google.com/presentation/d/1wFE9TQ5Aavvde4_6zaHPMlwVfEE0o2FWuEUH3aD89R8/edit?usp=sharing" markdown="1">
  <span>Database optimisation presentation</span>
  <svg class="project__link_arrow" viewBox="0 0 13.5 12.2">
    <path d="M7.5 12.2l-.7-.7 5.3-5.4L6.8.7l.7-.7 6 6.1"></path>
    <path opacity="0.5" d="M0 5.6h12.4v1H0z"></path>
  </svg>
</a>
{:/}  
-	The .NET Core application performed phenomenally! With an average response time across GET requests of 0.2 seconds, much in part thanks to our Redis caching solution.
-	Conversion went up spectacularly for the customer upon switching to online bookings
-	The database optimisation greatly increased the speed of their in-clinic system, there’s been no complaints of slow-downs since launching the speed improvements
</div>
</section>