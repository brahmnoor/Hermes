Backend set up in FastAPI.

-- Set up Env in PowerShell
$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\brahm\Documents\Hermes\Hermes\backend\key.json"


-- Run FastAPI
 uvicorn main:app --reload
 
 
## Inspiration

In a world adjusting to a new normal. We don't want to constantly look over our shoulders; taking precautions and staying hygienic should be simple. While social distancing we often look for the best route to our destination that facilitates maximum distance from crowds. Hermes automates the mental navigation you instinctively do to algorithmically provide the most optimal path that's not only short but also allows you to remain always socially distant.

## What it does

Hermes takes images from existing camera infrastructure (like CCTVs) and builds a computer vision model on top of it. Using CV, it recognizes where people are and uses that information to chart out a path for you which allows you to remain always socially distant. It also is capable of using signals like wind direction to see when you might need to maintain more than 6 feet distance.

This process happens on our website which allows you to select your current position and destination on an image, and shows you the shortest path to your destination with the most social distancing.

## How we built it

We took inspiration from various existing Computer Vision platforms and trained a model with stadium layouts and mock-ups. The model was trained to draw bounding boxes around humans. We used Google Cloud Vision API for building our ML infrastructure.

Then we built a backend on FastAPI. This used information provided by the user to fetch the most recent image of the area that they are interested in going to (stadium seats for example). This backend also used our ML infrastructure to draw bounding boxes around humans in that image. Once we had this information, we sent it to the frontend using REST APIs.

The front-end was the hardest part. Once we had the image, as well as bounding boxes, we had to create a custom path finding algorithm in Javascript. We based this off some complex geometry as well as the A* algorithm for finding the best path (with some restrictions). Further, we used PIXI.js to draw overlays on images that depict start and end points and the optimal traveling path with least distance and most social distancing. 

## Challenges we ran into

We faced some issues while trying to understand different computer vision technologies and tools to train our own model, but there's nothing that a good amount of StackOverflow and coding forums cannot solve. 

Building the front-end took us the longest time because of the amount of user interaction that we had as well as the fact that we had to create an interactive image in a web interface (which is a tough challenge). Further, we were also using JS to build our path finding algorithm, so testing it and figuring out the edge cases also took a while, but the end product made it all worth it!

## Accomplishments that we're proud of

- Creating a versatile product that requires minimal setup investments.
- Figuring out Computer Vision and integrating it with our own custom Data Management.
- Drawing graphics with Javascript & PIXI based on information from the backend.
- Programmatically creating the most optimal path for a user using geometry and A* algorithm.
- Figuring out a way to get people out there during COVID and still ensuring their safety!

## What we learned

- Training and customizing preexisting ML models to our specifications
- Server side complexities when hosting using FastAPI
- Drawing overlays with javascript and PIXI.js
- Combining FastAPI and javascript
- Math, so much math - for the path finding algorithm

## What's next for Hermes - Computer Vision + Social Distancing

- Live path finding based on video streams.
- More detailed object detection.
- Use on campuses to map out running and jogging tracks.
- Increase our use cases to more public events such as theaters, concerts, and live events.
- Use real-time location data to prevent people from crossing each other.
