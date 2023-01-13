from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import text
import json
from dataclasses import dataclass

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://admin:admin@db:3306/lesson'
PREFIX = "/api/cars"

db = SQLAlchemy(app)


@dataclass
class Car(db.Model):
    id: id = db.Column(db.Integer, primary_key=True)
    name: str = db.Column(db.String(100), nullable=False)
    img_url: str = db.Column(db.String(250), nullable=False)

    def __init__(self, name, img_url) -> None:
        super().__init__()
        self.name = name
        self.img_url = img_url


def sendResponse(status=True, data=None, message=""):
    return jsonify({'status': status, 'data': data, 'message': message})


@app.route(PREFIX + '/', methods=['GET'])
def index():
    cars = Car.query.all()
    return sendResponse(
        data={'cars': cars},
        message='Cars successfully recovered'
    )


@app.route(PREFIX + '/<id>', methods=['GET'])
def show(id):
    car = Car.query.get(id)

    if not car:
        return sendResponse(message='Car not found', status=False)

    return sendResponse(
        data={'car': car},
        message='Car successfully recovered'
    )


@app.route(PREFIX + "/", methods=['POST'])
def create():
    data = json.loads(request.data)

    if not all(k in data for k in ("name", "img_url")):
        return sendResponse(message="Invalid body", status=False)

    newCar = Car(name=data['name'], img_url=data['img_url'])
    db.session.add(newCar)
    db.session.commit()

    return sendResponse(
        data={'car': newCar},
        message='Car successfully created'
    )


@app.route(PREFIX + '/<id>', methods=['PUT'])
def update(id):
    car = Car.query.get(id)

    if not car:
        return sendResponse(message="Car not found", status=False)

    data = json.loads(request.data)

    if not all(k in data for k in ("name", "img_url")):
        return sendResponse(message="Invalid body", status=False)

    car.name = data['name']
    car.img_url = data['img_url']

    db.session.add(car)
    db.session.commit()

    return sendResponse(
        data={'car': car},
        message='Car successfully updated'
    )


@app.route(PREFIX + '/<id>', methods=['DELETE'])
def delete(id):
    car = Car.query.get(id)

    if not car:
        return sendResponse(message="Car not found", status=False)

    db.session.delete(car)
    db.session.commit()

    return sendResponse(message='Car successfully deleted')
