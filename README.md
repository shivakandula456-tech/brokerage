# Farro Scroll

FARRO — VIDEO-DRIVEN SCROLLING WORLD WEBSITE

MASTER WEBSITE BUILD PROMPT

Create a complete premium restaurant website for Farro, Koregaon Park, Pune.

The website must use the supplied 10-second miniature-chef food video as the central interactive scrolling environment.

This is the most important requirement:

DO NOT treat the supplied video as a normal autoplaying hero background.

Instead:

THE USER'S PAGE SCROLL MUST CONTROL THE VIDEO TIMELINE.

The visitor should feel as though they are scrolling through a miniature culinary world.

The visual identity of the entire Farro website must also be derived from the supplied video's actual colour palette, lighting, food tones, miniature environment, textures and cinematic atmosphere.

1. CORE EXPERIENCE

The website concept is:

“ENTER THE WORLD OF FARRO”

Farro should be presented as a miniature culinary universe.

The supplied video shows miniature chefs interacting with oversized food.

Use this idea as the central creative metaphor:

Every Farro plate is its own world.

The visitor does not simply read about Farro.

They move through the culinary world using their mouse wheel, trackpad or touch scroll.

The 10-second video becomes approximately 400–600vh of website scrolling.

Example:

SCROLL 0%
→ Video 0 seconds

SCROLL 10%
→ Video 1 second

SCROLL 25%
→ Video 2.5 seconds

SCROLL 50%
→ Video 5 seconds

SCROLL 75%
→ Video 7.5 seconds

SCROLL 100%
→ Video approximately 10 seconds

Scrolling upward must reverse the video.

Stopping scrolling must stop the video.

The experience should therefore behave like:

SCROLL DOWN
→ WORLD MOVES FORWARD

STOP
→ WORLD FREEZES

SCROLL UP
→ WORLD MOVES BACKWARD

The video should NEVER automatically continue playing during this main experience.

2. VIDEO TECHNICAL IMPLEMENTATION

Create a tall scroll container:

approximately:

500vh desktop

400vh tablet

300–400vh mobile depending on performance.

Inside it, create a sticky viewport:

position: sticky;

top: 0;

height: 100vh;

overflow: hidden;

The video fills the viewport:

width: 100%;

height: 100%;

object-fit: cover;

The video should remain pinned while the user scrolls through the sequence.

Calculate scroll progress:

progress = currentScrollPosition / totalScrollDistance

Clamp progress between:

0 and 1.

Then map it to:

video.currentTime = progress × video.duration

Example logic:

const progress = Math.min(
Math.max(scrollProgress, 0),
1
);

video.currentTime =
progress * video.duration;

Do not use video.play() for the main scroll sequence.

The browser should essentially use the video as a frame-controlled animation.

3. SMOOTH VIDEO SCRUBBING

Do not update the video aggressively on every raw wheel event.

Use requestAnimationFrame.

Create:

targetTime

and

currentTime

Allow currentTime to smoothly approach targetTime.

Example concept:

currentTime +=
(targetTime - currentTime) * 0.12;

This creates smooth cinematic scrubbing.

The interaction should feel heavy and premium rather than twitchy.

Do not create excessive delay between scroll position and video position.

4. VIDEO LOADING

The experience must not begin before enough of the video is available.

Create a minimal Farro loader.

Background colour:

warm cream derived from the video.

Centered:

FARRO

Underneath:

KOREGAON PARK · PUNE

Then:

ENTERING THE KITCHEN

Small percentage:

72%

When the video is ready, transition smoothly into the first video frame.

Do not use a flashy loader.

5. VIDEO COLOUR PALETTE

DO NOT use the previous black-and-gold luxury restaurant palette.

The supplied video becomes the primary colour reference.

The site should feel warm, culinary, tactile and editorial.

Use colours inspired by:

fresh pasta

bread

flour

cream

wood

tomato

terracotta

herbs

olive

roasted ingredients

warm kitchen lighting

Suggested design palette:

Warm Cream

#EFE2CA

Use for:

main light backgrounds

large typography

cards

menu surfaces

Flour / Ivory

#F6EEDC

Use for:

high contrast text

light sections

Deep Espresso

#2B1B14

Use for:

primary typography

footer

dark sections

navigation text

Toasted Brown

#7A4B2D

Use for:

secondary typography

borders

hover states

Terracotta / Tomato

#A94E32

Use as an important accent.

Use for:

buttons

small highlights

active navigation

menu markers

Muted Olive

#6E7044

Use sparingly.

Use for:

cuisine indicators

botanical details

small accents

Do not force exact colours if actual sampled video colours differ.

