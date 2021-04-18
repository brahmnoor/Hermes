from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import io
import os

# Imports the Google Cloud client library
from google.cloud import vision

# import the image module
from PIL import Image

from fastapi.staticfiles import StaticFiles

# Instantiates a client
client = vision.ImageAnnotatorClient()

# Change this
host_url = "http://127.0.0.1:8000/"

class Vertex(BaseModel):
    x : float
    y : float

class BoundingPolynomial(BaseModel):
    vertices : List[Vertex]

class ImageWithBoundingBox(BaseModel):
    image_url : str
    polynomials : List[BoundingPolynomial]



file_list = []

for i in range(6):
    # The name of the image file to annotate
    createdFileName = f'static/test_file_{i}.jpeg'
    file_name = os.path.abspath(createdFileName)
    file_list.append(file_name)

def localize_objects(path):
    """Localize objects in the local image.

    Args:
    path: The path to the local file.
    """
    with open(path, 'rb') as image_file:
        content = image_file.read()
    image = vision.Image(content=content)

    objects = client.object_localization(
        image=image).localized_object_annotations
    print('Number of objects found: {}'.format(len(objects)))
    length_of_obs = 'Number of objects found: {}'.format(len(objects))
    for object_ in objects:
        print('\n{} (confidence: {})'.format(object_.name, object_.score))
        print('Normalized bounding polygon vertices: ')
        for vertex in object_.bounding_poly.normalized_vertices:
            print(' - ({}, {})'.format(vertex.x, vertex.y))
    return length_of_obs


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="static"), name="static")



@app.get("/getStadium/{ticket_id}", response_model = ImageWithBoundingBox)
def root(ticket_id):
    # Get the image associated with the ticket_id and store it in the image_number
    image_number = 0 # between 0 and 5
    path = file_list[image_number]
    bounding_labels = {"Person", "People", "Crowd"}

    with open(path, 'rb') as image_file:
        content = image_file.read()
    
    image = vision.Image(content=content)

    with Image.open(path) as pImage:
        width, height = pImage.size

    objects = client.object_localization(
        image=image).localized_object_annotations

    bounding_polynomials = ImageWithBoundingBox(image_url = host_url + "static/test_file_" + str(image_number) + ".jpeg", polynomials = [])

    for object_ in objects:
        if object_.name in bounding_labels:
            bounding_polynomial = BoundingPolynomial(vertices = [])
            for v in object_.bounding_poly.normalized_vertices:
                bounding_polynomial.vertices.append(Vertex(x = width*v.x, y = height*v.y))
            bounding_polynomials.polynomials.append(bounding_polynomial)

    return bounding_polynomials
