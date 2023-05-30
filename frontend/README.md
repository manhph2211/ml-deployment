Speechstudio
====

# Introduction

Web-based application for SSML Text-to-Speech system. Some supported features includes:

- SSML tags: Break, Prosody, Lang, Voice, Audio ...
- Multi Style-Speaker TTS: Automatic Style and Transfer 

# Usage

In this repo, I containerized the app with docker and ochestrated with Kubernetes in Linode. Just make sure you are okay with that, go here [tutorial](https://www.youtube.com/watch?v=7bA0gTroJjw&ab_channel=NetworkChuck).

Note that before deploy with kubenetes, you need to build and push your images into dockerhub and then basically, you follow the commands:

```
export KUBECONFIG=kubeconfig.yaml # get the kubeconfig.yaml from linode
kubectl run speechstudio --image=maxph21/speechstudio --port=3000 # for single pod
kubectl apply -f deployment.yaml # custom depliyment with multiple pods/replicas
kubectl apply -f service.yaml # custom loadbalancer
kubectl get pods ... # check pods
kubectl get deployments ... # check pods
kubectl get services ... # check pods
kubectl describe pods ... 
kubectl logs pods ... -p
```