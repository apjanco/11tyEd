---
layout: page
title: How-to Guide
author: Andy Janco
templateEngineOverride: md
---

## Contents

[[toc]]

---
## Making changes to this site

To make changes to a page on this site, you first need to login to the admin page.  
1. Add `/admin` to the current web address in your browser.  For example, change `https://reees.netlify.app` to [`https://reees.netlify.app/admin`](https://reees.netlify.app/admin).
2. You should then see a button asking to `Login with Netlify Identity`, click on that button.    
3. Now it'll ask for an account.  To use your Google account, click on `Continue with Google`. You'll be asked to enter your Google username and password. If you have GitHub or Netlify accounts, those will also work. 
4. If logged in, you'll now see a list of the current pages.  You can click on your group's page to see and edit the contents.  


---

## How to update an existing page 

When you click on a text you'll get a form that lets you edit the metadata (such as title or author) and the content of the page.  

##### Metadata
Most of the metadata fields are optional and don't have to be completed.  However, your page must have a title and author. 
- layout ~ Ed has layouts for various genres of text. In most cases you'll want `narrative`. ([more](https://minicomp.github.io/ed/documentation/#genres)).  You can embed a timeline or storymap into any layout.  If you want to fetch data directly from a Google Sheet and render a timeline in your page, you can use the `timeline` layout.  Be sure to add the Google Sheet id in the Timeline ID field.
- Timeline id  ~ used by the timeline layout.  It expects the sheet id.  For example if your browser shows `https://docs.google.com/spreadsheets/d/1-2p86KZCaiSb-76b4nlIT7b_mBZpxa9v71dSU6eNl98/edit#gid=0`, the id is `1-2p86KZCaiSb-76b4nlIT7b_mBZpxa9v71dSU6eNl98`
- Text content ~ This interface allows you to write or paste text into the page.  With "richtext" selected, you can add plain text or HTML. With "markdown" you can write using a short-hand for HTML called "markdown." For more on markdown see [here](https://www.markdownguide.org/cheat-sheet/).  

---

## Timeline JS

For the most part, follow the instructions here:
http://timeline.knightlab.com/#make

“TimelineJS is an open-source tool that enables anyone to build visually rich, interactive timelines. Beginners can create a timeline using nothing more than a Google spreadsheet [...]. Experts can use their JSON skills to create custom installations, while keeping TimelineJS's core functionality.”

You can embed a timeline in your page using the embed code.  You can also select the timeline template and add the Google Sheet id in the admin page under "Timeline ID".  For example, if your Google Sheets URL is `https://docs.google.com/spreadsheets/d/1-2p86KZCaiSb-76b4nlIT7b_mBZpxa9v71dSU6eNl98/edit#gid=0`  the ID is `1-2p86KZCaiSb-76b4nlIT7b_mBZpxa9v71dSU6eNl98`.


---

## Soundcite 

https://soundcite.knightlab.com/?#make-clip-options

---

## Minimal Computing and Ed 


---
