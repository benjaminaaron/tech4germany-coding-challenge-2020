My solution for the [Tech4Germany coding challenge 2020](https://github.com/tech4germany/coding_challenge_2020) is a static site, so it can be accessed without setup [here](https://benjaminaaron.github.io/tech4germany-coding-challenge-2020/) or locally by opening `index.html` in the browser.

If changes are made in `fetchData.js` they have to be rebundled using this *browserify* (`npm install -g browserify`) command:

`browserify fetchData.js --s bundle > bundle.js`

The intention was to use `fetchData.js` in both the static site and the Telegram bot to avoid duplicating code. However, I ended up not having enough time to implement the bot in the given timeframe :robot: ⏳ :man_shrugging: Without the bot, browserify wouldn't have been necessary: the script would have been used directly, not as a module.
