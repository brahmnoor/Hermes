from fastapi import FastAPI
import io
import os

# Imports the Google Cloud client library
from google.cloud import vision

# Instantiates a client
client = vision.ImageAnnotatorClient()

file_list = []

for i in range(6):
    # The name of the image file to annotate
    createdFileName = f'testfile{i}.jpeg'
    file_name = os.path.abspath(createdFileName)
    file_list.append(file_name)

def localize_objects(path):
    """Localize objects in the local image.

    Args:
    path: The path to the local file.
    """
    from google.cloud import vision
    client = vision.ImageAnnotatorClient()

    with open(path, 'rb') as image_file:
        content = image_file.read()
    image = vision.Image(content=content)

    objects = client.object_localization(
        image=image).localized_objectannotations

    print('Number of objects found: {}'.format(len(objects)))
    for object in objects:
        print('\n{} (confidence: {})'.format(object.name, object.score))
        print('Normalized bounding polygon vertices: ')
        for vertex in object_.bounding_poly.normalized_vertices:
            print(' - ({}, {})'.format(vertex.x, vertex.y))


for i in file_list:
    print(f'\n {i}')
    localize_objects(i)


app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}