import os
import re
from PIL import Image


def convert():
    src = './out'
    dest = './out'

    for file in  os.listdir(src):
        
        if not re.search(r'(\.jpeg|\.png|\.jpg)', file):            
            continue

        image = Image.open(src + "/" + file)
        max_width = 1920

        if image.size[0] > max_width:            
            height = round((max_width * image.size[1]) / image.size[0])
            image = image.resize((max_width, height), Image.ANTIALIAS)
        
        name = file.replace(".png", ".jpg")
        if file != name:
            image = image.convert('RGB')
        
        image.save(dest + "/" + name, optimize = True, quality = 75)

#end convert_directory()


#end convert 

if __name__ == '__main__':
    convert()