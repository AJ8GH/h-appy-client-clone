# H-Appy

| [Team Members](#team-members) | [Description](#description) | [Tech Stack](#tech-stack) | [Installation](#installation) | [Usage](#usage) | [Code Stats](#code-stats) | [Project goals](#project-goals) |

An app to remind you of fun things to do that make you happy.

A group project, being the final project of the Makers Academy software development bootcamp. The aim of the project is to work in a team, using high-quality processes to build an app (see [below](#project-goals) for more detailed project goals).

There are two repos associated with this project. This repo is for the app client; the repo for our server can be found at [https://github.com/AJ8GH/h-appy-server](https://github.com/AJ8GH/h-appy-server).

Our video presentation of the app can be found [insert link here].

[Badges]

---

## Team Members

[Adam Jonas](https://github.com/AJ8GH)

[Iain Aitken](https://github.com/iainaitken)

[Jack Gumoes](https://github.com/jgumoes)

[Joey Hornsby](https://github.com/jshorns)

[Nicolas Bermejo](https://github.com/NicolasBermejo)

[Peter Allen](https://github.com/peter-james-allen)

---

<div style="text-align: right"><a href="#makers-bnb">Back to top</a></div>

## Description

An IOS app based around the idea of a [dopamine menu](https://www.youtube.com/watch?v=-6WCkTwW6xg).

When you're bored, it can be difficult to choose an activity to relieve that boredom, in the same way that it can be difficult to make good food decisions when you're already hungry. Often, we end up doing things that just don't make us feel any better - like spending all day on social media, or eating unhealthy food.

A dopamine menu is a list of activities grouped into different categories. It can help you decide what to do to alleviate your boredom in an appropriate way.

Our app uses concepts found in restaurant menus to provide an easy-to-understand user interface:

* Looking for something to provide a quick dopamine boost? Check out the appetiser menu.
* Looking for a much more involved activity that will give you real satisfaction and fulfillment? Try the mains instead.
* How about an indulgent activity that you really shouldn't do very often? You'll find what you're looking for in the desserts section.
* Don't fancy anything on the menu? Maybe one of the Chef's Specials can tempt you instead.

By default, users will see a list of suggestions provided by the app. A signed-in user can tailor the menu suggestions by marking some of those suggested activities as favourites, which appear at the top of the menu.

Users can also add their own bespoke activities to the menu.

There is a separate back-end database that holds details of activities and users, hosted [here](https://github.com/AJ8GH/h-appy-server). It is accessed through an API, which we have hosted on https://happy-haddocks.herokuapp.com/. The app has full CRUD functionality, in that users can create, read, edit and delete activities.

---

<div style="text-align: right"><a href="#makers-bnb">Back to top</a></div>

## Tech Stack

### Codebase

* React Native
* MongoDB
* Express
* Node
* Expo

### Testing Framework

Front-end:

* Jest

Back-end:

* Chai

---

<div style="text-align: right"><a href="#h-appy">Back to top</a></div>

## Installation

Clone this repo:

```bash
git clone https://github.com/peter-james-allen/h-appy-client.git
```

Navigate to the project folder:

```bash
cd h-appy-client
```

Install dependencies:

```
npm i
```

Start the server:

```
npm start
```

You will need to have Expo CLI installed to run the app. You will also need Xcode installed to run the app on an iOS simulator, and Android Studio installed to run it on an Andrid virtual machine.

press `I` once the server is running to launch the app on an iOS simulator, press `A` to open it in an Android simulator.


<div style="text-align: right"><a href="#makers-bnb">Back to top</a></div>

## Usage

### Main Menu

On opening the app, the main menu will be displayed:

[screenshot]

### Activities



### Signing Up



### Creating an activity



### Editing an activity



### Deleting an activity

---

<div style="text-align: right"><a href="#makers-bnb">Back to top</a></div>

## Code Stats



---

<div style="text-align: right"><a href="#makers-bnb">Back to top</a></div>

## Project Goals

The primary goal of the project is to create an app in a development team, using industry-standard development processes.

In particular:

* Use of Agile methodologies to develop the project.
* Identify a Minimum Viable Product at the outset and work to getting that up and running before adding any other features.
* Use of Test-Driven Development to build the project, achieving a high level of test coverage.
* Making use of user stories to outline the application and as the basis for writing feature tests.
* Use git branching to implement a successful workflow pattern.
* Pair programming.
* Good distribution of work; all members of the team should understand why any part of the application exists and how it works.
* High-quality work.

---

<div style="text-align: right"><a href="#makers-bnb">Back to top</a></div>
