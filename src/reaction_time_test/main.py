from dataclasses import dataclass

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


@dataclass
class ScoreHistory:
    current_score: int | None = None
    best_score: int | None = None
    new_best: int | None = None


score_history = ScoreHistory()


class ReactionTime(BaseModel):
    reaction_time: int


@app.get("/", name="main_page")
def main_page(request: Request):
    return templates.TemplateResponse(request, name="index.html")


@app.get("/results", name="result_page")
def result_page(request: Request):
    return templates.TemplateResponse(
        request,
        name="result.html",
        context={
            "currentScore": score_history.current_score,
            "bestScore": score_history.best_score,
            "newBest": score_history.new_best,
        },
    )


@app.post("/submit_reaction_time", name="submit")
def submit_reaction_time(request: Request, data: ReactionTime):
    score_history.current_score = data.reaction_time

    score_history.new_best = (
        score_history.best_score is None
        or data.reaction_time < score_history.best_score
    )

    if score_history.new_best:
        score_history.best_score = data.reaction_time

    results_url = request.url_for("result_page")
    return RedirectResponse(url=results_url, status_code=303)
