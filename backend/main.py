from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()


app.frontend("/", directory="../frontend/dist")

@app.get("/api")
def read_api():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}