The final implementation should sample or visually match the supplied video.

6. VISUAL STYLE

The website should feel like:

a cinematic food film

an editorial restaurant website

a miniature culinary universe

a premium European food magazine

Avoid:

generic black luxury backgrounds

neon

glassmorphism everywhere

large gradients

tech-startup styling

generic restaurant cards

overly futuristic UI

The food video should remain the visual hero.

7. TYPOGRAPHY

Use a refined editorial serif for major headlines.

Possible direction:

Cormorant Garamond

Bodoni Moda

DM Serif Display

Playfair Display

or similar.

Pair it with a minimal modern sans-serif:

Inter

Manrope

DM Sans

or similar.

Large typography should feel editorial.

Example:

SMALL LABEL

THE WORLD OF

Large:

FARRO

Supporting:

Modern Indian · Mediterranean · Italian

8. NAVIGATION

Create a fixed transparent navigation.

LEFT:

FARRO

CENTER/RIGHT:

Experience

Menu

About

Visit

Far right:

RESERVE

The navigation should initially use colours that contrast against the current video frame.

When necessary, use a very subtle translucent background.

Do not place a large opaque navbar over the video.

On mobile:

FARRO

MENU ICON

RESERVE

9. SCROLL PROGRESS

Add a subtle vertical progress indicator.

Desktop:

right side of viewport.

Approximately:

01
—
02
—
03
—
04
—
05

Or use a simple thin vertical line.

The line fills as the video progresses.

Optional labels:

ENTER

CRAFT

FLAVOUR

TABLE

FARRO

Keep this minimal.

10. OPENING VIDEO STATE

Scroll Progress: 0–12%

The user arrives at the beginning of the miniature culinary world.

Keep the video nearly unobstructed.

Display:

FARRO

KOREGAON PARK · PUNE

Then:

A WORLD BUILT AROUND FLAVOUR.

Small instruction:

SCROLL TO ENTER

Use an animated downward indicator.

Text should fade away once the visitor begins scrolling.

Do NOT keep the logo covering the video for too long.

11. FIRST STORY MOMENT

Scroll Progress: approximately 12–28%

As miniature chefs begin interacting with the food, introduce the first message.

Small:

WELCOME TO

Large:

THE WORLD OF FARRO

Supporting:

Modern flavours shaped through craft, curiosity and a little imagination.

Text should appear only where the video has sufficient negative space.

Do not permanently centre all text.

Use composition-aware placement.

For example:

If the main video subject occupies the right side,

place text on the left.

If the main subject occupies the left side,

move text right.

12. SECOND STORY MOMENT

Scroll Progress: approximately 28–45%

As the food preparation becomes more visible:

Small:

BUILT BY HAND

Large:

CRAFTED WITH OBSESSION.

Supporting:

Every ingredient matters.
Every detail has a purpose.
Every plate begins long before it reaches the table.

Keep the text concise.

The animation should be:

opacity 0 → 1

translateY 30px → 0

slight blur → sharp

Then fade out before the next story moment.

13. CUISINE MOMENT

Scroll Progress: approximately 45–60%

Introduce Farro's cuisine.

Small:

THE FARRO KITCHEN

Large:

FLAVOURS WITHOUT BORDERS.

Then reveal cuisine labels individually:

MODERN INDIAN

MEDITERRANEAN

ITALIAN

DESSERTS

BAR FOOD

Use typography rather than cards.

Example:

MODERN INDIAN
×
MEDITERRANEAN
×
ITALIAN

Supporting:

Different influences. One Farro table.

14. MINIATURE WORLD MOMENT

Scroll Progress: approximately 60–75%

This should become the strongest connection between the video concept and Farro's brand.

Display:

EVERY PLATE
IS A WORLD.

Use very large typography.

Allow:

EVERY PLATE

to appear first.

Then:

IS A WORLD.

The video continues moving behind it.

The typography can partially move behind visual masks if technically possible.

Supporting:

Built layer by layer.
Ingredient by ingredient.
Moment by moment.

Keep supporting text small.

15. MENU TRANSITION

Scroll Progress: approximately 75–88%

Begin transitioning from storytelling into conversion.

Display:

Small:

FROM OUR WORLD

Large:

TO YOUR TABLE.

CTA:

EXPLORE THE MENU →

If the actual menu URL/page is unavailable, use a placeholder:

[MENU URL]

Do not invent Farro's actual dishes.

16. FINAL VIDEO MOMENT

Scroll Progress: approximately 88–100%

Let the final video frames become visible with minimal obstruction.

Then display:

FARRO

Supporting:

