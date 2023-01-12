from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import text
import json

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://admin:admin@db:3306/lesson'

db = SQLAlchemy(app)


class Car(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    img_url = db.Column(db.String(250), nullable=False)

    def __init__(self, name, img_url) -> None:
        super().__init__()
        self.name = name
        self.img_url = img_url


@app.route("/add", methods=['POST'])
def add():
    data = json.loads(request.data)
    return jsonify(data["a"] + data["b"])
