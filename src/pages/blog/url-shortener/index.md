---
title: Shorter URL's with Netlify
date: '2018-12-29'
section: blog
shortdesc: general
---

When you deploy a site to **Netlify** you can specify redirections through a `_redirects` file in the root folder of the project.

We can make use of that that to create a really simple service for ourselves to shorten URL's with a short domain we have.

For example [ptk.wtf/git](http://ptk.wtf/git) points to my GitHub profile page.

#### Step 1

Create a project

`> npm init`

`> git init`

#### Step 2

Create a `_redirects` file like this in the project root
[(**read more**)](https://www.netlify.com/docs/redirects/)

```
/gh     https://github.com/
/*      http://www.google.com
```

<br>

#### Step 3

Create a repository in [GitHub](https://github.com).

Commit and push:

```
git add .
git commit -m "wow"
git push origin master
```

<br>

#### Step 4

Open [Netlify](https://app.netlify.com/).  
Click on the **New site from Git** and authorize Netlify with GitHub.

Pick your repository you just created.

There's really no need for configurations so just click the  
**Deploy site** button.

**Done.**

You should see your site live soon.

Browse to https://your-netlify-url.netlify.com/gh and you should see GitHub!

Custom domain can be set up by clicking the **Domain settings** button.

Scroll down and click on the **Add custom domain** button and write your desired domain on the input.

If you don't own the domain it will ask if you'd like to buy it.

#### Moar

You can avoid editing the \_redirects file manually with [netlify-shortener](https://github.com/kentcdodds/netlify-shortener).

install it as a dev dependency:

`npm i -D netlify-shortener`

Add the following to your `package.json`:

```javascript
  "scripts": {
    "shorten": "netlify-shortener"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/YOURNAME/YOURREPO.git"
  },
```

<br>

After this we can run the local dependency like: `npm run shorten https://google.com googel`  
It's nice but we'd rather do it globally

Easiest way to accomplish this is with a windows box to install [Cmder](http://cmder.net/) as your goto command-line tool. I recommend using Cmder over cmd.exe anyways.
You can then edit the `user-alias.cmd` file in your `/path/to/cmder/config/` folder.

Add the following in the file: `shorten=cmd /c "cd /d {path-to-local-repo} && npm run shorten $1 $2"`

**There we go!**

_I did not come up with this! Credits to [Kent C. Dodds and his netlify-shortener](https://github.com/kentcdodds/netlify-shortener)_
