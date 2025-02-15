import json

box = {"width":100,"height":120}
print(type(box))

with open('box.txt','w') as f:
    json.dump(box,f,indent=4)

with open('box.txt','r') as f:
    loaded=json.load(f)
    print(type(loaded))