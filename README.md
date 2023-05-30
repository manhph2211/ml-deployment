Text to speech 
====

This repo aim to push TTS model into production using torchserve and kubernetes. 

```git clone https://github.com/manhph2211/TTSSVC && cd TTSSVC```

# Backend Service 

## Activate Environment

```
cd backend
conda create -n serve python=3.8
conda activate serve
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

* Check API:

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

