from fastapi import FastAPI, Response
from fastapi.responses import FileResponse
from jinja2 import Environment, FileSystemLoader
from weasyprint import HTML, CSS
from fastapi.middleware.cors import CORSMiddleware
import os
import tempfile
from mangum import Mangum

app = FastAPI()

# Jinja2 setup
templates_dir = os.path.join(os.path.dirname(__file__), "templates")
env = Environment(loader=FileSystemLoader(templates_dir))

origins = os.getenv("ALLOWED_ORIGINS", "")
ALLOWED_ORIGINS = [o.strip() for o in origins.split(",")]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["Content-Disposition"],
)

@app.post("/generate-pdf")
async def generate_pdf(data: dict):
    """
    Expects a JSON like:
    {
      "bill_no": "617",
      "bill_date": "16/08/2025",
      "customer_name": "PRIYA MACHINE MANDIDEEP",
      "items": [
        {
          "cn_no": "1147", "cn_date": "16/08/25",
          "weight": "FTL", "rate": "FIXED",
          "freight": "27000/-", "detention": "-",
          "other_exp": "-", "vehicle_no": "GJ23AW-7158",
          "from_city": "Bhopal", "to_city": "Baroda",
          "bill_amount": "27000/-"
        }
      ],
      "grand_total": "27000/-",
      "amount_words": "TWENTY THOUSAND ONLY"
    }
    """
    # Load template
    template = env.get_template("bill_template.html")
    html_content = template.render(**data)

    # Generate PDF
    bill_no = data.get("bill_no", "unknown")
    filename = f"Bill_No_{bill_no}.pdf"
    headers = {
      "Content-Disposition": f'attachment; filename="{filename}"'
    }
    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmpfile:
        HTML(string=html_content).write_pdf(tmpfile.name)
        return FileResponse(tmpfile.name, media_type="application/pdf", filename=filename)

handler = Mangum(app)