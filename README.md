# tech4germany-coding_challenge_2020
 
My solution is a static site, so it can be accessed without setup at [benjaminaaron.github.io/tech4germany-coding_challenge_2020](https://benjaminaaron.github.io/tech4germany-coding_challenge_2020/) or locally by opening `index.html` in the browser.

If changes are made in `fetchData.js` they have to be rebundled using this *browserify* (`npm install -g browserify`) command:

`browserify fetchData.js --s bundle > website/bundle.js`
