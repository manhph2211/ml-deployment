Text to speech 
====

This repo aim to push TTS model into production using torchserve and AWS EC2. CI/CD and Container Ochestration will also used to make sure product works well.
`git clone https://github.com/manhph2211/TTSSVC && cd TTSSVC`

# Backend 

## Activate Environment

```
cd backend
conda create -n serve python=3.8
conda activate serve
```

## Install Dependencies

```
pip install torch==1.7.1+cu110 -f https://download.pytorch.org/whl/torch_stable.html
pip install torchserve torch-model-archiver torch-workflow-archiver
pip install -r requirements.txt
```

## Serve the WaveGlow speech synthesis model on TorchServe

 * Generate the model archive for waveglow speech synthesis model using following command

    ```bash
    ./create_mar.sh
    ```

 * Register the model on TorchServe using the above model archive file

    ```bash
    mkdir model_store
    mv waveglow_synthesizer.mar model_store/
    torchserve --start --model-store model_store --models waveglow_synthesizer.mar
    ```

  * Run inference and download audio output using python script (on another terminal):

    ```
    python client.py
    ```
 
# Frontend

I used React for TTS demo and deploy product using EC2. 
 ```
 cd frontend
 npm install 
 npm start
 ```
