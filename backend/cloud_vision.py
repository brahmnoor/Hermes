import io
import os

# Imports the Google Cloud client library
from google.cloud import vision

# Instantiates a client
client = vision.ImageAnnotatorClient()
client.max_results = 50

file_list = []

for i in range(6):
    # The name of the image file to annotate
    createdFileName = f'test_file_{i}.jpeg'
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
    newFileName = f'{path[:-5]}.json'
    newFile = open(newFileName, 'w')
    newFile.writelines(objects.__str__())
    print('Number of objects found: {}'.format(len(objects)))
    # for object_ in objects:
    #     print('\n{} (confidence: {})'.format(object_.name, object_.score))
    #     print('Normalized bounding polygon vertices: ')
    #     for vertex in object_.bounding_poly.normalized_vertices:
    #         print(' - ({}, {})'.format(vertex.x, vertex.y))


for i in file_list:
    print(f'\n {i}')
    localize_objects(i)