from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route("/quiz/<tense>", methods=["GET"])
def quiz(tense):
    file_map = {
    "present": "./data/present.json",
    "past": "./data/past.json",
    "future": "./data/future.json"
}

    try:
        with open(file_map[tense], "r", encoding="utf-8") as f:
            data = json.load(f)
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 404

if __name__=="__main__":
    app.run(debug=True)
