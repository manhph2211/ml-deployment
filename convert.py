import torch

def load_and_save_cpu_model(input_path):
    # Load the model from the input path
    model = torch.load(input_path, map_location=torch.device('cpu'))

    # Save the model as a CPU file
    torch.save(model, input_path)

if __name__ == "__main__":
    load_and_save_cpu_model("nvidia_tacotron2pyt_fp32_20190427.pth")
    load_and_save_cpu_model("nvidia_waveglowpyt_fp32_20190427.pth")