from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass

db = SQLAlchemy()


@dataclass
class Car(db.Model):
    id: id = db.Column(db.Integer, primary_key=True)
    name: str = db.Column(db.String(100), nullable=False)
    img_url: str = db.Column(db.String(250), nullable=False)

    def __init__(self, name, img_url) -> None:
        super().__init__()
        self.name = name
        self.img_url = img_url
