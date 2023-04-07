import os
import numpy as np
import tensorflow as tf
import matplotlib.pyplot as plt
import PIL
import pandas as pd
from tensorflow import keras
from keras import layers
from keras.models import Sequential
from keras.preprocessing.image import ImageDataGenerator
from keras.models import Sequential
from keras.layers import Conv2D, MaxPooling2D, Flatten, Dense
from keras.callbacks import EarlyStopping

batch_size = 32
img_height = 120
img_width = 120

root_dir = "../input/pokemon-images-and-types/images/images"
files = os.path.join(root_dir)
data = pd.read_csv("./datasets/pokemon.csv")
#print(data.head())

dataSet = {}

for i, j in zip(data["Name"], data["Type1"]):
    dataSet[i] = j

labels = data["Type1"].unique()
#print(labels)

idNum = 0
pokToId = {}
for label in labels:
    pokToId[label] = idNum
    idNum+=1
#print(pokToId)

data["filename"] = data['Name'] + '.png'