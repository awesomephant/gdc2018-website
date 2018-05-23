# Camberwell GD Degree Show Website
Hello excellent human.

To work on the site, you need to 

1. [Install Jekyll](https://jekyllrb.com/docs/installation/) on your machine
2. [Install git](https://git-scm.com/)
3. Clone this repo by running `git clone https://github.com/awesomephant/gdc2018-website.git`
4. Navigate to the folder in your command line and run `jekyll serve` to build the site and start a local development server. If you get an error message, try `bundle install` followed by `bundle exec jekyll serve`
5. Go to [127.0.01](http://120.0.0.1) in your browser
6. After you've made changes, `git commit` and `git push` to add them to the repo

If you've found an issue with the site, please do [open an issue](https://github.com/awesomephant/gdc2018-website/issues) on here.

## Adding people's names, websites etc.

Edit [this spreadsheet](https://docs.google.com/spreadsheets/d/1GBtwPRINskwA2Z1xna2HFu7Va75kbirYydWrfQxWR_o/edit#gid=0) to edit people's names and websites. **Do not** edit `names.csv` directly. 

## Adding images

The images on the website are randomly chosen from a list of images on page load. To add an image to the rotation:

1. Place the image file in `./assets/images`.
2. Add the filename to the bottom of `./data/images.csv`. The `id` field allows us to credit the person who made the image. Look into `names.csv` to find the right ID.

## Deployment

To deploy the website for the first time, follow these instructions:

1. In the root directory, create a file named `credentials.json` with the following contents:
```
{
    "production": {
        "username": "[FTP Username goes here]",
        "password": "[FTP Password goes here]"
    }
}
```

2. Run `npm i`
3. `grunt deploy`

On subsequent deployments, running `grunt deploy` will be enough.

## Typefaces

We're using [GT America](https://www.grillitype.com/typeface/gt-america) for the website, but we can't keep the font files in this repo [because of this](https://pixelambacht.nl/2017/github-font-piracy/). 
Once you've obtained the files (via email etc.), place them into `/assets/` to enable them on the website.