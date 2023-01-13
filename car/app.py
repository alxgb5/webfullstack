from flask import Flask
from models.Car import db
from controllers import CarController

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://admin:admin@db:3306/lesson'
PREFIX = "/api/cars"

db.init_app(app)


@app.route(PREFIX + '/', methods=['GET'])
def index():
    return CarController.index()


@app.route(PREFIX + '/<id>', methods=['GET'])
def show(id):
    return CarController.show(id)


@app.route(PREFIX + "/", methods=['POST'])
def create():
    return CarController.create()


@app.route(PREFIX + '/<id>', methods=['PUT'])
def update(id):
    return CarController.update(id)


@app.route(PREFIX + '/<id>', methods=['DELETE'])
def delete(id):
    return CarController.delete(id)
