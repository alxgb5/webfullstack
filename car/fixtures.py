from app import app, db, Car

with app.app_context():
    db.create_all()
    mercedes = Car(name="Mercedes",
                   img_url="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVyY2VkZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60")
    bmw = Car(name="BMW", img_url="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")
    audi = Car(name="Audi", img_url="https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80")

    db.session.add(mercedes)
    db.session.add(bmw)
    db.session.add(audi)

    db.session.commit()
