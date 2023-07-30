# for deleting unused files. delete this later.

from pathlib import Path
import urllib.parse

all_files = Path(".").rglob("*")

needed = """/C:/Users/USER/Desktop/JJ/html%20stuff/live2d%20spine%20player/hi3_seele_cg/serverless/Seele's%20Amazing%20Kitchen!_files/index_65ce6ac4fb230ddcf28e.js
/C:/Users/USER/Desktop/JJ/html%20stuff/live2d%20spine%20player/hi3_seele_cg/serverless/Seele's%20Amazing%20Kitchen!_files/main.1.js
/C:/Users/USER/Desktop/JJ/html%20stuff/live2d%20spine%20player/hi3_seele_cg/serverless/Seele's%20Amazing%20Kitchen!_files/main.2.js
/C:/Users/USER/Desktop/JJ/html%20stuff/live2d%20spine%20player/hi3_seele_cg/serverless/Seele's%20Amazing%20Kitchen!_files/main.3.js
/C:/Users/USER/Desktop/JJ/html%20stuff/live2d%20spine%20player/hi3_seele_cg/serverless/Seele's%20Amazing%20Kitchen!_files/main.js
/C:/Users/USER/Desktop/JJ/html%20stuff/live2d%20spine%20player/hi3_seele_cg/serverless/Seele's%20Amazing%20Kitchen!_files/sentry-vue.tracing.es5.min.js
/C:/Users/USER/Desktop/JJ/html%20stuff/live2d%20spine%20player/hi3_seele_cg/serverless/Seele's%20Amazing%20Kitchen!_files/styles_4c1d41ef18f6ffd46d97.js
/C:/Users/USER/Desktop/JJ/html%20stuff/live2d%20spine%20player/hi3_seele_cg/serverless/Seele's%20Amazing%20Kitchen!_files/vendors_587d813a2d6d20ae113c.js
/C:/Users/USER/Desktop/JJ/html%20stuff/live2d%20spine%20player/hi3_seele_cg/serverless/Seele's%20Amazing%20Kitchen!_files/vue.min.js
/C:/Users/USER/Desktop/JJ/html%20stuff/live2d%20spine%20player/hi3_seele_cg/serverless/admin/mi18n/bh3_global/20190812_5d51512fdef47/otherText.js
/C:/Users/USER/Desktop/JJ/html%20stuff/live2d%20spine%20player/hi3_seele_cg/serverless/admin/mi18n/bh3_global/m20230529hy157rjq4g/eventText.js
/C:/Users/USER/Desktop/JJ/html%20stuff/live2d%20spine%20player/hi3_seele_cg/serverless/admin/mi18n/plat_oversea/m05302259261621/platText.js
/C:/Users/USER/Desktop/JJ/html%20stuff/live2d%20spine%20player/hi3_seele_cg/serverless/audio_b64.js
/C:/Users/USER/Desktop/JJ/html%20stuff/live2d%20spine%20player/hi3_seele_cg/serverless/favicon.ico
/C:/Users/USER/Desktop/JJ/html%20stuff/live2d%20spine%20player/hi3_seele_cg/serverless/images2_b64.js
/C:/Users/USER/Desktop/JJ/html%20stuff/live2d%20spine%20player/hi3_seele_cg/serverless/images_b64.js
/C:/Users/USER/Desktop/JJ/html%20stuff/live2d%20spine%20player/hi3_seele_cg/serverless/index.html
/C:/Users/USER/Desktop/JJ/html%20stuff/live2d%20spine%20player/hi3_seele_cg/serverless/jsons_b64.js
/C:/Users/USER/Desktop/JJ/html%20stuff/live2d%20spine%20player/hi3_seele_cg/serverless/styles_f7a376af325356e9babf.css
/notes.md
/temp.py""".split("\n")

needed = [Path(urllib.parse.unquote(x[1:])) for x in needed]

def is_needed(path):
    if str(path).startswith(".git"):
        return True
    
    for x in needed:
        if path.samefile(x):
            return True
    return False

dirs = []
for file in all_files:   
    if not is_needed(file):
        if file.is_file():            
            file.unlink(missing_ok=True)
            print(file, " deleted")
        elif file.is_dir():
            dirs.append(file)
       

for dir in dirs:
    try:
        dir.rmdir()
    except Exception as e:
        print("dir not empty: ", dir)
