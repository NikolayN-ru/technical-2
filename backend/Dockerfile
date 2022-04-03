# FROM python:3.7-slim
FROM python:3.7

WORKDIR /app

COPY requirements.txt .

RUN apt-get update
RUN python -m pip install --upgrade pip
# RUN pip install -r requirements.txt
RUN pip install django
# RUN pip install asgiref
# RUN pip install backports.zoneinfo
# RUN pip install sqlparse

COPY . .