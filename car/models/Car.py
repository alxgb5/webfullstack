from dataclasses import dataclass
from models.Connection import db


@dataclass
class Car(db.Model):
    id: id = db.Column(db.Integer, primary_key=True)
    name: str = db.Column(db.String(100), nullable=False)
    img_url: str = db.Column(db.String(250), nullable=False)
    price: int = db.Column(db.Integer(), nullable=False)

    def __init__(self, name, img_url, price) -> None:
        super().__init__()
        self.name = name
        self.img_url = img_url
        self.price = price
