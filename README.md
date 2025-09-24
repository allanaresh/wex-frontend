# WEX Coding Challenge

production ready url: https://wex-frontend.netlify.app/
environment variable configured for backend in the production
backend url: https://wex-backend-eca0.onrender.com/api/
if you want to see the data in the browser : https://wex-backend-eca0.onrender.com/api/cars

# To run locally

Git repo backend: https://github.com/allanaresh/wex-backend
clone the above git repo

### `npm install`

### `npm run dev`

Server runs on PORT : 3001

Git repo frontend: https://github.com/allanaresh/wex-frontend
clone the above git repo

### `npm install`

create .env file and add the below line:
REACT_APP_API_BASE_URL=http://localhost:3001/api

### `npm start`

# Overview

This project contains 4 main navigation pages i.e, Dashboard, Gallary, Favorites and About.

# Dashboard

(1) In Dashboard page we have interactive bar chart and static stats are available with all the data sets.
(2) When you click chart
(a) By default it will show ALL data set.
(b) Blue color bar chart USA region data set will shown below.
(c) Green color bar chart EUROPE region data set will shown below.
(d) Blue color bar chart JAPAN region data set will shown below.
(e) After interaction if you would like to see all the dataset, just toggle the last clicked one.
(3) When you click on the dataset card, it will navigate you to the deatils page.
To come back the main screen you can click Back button on the right hand side.

# Gallery

(1) when you navigate to Gallary page all the datasets will be shown with filter bar.
(2) Filter bar contains
(a) Search with car name
(b) Sort by with different options
(c) Origin (USA, Europe and Japan) base.
This is interactive one whenever you have typed search or selected option automatically filtered dataset will be shown.

    You have a option to save the search as favorites.
    Saved favorites you can see on the Favorites page.
    You can reset the filter options.

    You can click on any dataset to see the deatils.
    You can click Back button to navigate to Gallary page.

# Favorites

    Favorites data set you can see in this page.
    You can click any card, that will show you the details of the dataset.
    You can click back button to navigate to Favorites page.
    You can remove the favorites by clicking the star button.

# About

    About is just static page. given some dummy data.
