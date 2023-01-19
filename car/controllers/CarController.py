from flask import jsonify, request
from models.Car import db, Car
import json


def sendResponse(status=True, data=None, message=""):
    return jsonify({'success': status, 'data': data, 'message': message})


def index():
    cars = Car.query.all()
    return sendResponse(
        data={'cars': cars},
        message='Cars successfully recovered'
    )


def show(id):
    car = Car.query.get(id)

    if not car:
        return sendResponse(message='Car not found', status=False)

    return sendResponse(
        data={'car': car},
        message='Car successfully recovered'
    )


def create():
    data = json.loads(request.data)

    if not all(k in data for k in ("name", "img_url", "price")):
        return sendResponse(message="Invalid body", status=False)

    newCar = Car(name=data['name'],
                 img_url=data['img_url'], price=data['price'])
    db.session.add(newCar)
    db.session.commit()

    return sendResponse(
        data={'car': newCar},
        message='Car successfully created'
    )


def update(id):
    car = Car.query.get(id)

    if not car:
        return sendResponse(message="Car not found", status=False)

    data = json.loads(request.data)

    if not all(k in data for k in ("name", "img_url", "price")):
        return sendResponse(message="Invalid body", status=False)

    car.name = data['name']
    car.img_url = data['img_url']
    car.price = data['price']

    db.session.add(car)
    db.session.commit()

    return sendResponse(
        data={'car': car},
        message='Car successfully updated'
    )


def delete(id):
    car = Car.query.get(id)

    if not car:
        return sendResponse(message="Car not found", status=False)

    db.session.delete(car)
    db.session.commit()

    return sendResponse(message='Car successfully deleted')
