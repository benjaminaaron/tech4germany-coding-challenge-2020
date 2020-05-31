# tech4germany-coding-challenge-2020
 
My solution for the [Tech4Germany coding challenge 2020](https://github.com/tech4germany/coding_challenge_2020) is a static site, so it can be accessed without setup [here](https://benjaminaaron.github.io/tech4germany-coding-challenge-2020/) or locally by opening `index.html` in the browser.

If changes are made in `fetchData.js` they have to be rebundled using this *browserify* (`npm install -g browserify`) command:

`browserify fetchData.js --s bundle > bundle.js`
