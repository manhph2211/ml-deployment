FROM nvidia/cuda:11.8-base

WORKDIR /app

RUN apt-get update \
    && apt-get install -y python3.8 python3.8-dev python3-pip \
    && ln -s /usr/bin/python3.8 /usr/bin/python \
    && python -m pip install --no-cache-dir torch==2.0.0+cu118 -f https://download.pytorch.org/whl/torch_stable.html

COPY requirements.txt .

RUN python -m pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8080

CMD ["torchserve", "--start", "--model-store", "model_store", "--models", "waveglow_synthesizer.mar"]
