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

1. Create an account on Google.
2. Go to KnightLab Timeline JS. You can watch the “How to Use Timeline JS” video there, but keep in mind that it’s a little out of date. 
3. Click “Make a timeline.” 
4. Click “Get the spreadsheet template” and then select “Make a copy.” If you’re not already logged into your Google account, you’ll need to do so now.
5. Now, we’ll use the basic template to create our own Timeline. There’s a lot of flexibility here.
- The first blue row will be your headline and title image. No time information is necessary here. 
- You must include event start date information (of some kind), but the end date information is entirely optional.
- You can incorporate a range of media on your timeline. For today, let’s practice using images and YouTube videos. 
6. To practice, skim the Wikipedia page for the Russian Civil War to identify three events that have clearly designated months, days, years. Place that             information into your timeline. The headline should be brief and clear. The “Text” section is where you should incorporate your analysis or explanations
7. Now, let’s turn to the media section. You want to make sure you do not break copyright, so we’ll be looking for images in the public domain or images that are licensed for public use. Please refer to our Guide to Copyright & Images for further details: https://docs.google.com/document/d/1grMgsriZlLXBmDRP_XEMYWHunPAcPVsO1tiZ5lM69bM/edit?usp=sharing.
- On Google Images, search for “Russian Civil War.”
- Click on “Tools,” open the “Usage Rights” tab, and select “Creative Commons licenses.” These are all images that you should be able to use on your                  timelines.
- Once you find an image you like, click on it. In this case, we’ll be using an image from Wikimedia Commons.
- For the “Media” column on your timeline spreadsheet, you’ll want the image’s URL. Here, it is very important to select “Copy Image Address” (NOT “Copy              Image” or  “Copy Link Address”). Copy this image address into the appropriate column/row in your timeline.
- On Wikimedia, at least, you’ll often find the Media Credit (Author) in the Summary section below the picture.
- Add a descriptive, but brief caption. What is this photo of? What do you want your audience to know about this photo? Who, what, where?
- For at least one of your slides, use a YouTube video. For this option, all you need to do is find a video, copy the URL in the browser bar, and paste it            into the appropriate Media row/column. Super easy!
- Repeat this process until your title slide and all three of your content slides have data, media (pictures and at least one video), and background                  color(s).
8. The final section of the timeline is also important. 
- Use the “Type” column to indicate which slide is your title slide. You probably won’t change this from the blue row. 
- If you open the drop-down menu, you’ll also see “Era.” You can use this feature to create sections within your timeline. 
- The Groups column allows you to show how certain events are related to one another.
- The Background column will, unsurprisingly, change what the background on that slide looks like. You can use colors (copy/paste the CSS color code) or              images (using an image address, as above in the media section).

You can embed a timeline in your page using the embed code.  You can also select the timeline template and add the Google Sheet id in the admin page under "Timeline ID".  For example, if your Google Sheets URL is `https://docs.google.com/spreadsheets/d/1-2p86KZCaiSb-76b4nlIT7b_mBZpxa9v71dSU6eNl98/edit#gid=0`  the ID is `1-2p86KZCaiSb-76b4nlIT7b_mBZpxa9v71dSU6eNl98`.

---

## Soundcite 

https://soundcite.knightlab.com/?#make-clip-options

“Audio is a powerful device that can add emotion or context to a story. Unfortunately audio clips force uncomfortable choices: read or listen, but not both. Until now. SoundCite is a simple-to-use tool that lets you add inline audio to your story. The audio is not isolated; it plays right under the text you choose.”

Soundcite requires users to host sound clips on their own, which is, indeed, a complication. We'll be using Github to solve this problem.

The first step, of course, is to identify the songs or other recordings that you’d like to use. Please note that you should only use clips, rather than full songs or recordings. In this way, copyright works very similarly to using other kinds of quotations or brief passages and falls under what is called Fair Use.

Once you’re ready, let’s record! You’ll want to use Quicktime or Audacity to record your computer’s audio. For the sake of a website, this should be perfectly adequate quality. 

If you’re using a Mac with a fairly recent version of MacOS, I’d recommend using a small piece of software called Soundflower. This allows you to select your computer audio (as opposed to your computer microphone) as your audio input.
- Download the software here: https://github.com/mattingalls/Soundflower/releases/tag/2.0b2
- Instructions on how to install it can be found here: https://www.fluxforge.com/blog/soundflower-os-x-10.11-10.12-macOS-sierra/

It may not appear as though anything was installed. However, if you click on the volume control in your status bar, you should see Soundflower as an option.

Now when you open Quicktime Player and select File → New Audio Recording you have the option to select your computer audio.

When you play music through iTunes or YouTube, for example, click record and you’ll be able to record an adequate copy. Be aware that all sounds (including alerts and notifications) will be recorded. Again, please note that this is for the purpose of helping record clips rather than entire pieces of music.

Once the clips are recorded, upload them to Github and follow the instructions on the Soundcite page to gather your embed codes.

You don’t necessarily have to cut up a sound file, however. If you have a longer file that you’d like Soundcite to feature only part of, you may use the Soundcite website to indicate a specific part of the sound file. The most important thing is the timestamps — where you'd like the clip to begin and end. The "URL" will be where the audio file is hosted. Note that we cannot host entire tracks purchased from, say, iTunes. You will need to record a portion of that track for the Soundcite clip.
 
You can then use those embed codes to feature your clips on your page here (or elsewhere). 

---

## Minimal Computing and Ed 


---
