# Reaction Time Test

A simple reaction time tester built with **FastAPI**, **JavaScript**, and **Jinja2**, featuring a retro-inspired interface.

## Features

- Measures reaction time in milliseconds.
- Randomized waiting time before the signal appears.
- Displays reaction time results on a separate page.
- Retro-inspired user interface.
- Lightweight backend powered by FastAPI.

## Tech Stack

- **Backend:** Python, FastAPI
- **Frontend:** JavaScript, HTML, CSS
- **Templating:** Jinja2
- **Package management:** uv

## Installation

Clone the repository:

```bash
git clone https://github.com/TheWost/Random_Pratice_reaction_test_fastapi.git
cd reaction_time_test
```

Install dependencies:

```bash
uv sync
```

## Run the application

Start the development server:

```bash
uv run fastapi dev src/reaction_time_test/main.py
```

Open your browser at:

```text
http://127.0.0.1:8000
```

## Project Structure

```text
reaction_time_test/
├── pyproject.toml
├── pyrightconfig.json
├── README.md
├── uv.lock
└── src/
    └── reaction_time_test/
        ├── __init__.py
        ├── main.py
        ├── static/
        │   ├── js/
        │   │   ├── elements.js
        │   │   ├── main_page.js
        │   │   ├── result.js
        │   │   └── utils.js
        │   └── style.css
        └── templates/
            ├── index.html
            └── result.html
```

## Credits

- Retro design inspiration: [NovusGFX - Retro Design System](https://github.com/NovusGFX/retro-design-system)
