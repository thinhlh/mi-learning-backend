FROM python:3.10
WORKDIR /code
COPY ./auth/requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
COPY ./auth/src /code/src
CMD ["uvicorn", "src.main:app", "--port", "80"]
