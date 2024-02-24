import json
import random
import time
from os import path
import requests
import base64
import time
import os
from datetime import datetime
import os
import json
from git import Repo
import requests

filenameA = 'A.json'
filenameB = 'B.json'
filenameC = 'C.json'
filenameD = 'D.json'
filenameE = 'E.json'





# Initialize an empty list if the file doesn't exist
data_listA = []
data_listB = []
data_listC = []
data_listD = []
data_listE = []

# # Check if the file exists
# if path.isfile(filenameA):
#     # Read existing data from the file
#     with open(filenameA, 'r') as file:
#         data_listA = json.load(file)
# if path.isfile(filenameB):
#     # Read existing data from the file
#     with open(filenameB, 'r') as file:
#         data_listB = json.load(file)
# if path.isfile(filenameC):
#     # Read existing data from the file
#     with open(filenameC, 'r') as file:
#         data_listB = json.load(file)
# if path.isfile(filenameD):
#     # Read existing data from the file
#     with open(filenameD, 'r') as file:
#         data_listB = json.load(file)
# if path.isfile(filenameE):
#     # Read existing data from the file
#     with open(filenameE, 'r') as file:
#         data_listB = json.load(file)

# Define the initial value
# Check if the lists are not empty before accessing their last elements
last_valueA = data_listA[-1]['y'][-1] if data_listA else 57
last_valueB = data_listB[-1]['y'][-1] if data_listB else 10
last_valueC = data_listC[-1]['y'][-1] if data_listC else 23
last_valueD = data_listD[-1]['y'][-1] if data_listD else 50
last_valueE = data_listE[-1]['y'][-1] if data_listE else 44



try:
    while True:
        # Generate a random value between -2.0 and 2.0
        random_incrementA = random.uniform(-2.0, 2.0)
        random_incrementB = random.uniform(-2.0, 2.0)
        random_incrementC = random.uniform(-2.0, 2.0)
        random_incrementD = random.uniform(-2.0, 2.0)
        random_incrementE = random.uniform(-2.0, 2.0)
        
        new_openA = last_valueA
        new_highA = max(last_valueA, new_openA + random.uniform(-1.0, 1.0))
        new_lowA = min(last_valueA, new_openA - random.uniform(-1.0, 1.0))
        new_closeA = random.uniform(new_lowA, new_highA)

        new_openB = last_valueB
        new_highB = max(last_valueB, new_openB + random.uniform(-1.0, 1.0))
        new_lowB = min(last_valueB, new_openB - random.uniform(-1.0, 1.0))
        new_closeB = random.uniform(new_lowB, new_highB)

        new_openC = last_valueC
        new_highC = max(last_valueC, new_openC + random.uniform(-1.0, 1.0))
        new_lowC = min(last_valueC, new_openC - random.uniform(-1.0, 1.0))
        new_closeC = random.uniform(new_lowC, new_highC)

        new_openD = last_valueD
        new_highD = max(last_valueD, new_openD + random.uniform(-1.0, 1.0))
        new_lowD = min(last_valueD, new_openD - random.uniform(-1.0, 1.0))
        new_closeD = random.uniform(new_lowD, new_highD)

        new_openE = last_valueE
        new_highE = max(last_valueE, new_openE + random.uniform(-1.0, 1.0))
        new_lowE = min(last_valueE, new_openE - random.uniform(-1.0, 1.0))
        new_closeE = random.uniform(new_lowE, new_highE)

        # Update last value
        new_valueA = last_valueA + random_incrementA
        new_valueB = last_valueB + random_incrementB
        new_valueC = last_valueC + random_incrementC
        new_valueD = last_valueD + random_incrementD
        new_valueE = last_valueE + random_incrementE
        
        # Update timestamp
        # timestamp = time.strftime('%H%M%S')
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        
        # Create new data dictionary
        # data_pointA = {
        #     "timestamp": timestamp,
        #     "value": new_valueA
        # }
        data_pointA = {
            "x": timestamp,
            "y": [new_openA,new_highA,new_lowA,new_closeA]
        }
        data_pointB = {
            "x": timestamp,
            "y": [new_openB,new_highB,new_lowB,new_closeB]
        }
        data_pointC = {
            "x": timestamp,
            "y": [new_openC,new_highC,new_lowC,new_closeC]
        }
        data_pointD = {
            "x": timestamp,
            "y": [new_openD,new_highD,new_lowD,new_closeD]
        }
        data_pointE = {
            "x": timestamp,
            "y": [new_openE,new_highE,new_lowE,new_closeE]
        }
        
        # Append the new data to the JSON file

        # Append the new data point to the list
        data_listA.append(data_pointA)
        data_listB.append(data_pointB)
        data_listC.append(data_pointC)
        data_listD.append(data_pointD)
        data_listE.append(data_pointE)
        
        # Update last value for the next iteration
        # last_valueA = new_valueA
        last_valueA = new_closeA
        last_valueB = new_valueB
        last_valueC = new_valueC
        last_valueD = new_valueD
        last_valueE = new_valueE
        
        # Write the updated data back to the file
        with open(filenameA, 'w') as file:
            json.dump(data_listA, file, indent=4)
        with open(filenameB, 'w') as file:
            json.dump(data_listB, file, indent=4)
        with open(filenameC, 'w') as file:
            json.dump(data_listC, file, indent=4)
        with open(filenameD, 'w') as file:
            json.dump(data_listD, file, indent=4)
        with open(filenameE, 'w') as file:
            json.dump(data_listE, file, indent=4)
        
        print(f"Appended data A point: {data_pointA}")
        print(f"Appended data B point: {data_pointB}")
        print(f"Appended data C point: {data_pointC}")
        print(f"Appended data D point: {data_pointD}")
        print(f"Appended data E point: {data_pointE}")
        
        # Sleep for a while before appending the next data point
        time.sleep(30)

except KeyboardInterrupt:
    print("\nKeyboard interrupt detected. Exiting...")
