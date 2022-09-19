import json
 
TOKEN_SIZE = 10
TOKEN_START = 0

NAME = "Jai Kae Rae {} Edition #{}"
DESC = "I'm a little boy, flow on a wild world."
ATTRS = [
    {
      "trait_type": "Source",
      "value": "fud-thai", 
    },
]
ENGINE = "Jigsaw Engine"

metadata = {
  "name": "***",
  "description": DESC,
  "image": "***",
  "attributes": ATTRS,
  "compiler": ENGINE,
}

CONFIG = [
    [ "AB",     "https://diewland.github.io/Fudimism/assets/ab.png" ],
    [ "Nova",   "https://diewland.github.io/Fudimism/assets/nova.png" ],
]

for (network, img) in CONFIG:
    for id in range(0, TOKEN_SIZE):
        metadata["name"] = NAME.format(network, id)
        metadata["image"] = img
        with open("{}/{}".format(network, TOKEN_START + id), "w") as f:
            json.dump(metadata, f)
