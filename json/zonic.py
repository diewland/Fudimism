import json
 
FROM_ID = 0
TO_ID = 9999
OUT_PATH = "./zonic/{}.json"

NAME = "Jai Kae Rae Zonic Edition #{}"
DESC = "I'm a little boy, flow on a wild world."
IMG = "ipfs://bafybeicntot2kkgynzwsbpenmws7qpgq3krozsxrjoncwseimsgbihvnry"
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
  "image": IMG,
  "attributes": ATTRS,
  "compiler": ENGINE,
}

for id in range(FROM_ID, TO_ID+1):
    metadata["name"] = NAME.format(id)
    with open(OUT_PATH.format(id), "w") as f:
        json.dump(metadata, f)