An evening of flavour in Koregaon Park.

CTA:

RESERVE YOUR TABLE

Secondary:

GET DIRECTIONS

As the user reaches the final frame, begin transitioning from the video world into the normal website.

17. VIDEO-TO-WEBSITE TRANSITION

This transition is extremely important.

Do NOT suddenly end the video and show a white section.

Instead:

Hold the final video frame.

Then create a warm cream overlay.

Opacity:

0%

→

100%

As the next section enters.

The video world should appear to dissolve into the Farro website.

The next background becomes:

warm flour/cream.

This makes the scrolling experience feel continuous.

18. POST-VIDEO WEBSITE

After the interactive video sequence, continue into a simpler premium restaurant website.

The website after the video should be much lighter and faster.

Do not continue complex animation everywhere.

The video world is the spectacle.

The rest of the website provides information and conversion.

19. INTRODUCTION SECTION

Background:

Warm cream.

Small label:

KOREGAON PARK · PUNE

Headline:

A TABLE MADE FOR LONG EVENINGS.

Copy:

Farro brings together Modern Indian, Mediterranean and Italian influences in a dining experience centred around flavour, craft and conversation.

Use large editorial typography.

Add subtle horizontal line details.

20. CUISINE TYPOGRAPHY SECTION

Create a large scrolling typography section.

Example:

MODERN INDIAN

MEDITERRANEAN

ITALIAN

DESSERTS

BAR

Allow words to move slowly horizontally as the visitor scrolls.

Background:

Deep espresso.

Typography:

Warm ivory.

Accent words:

Terracotta.

This should visually connect to the colours of the supplied video.

21. MENU PREVIEW

Headline:

WHAT'S ON THE TABLE

Do not invent Farro dishes.

Use placeholders:

[Signature Dish 01]

[Dish Description]

[Price]

[Signature Dish 02]

[Dish Description]

[Price]

[Signature Dish 03]

[Dish Description]

[Price]

[Signature Dish 04]

[Dish Description]

[Price]

Design the section editorially.

Avoid identical cards.

For example:

Dish 01:
large image left,
text right.

Dish 02:
text left,
image right.

Dish 03:
full-width image.

CTA:

VIEW FULL MENU

22. FARRO EXPERIENCE

Create a section using oversized editorial text.

Small:

DINNER AT FARRO

Headline:

COME FOR DINNER.
STAY FOR THE NIGHT.

Supporting:

A warm room, expressive food, drinks at the table and the kind of evening that does not need to be rushed.

Use restaurant photography placeholders until actual Farro photography is supplied.

Do not use random stock photos in production.

23. RATING

Use the supplied rating information carefully.

Display:

4.7

DINING RATING

710 Dining Ratings

Keep rating/count as editable data fields because they may change.

Do not hardcode them into image assets.

Do not fabricate customer testimonials.

24. RESTAURANT INFORMATION

Restaurant:

FARRO

Cuisine:

Modern Indian

Mediterranean

Italian

Desserts

Alcoholic Beverages

Bar Food

Approximate cost:

₹3,500 for two

Opening information supplied:

Opens at 7 PM

Phone:

+91 96993 63706

Address:

357/1, Shop 1/2,
Ground Floor, Lane 6,
Meera Nagar,
Koregaon Park,
Pune

Store these values centrally so they can easily be updated.

25. LOCATION SECTION

Background:

Deep espresso.

Typography:

Warm ivory.

Small:

FIND US

Large:

KOREGAON PARK
PUNE

Display address.

Add:

GET DIRECTIONS →

Use the supplied Google Maps directions link.

The directions CTA must open Google Maps.

Add:

CALL FARRO

using:

tel:+919699363706

26. FINAL RESERVATION SECTION

Create a dramatic but simple final section.

Background:

Warm cream or a Farro restaurant photograph when available.

Small:

DINNER FROM 7 PM

Large:

YOUR TABLE
IS WAITING.

CTA:

RESERVE AT FARRO

Secondary:

CALL +91 96993 63706

If no official reservation platform has been supplied, use:

[RESERVATION URL]

Do not simulate a successful booking without a backend/provider.

27. FOOTER

Background:

Deep espresso.

Large wordmark:

FARRO

Below:

KOREGAON PARK · PUNE

Links:

MENU

RESERVATIONS

DIRECTIONS

INSTAGRAM

CONTACT

Then:

Modern Indian · Mediterranean · Italian

Phone:

+91 96993 63706

Final small text:

SEE YOU AT THE TABLE.

28. VIDEO TEXT ANIMATION SYSTEM

Every text overlay should have three phases.

ENTER

