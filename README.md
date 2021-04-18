Backend set up in FastAPI.

-- Set up Env in PowerShell
$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\brahm\Documents\Hermes\Hermes\backend\key.json"


-- Run FastAPI
 uvicorn main:app --reload
 
 
 ## Inspiration
In a world adjusting to a new normal. We don't want to constantly look over our shoulders, taking precautions and staying hygienic should be simple.

## What it does
Hermes takes images from existing camera infrastructure (like CCTVs), allows you to select your destination on an image, and shows you the shortest path to your destination with the most social distancing. 

## How we built it
A minimal combination of CSS and javascript for our web interface. We used Google Cloud's Vision API and some custom modifications in Python3 to distinguish between different elements in our environment. 

## Challenges we ran into
Understanding the API and working with Computer Vision.

## Accomplishments that we're proud of
- Creating a versatile product that requires minimal setup investments
- Figuring out Computer Vision and integrating it with our own custom Data Management 
- Drawing graphics with Javascript based on information from the backend

## What we learned
- How computer vision and Google Cloud Vision API works
- Base model classes
- Drawing graphics with niche js modules 

## What's next for Hermes - Computer Vision + Social Distancing
- Live path finding based on video streams
- More detailed object detection 
- Integration with Google Maps and Street View
