from flask import Flask, jsonify, request
import json

app = Flask(__name__)

@app.route("/", methods=["GET"])
def hello():
    return jsonify({"Hello": "World ssss"}) 

@app.route("/add", methods=['POST'])
def add():
    data = json.loads(request.data)
    return jsonify(data["a"] + data["b"])