ACTIVE

EXIT

Example:

0% → hidden

20% → entering

40–70% → visible

80–100% → exiting

Animate:

opacity

translateY

blur

slight scale where appropriate.

Do NOT animate every letter individually.

Keep animation sophisticated.

29. SCROLL SCENE CONFIGURATION

Build a reusable scene system.

Example structure:

const scenes = [
{
start: 0.02,
end: 0.14,
eyebrow: "KOREGAON PARK · PUNE",
title: "FARRO",
body: "A world built around flavour."
},
{
start: 0.16,
end: 0.30,
eyebrow: "WELCOME TO",
title: "THE WORLD OF FARRO"
},
{
start: 0.31,
end: 0.46,
eyebrow: "BUILT BY HAND",
title: "CRAFTED WITH OBSESSION."
},
{
start: 0.47,
end: 0.61,
eyebrow: "THE FARRO KITCHEN",
title: "FLAVOURS WITHOUT BORDERS."
},
{
start: 0.62,
end: 0.78,
title: "EVERY PLATE IS A WORLD."
},
{
start: 0.79,
end: 0.90,
eyebrow: "FROM OUR WORLD",
title: "TO YOUR TABLE."
},
{
start: 0.91,
end: 1,
title: "FARRO"
}
];

The exact timing should be adjusted after visually inspecting the supplied video.

Do not blindly use these percentages if important visual actions happen at different times.

30. IMPORTANT VIDEO COMPOSITION RULE

Text must NEVER cover the most important action in the video.

Analyze the video at several timestamps.

For each scene determine:

subject position

negative space

brightness

contrast

movement

Then dynamically assign text alignment:

left

right

center

Example:

scene.textPosition = "left";

or:

scene.textPosition = "right";

This will make the site feel designed specifically around the film.

31. TEXT CONTRAST SYSTEM

Because video brightness changes, overlays must remain readable.

Do not put large black rectangles behind text.

Instead use:

subtle radial gradients

localized shadows

very light dark overlays

text shadows

or dynamic light/dark text.

Example:

If current frame is bright:

use deep espresso typography.

If frame is dark:

use warm ivory typography.

Transitions should be smooth.

32. VIDEO CROPPING

Desktop:

16:9 full viewport.

Use:

object-fit: cover.

Tablet:

maintain focus around the primary action.

Mobile:

DO NOT simply crop the center automatically if this cuts off miniature characters.

Use:

object-position

and breakpoint-specific positioning.

If necessary, create a dedicated mobile crop/version of the video.

33. MOBILE SCROLL VIDEO

Mobile browsers can struggle with aggressive video seeking.

Optimize carefully.

Use:

muted

playsInline

preload="auto"

No autoplay requirement for the scroll sequence.

Use requestAnimationFrame.

Reduce total scroll distance.

Desktop:

approximately 500vh.

Mobile:

approximately 300–350vh.

If direct video seeking performs poorly on a target device, implement a fallback using an optimized frame sequence.

34. OPTIONAL FRAME-SEQUENCE VERSION

For maximum smoothness, provide an alternative implementation.

Extract the video into optimized image frames.

Example:

60–120 frames rather than all 240 frames if visually sufficient.

Convert frames to:

WebP

or

AVIF.

Use a canvas.

As scroll progresses:

progress → frame index.

Draw the corresponding image onto the canvas.

This can create Apple-style scroll-controlled animation.

Choose between:

VIDEO SCRUBBING

or

CANVAS FRAME SEQUENCE

based on real performance testing.

Do not automatically assume video seeking is best.

35. PERFORMANCE

The video is the heaviest asset.

Everything else must remain lightweight.

Requirements:

Compress video appropriately.

Use MP4/H.264 for broad compatibility.

Optionally provide WebM.

Preload only critical assets.

Lazy load post-video images.

Avoid huge JavaScript libraries unless necessary.

Use transform and opacity for animation.

Avoid layout thrashing.

Use requestAnimationFrame.

Do not continuously run animation loops when the video section is outside the viewport.

36. GSAP IMPLEMENTATION

Preferred:

GSAP + ScrollTrigger.

Create a ScrollTrigger attached to the video-world section.

Example conceptual structure:

ScrollTrigger.create({
trigger: ".video-world",
start: "top top",
end: "bottom bottom",
scrub: true,
onUpdate: self => {
targetProgress = self.progress;
}
});

Then:

targetVideoTime =
targetProgress * video.duration;

Smoothly interpolate toward targetVideoTime.

Use separate ScrollTriggers or progress calculations for overlay text.

37. ACCESSIBILITY

Support:

