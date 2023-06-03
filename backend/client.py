import requests

files = {'data': open('sample_text.txt','rb')}
response = requests.post('http://localhost:8083/predictions/waveglow_synthesizer', files=files)
data = response.content

with open('audio.wav', 'wb') as audio_file:
    audio_file.write(data)