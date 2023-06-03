Text to speech Service
====

This repo aim to push a simple TTS model into production using torchserve and kubernetes. I also add Jenkine file for a simple CI/CD pipeline. I always aim to build clear template for you to even make better product :smile: Check out my previous [template](https://github.com/manhph2211/Image-Generation-App) in which I play with Jax, FastAPI, Streamlit and Docker-Compose if you're interested. 

```git clone https://github.com/manhph2211/TTSSVC && cd TTSSVC```

# Backend Service 

## Activate Environment

```
cd backend
conda create -n tts_app python=3.8
conda activate tts_app
```

## Install Dependencies

```
pip install torch==2.0.0+cu118 -f https://download.pytorch.org/whl/torch_stable.html
pip install -r requirements.txt
```

## Serve the WaveGlow speech synthesis model on TorchServe

* Generate the model archive for waveglow speech synthesis model:

   ```
   bash ./create_mar.sh
   ```

* Run torchserve API:
   ```
   torchserve --start --model-store model_store --models waveglow_synthesizer.mar --ts-config config.properties
   ```

* Check API and see the audio output:

   ```
   python client.py
   ```

## Deploy on Kubernetes

If you want to further deploy your app on Kubernetes Clusters, you can first install the Kubernetes command-line tool, kubectl, allows you to run commands against Kubernetes clusters.

Next, adjust the config files (kubeconfig.yaml, deployment.yaml, service.yaml) to yours

Then you need to build and push your image into dockerhub:

```
docker login
docker build -t app . 
docker tag app user/app 
docker push user/app
```


```
export KUBECONFIG=kubeconfig.yaml 
kubectl apply -f deployment.yaml 
kubectl apply -f service.yaml 
```

# Frontend Service

I used React for developing my TTS demo. I won't share this for now LeuLeu :)) :smiley:

Anyway, run this for the app: 

```
cd frontend
npm i  && npm start
```

or with docker:

```
docker build -t ttsdemo .
docker run -p 3000:3000 ttsdemo
```
