from fastapi import FastAPI, Request
from fastapi.routing import RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel

app = FastAPI()
templates = Jinja2Templates(directory="src/reaction_time_test/templates")

app.mount(
    path="/static",
    app=StaticFiles(directory="src/reaction_time_test/static"),
    name="static",
)


class ReactionTime(BaseModel):
    reaction_time: float


@app.get("/", name="main_page")
def main_page(request: Request):
    return templates.TemplateResponse(request, name="index.html")


@app.get("/results", name="result_page")
def result_page(request: Request):
    return templates.TemplateResponse(
        request,
        name="result.html",
        context={"currentScore": 69.696969, "bestScore": 29.292929},
    )


@app.post("/submit_reaction_time", name="submit")
def submit_reaction_time(request: Request, reaction_time: ReactionTime):
    results_url = request.url_for("results_page")
    return RedirectResponse(url=results_url)
