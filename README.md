# Repository for tabuchi.dev

## Learnings
### Run build on personal computer before pushing changes
My components folder was in the pages folder which works in development, but not when building the static pages. This is a breaking change and also costs server build time.

### Keep files tidy
SVG icons (around 7) are all kept in one file so they can be imported cleanly on one line and not existing as 7 separate files.

`import {LinkedinIcon, MailIcon, GithubIcon} from "./svgs";` instead of 3 lines.

### Animations
GSAP is very cool and powerful. The background and font color changing effect worked easily because GSAP can annimate CSS variables, so I only needed to declare colors for everything once and then set up GSAP to trigger the color changes the root CSS variables and not have to tell GSAP to change the color of each different element.
e.g. Buttons have background and font colors swapped compared to what the default text has. GSAP would need to target and change them separately if it couldn't just change the CSS variables.