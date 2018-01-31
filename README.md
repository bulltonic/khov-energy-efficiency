# KHOV - Engery Efficiency Prototypes
Based off of [Project Build w/ Gulp.js](https://github.com/bulltonic/html-sass-gulp-project)

## Project Languages
1. HTML5
2. Sass
3. jQuery
4. PHP (See #9 of Project Utilities for details)

## Project Utilities (Optional)
1. [Bootstrap Framework (Grid Only)](https://getbootstrap.com/docs/4.0/layout/grid/): A free and open-source front-end web framework for building responsive, mobile-first websites and web applications.
2. [Eric Meyers reset](https://meyerweb.com/eric/tools/css/reset/) and [Normalize.css](https://necolas.github.io/normalize.css/): Makes browsers render all elements more consistently and in line with modern standards.
3. [Modernizer](https://modernizr.com/): A collection of superfast tests – or “detects” as we like to call them – which run as your web page loads, then you can use the results to tailor the experience to the user.
4. [TweenMax by Greensock](https://greensock.com/tweenmax): Built for convenience, TweenMax provides a single JavaScript file that contains everything you will commonly need for animating DOM elements.
5. [SlickSlider by Ken Wheeler](kenwheeler.github.io/slick/): "The last carousel you'll ever need". Not really but its pretty solid and free.
6. [SVG for Everybody](https://jonathantneal.github.io/svg4everybody/): SVG for Everybody adds external spritemaps support to otherwise SVG-capable browsers.
7. [Covervid](http://stefanerickson.github.io/covervid/): Make your HTML5 video behave like a background cover image with this lightweight Javascript plugin / jQuery extension 
8. [Video.js](http://videojs.com/): Video.js is an open source library for working with video on the web, also known as an HTML video player
9. [Gulp Connect PHP](https://github.com/sindresorhus/grunt-php): This is being used to organize files with includes for a more manageable coding experience. If this isn't enjoyed, simply take the contents of each file included, paste it in place of the include lines and changed the index files to have a .html extension

### Working with [Gulp.js](https://gulpjs.com/)
1. Dependencies [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm)
> npm is distributed with Node.js- which means that when you download Node.js, you automatically get npm installed on your computer.
2. Check that you have node and npm installed by running `node -v` and `npm -v` in your terminal
3. If the commant is not found install them using the links above and if it doesn't work in your project's folder, try installing them globally using your `sudo` commant

### Gulp Core Files
1. gulp.js
2. package.js
3. Node_modules (not created until gulp is installed by following below)

### Gulp Usage
1. To install you position yourself in the project folder by traversing via terminal using the cd command and install using npm by running the command below:<br />
`$ npm install`

2. To run the default gulp tasks found in the gulp.js file which will initially compile and watch the svg directory, sass and javascript files as well as start the PHP server and open the site in the browser run the command below within the projects directory:<br />
`$ gulp`

3. To just start the PHP server instance run the following command from within the projects directory:<br />
`gulp connect`<br />
`Ctrl-C` will kill the server

4. To watch sass, javascript and any gulp tasks found in the gulp.js file by running the command below:<br />
`$ gulp watch`

5. To add SVG’s to spritemap, drop any svg into the /src/svg folder. The name of the svg will become the id of the svg.<br />
> Make any changes such as fill="currentColor" to the svg inside of the /src/svg folder and Gulp will process.

If issues happen with the server instance still running refer to this [article](https://stackoverflow.com/questions/25608908/stopping-in-built-php-server-on-mac-mavericks-livecode)

### Gulp Task File Structure:

1. JavaScript<br />
`/src/lib/*.js` -> `/js/lib` -- Any standalone JavaScript file. Usually for polyfills or large libraries independent of the projects unique scripts.<br />
`/src/plugins/*.js` -> `/js/plugins.js` -- All files get concat, and minified into one plugins.js<br />
`/src/partials/*.js -> `/js/scripts.js` -- All files get concat, and minified into one scripts.js<br />

2. CSS<br />
`/src/css/*` -> `/css/style.css` -- All files get concat into one style.css<br />
`/src/css/base`<br />
`/src/css/components`<br />
`/src/css/utilities`style.scss <br />

3. SVG<br />
`/src/svg/*.svg` -> `/img/spritemap.svg`<br />

Include SVG’s using via the code below:
``` html
<svg>
      <use xlink:href="PATH/img/spritemap.svg#FILE-NAME"></use>
<svg>
```
The FILE-NAME above should not include .svg at the end of it just as it is above.

### Ignored from this repository are the following
- *~
- *.keep
- .DS_Store
- .sass-cache
- _assets
- node_modules
- bkp
- bkp/
- bkp/*
- css/config.rb
- scss/.sass-cache
- scss/.sass-cache/*
