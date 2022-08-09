import json
 
TOKEN_SIZE = 10
START_ID = 1

NAME = "Jai Kae Rae OP Edition"
DESC = "I'm a little boy, flow on a wild world."
IMG = "https://diewland.github.io/Fudimism/assets/jai_kae_rae.png"
ATTRS = [
    # standard
    {
      "trait_type": "Collection",
      "value": NAME, 
    },
    # custom
    #{
    #  "trait_type": "Rarity",
    #  "value": "Unrevealed",
    #},
]
ENGINE = "Jigsaw Engine"

tpl = {
  "name": "<FILL-IN-LOOP>",
  "description": DESC,
  "image": IMG,
  "attributes": ATTRS,
  "compiler": ENGINE,
}

for id in range(0, TOKEN_SIZE):
    tpl["name"] = "{} #{}".format(NAME, id)
    with open("./{}.json".format(START_ID + id), "w") as f:
        json.dump(tpl, f)