prefers-reduced-motion.

If enabled:

Do not scrub the entire video aggressively.

Show a static poster image or simplified video presentation.

Then display content normally.

All navigation must remain keyboard accessible.

All buttons must have visible focus states.

Video content must not be necessary to understand essential restaurant information.

38. MOBILE RESERVATION CTA

On mobile, add a sticky bottom CTA after the first screen:

RESERVE TABLE

Background:

Terracotta.

Text:

Warm ivory.

Keep it compact.

Do not cover important content.

39. CUSTOM CURSOR

Optional desktop feature.

Default:

small espresso circle.

When hovering:

MENU →

RESERVE →

VIEW →

Do not use on touch devices.

40. MICROINTERACTIONS

Buttons:

Arrow extends approximately 6–10px.

Underline slides in.

Background fills smoothly.

Navigation:

small underline.

Menu items:

image gently scales.

Do not use bouncing animation.

Do not use excessive magnetic buttons.

41. SOUND

The supplied video should be muted during scroll interaction unless sound is explicitly enabled by the user.

Do NOT autoplay sound.

Optional small button:

SOUND OFF

After user interaction:

SOUND ON

If the original video has no useful audio, omit this entirely.

42. WEBSITE DATA STRUCTURE

Create a central restaurant data object.

Example fields:

name

tagline

address

phone

cuisines

rating

ratingCount

averageCost

openingTime

mapsUrl

reservationUrl

instagramUrl

menuUrl

videoUrl

This prevents information from being hardcoded throughout components.

43. COMPONENT STRUCTURE

Recommended React/Next.js components:

44. PAGE STRUCTURE

The final page hierarchy should be:

NAVIGATION

↓

VIDEO SCROLLING WORLD
approximately 500vh

↓

VIDEO DISSOLVE TRANSITION

↓

FARRO INTRODUCTION

↓

CUISINE TYPOGRAPHY

↓

MENU PREVIEW

↓

THE FARRO EXPERIENCE

↓

4.7 DINING RATING

↓

KOREGAON PARK LOCATION

↓

RESERVATION

↓

FOOTER

45. DESIGN PHILOSOPHY

The video should remain the star.

Do not cover it with:

large cards

constant paragraphs

large navigation

popups

multiple buttons

The first several minutes of browsing should feel visually calm.

Use:

video

space

typography

movement

to tell the story.

46. BRAND LANGUAGE

Farro copy should be short.

Use phrases such as:

A WORLD BUILT AROUND FLAVOUR.

THE WORLD OF FARRO.

CRAFTED WITH OBSESSION.

FLAVOURS WITHOUT BORDERS.

EVERY PLATE IS A WORLD.

FROM OUR WORLD TO YOUR TABLE.

COME FOR DINNER. STAY FOR THE NIGHT.

YOUR TABLE IS WAITING.

SEE YOU AT THE TABLE.

Avoid generic copy such as:

“Experience culinary excellence.”

“Where taste meets luxury.”

“Indulge your senses.”

“An unforgettable gastronomic journey.”

The writing should feel distinctive and restrained.

47. MOST IMPORTANT DEVELOPMENT REQUIREMENT

Before building the rest of the website:

FIRST IMPLEMENT AND TEST THE VIDEO SCROLL ENGINE.

The first prototype should contain ONLY:

video

scroll container

video timeline mapping

scroll progress

one temporary text overlay.

Confirm:

scrolling down advances the video.

scrolling up reverses it.

stopping holds the frame.

video reaches the final frame at the bottom.

video does not autoplay independently.

mobile does not break.

Only after this works correctly should the full Farro UI be built around it.

48. FINAL RESULT

The website should NOT feel like:

a restaurant website with a video background.

It should feel like:

the visitor has entered the miniature culinary world shown in the supplied Farro video.

The video itself becomes the environment.

The scrollbar becomes the timeline.

The miniature chefs become part of Farro's storytelling.

The food becomes the landscape.

Typography appears inside the world rather than sitting on top of a conventional webpage.

At the end, the visitor exits the miniature culinary world and arrives at the real-world destination:

FARRO · KOREGAON PARK · PUNE

The final emotional sequence should be:

ENTER THE WORLD

↓

WATCH IT COME TO LIFE THROUGH SCROLL

↓

DISCOVER FARRO'S FOOD PHILOSOPHY

↓

MOVE FROM THE MINIATURE WORLD TO THE REAL RESTAURANT

↓

RESERVE A TABLE

Final message:

FROM OUR WORLD TO YOUR TABLE.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7dbf996b-b93e-49ca-9a0f-87f8e22a7cf2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
