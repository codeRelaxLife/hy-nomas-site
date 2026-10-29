export const checked = '2026-10-29';
export const sources = {
  port: 'https://github.com/PedroMarinhoDev/ComfyUI-Hy-Nomas',
  readme: 'https://github.com/PedroMarinhoDev/ComfyUI-Hy-Nomas',
  weights: 'https://huggingface.co/PedroMarinhoDev/Hy-Nomas-ComfyUI',
  encoder: 'https://huggingface.co/Comfy-Org/Qwen-Image/tree/main/split_files/text_encoders',
  official: 'https://huggingface.co/tencent/Hy-Nomas',
  code: 'https://github.com/Tencent-Hunyuan/Hy-Nomas',
  notice: 'https://github.com/PedroMarinhoDev/ComfyUI-Hy-Nomas/blob/main/NOTICE',
  license: 'https://huggingface.co/PedroMarinhoDev/Hy-Nomas-ComfyUI/blob/main/LICENSE-NVIDIA-ONEWAY-NONCOMMERCIAL.txt',
};
export const demoInfo = {
  fps: 24, resolution: '1280 × 704', smallResolution: '832 × 480',
  segmentSeconds: 5, segmentSamplingSeconds: 17, cachePassSeconds: 5,
  decodeSeconds: 91, worldSeconds: 20, segments: 4, totalTime: '3 min 15 s',
  imageExtraTime: '2–6 s', driveTurnSeconds: 1, driveTime: '3.5–4 s',
  driveSampleTime: '4.3 s', historyFrames: 18, imageLatentFrames: 3,
  source: sources.readme, verifiedOn: checked,
};
export const files = [
  {name:'hy_nomas_distil_int8.safetensors', folder:'models/diffusion_models', size:'9.06 GB', url: sources.weights, source:'Port model files', verifiedOn:checked},
  {name:'hy_nomas_pixelumm_fp8.safetensors', folder:'models/vae', size:'9.13 GB', url:sources.weights, source:'Port model files', verifiedOn:checked},
  {name:'qwen_2.5_vl_7b_fp8_scaled.safetensors', folder:'models/text_encoders', size:'9.38 GB', url:sources.encoder, source:'Comfy-Org', verifiedOn:checked},
];
export const reports = [
  {setup:'RTX 4090 · ComfyUI port', result:'10 seconds of 1280 × 704 video in 85 seconds; 832 × 480 in 34 seconds. Warm run, two 5-second segments.', source:'Port author’s README', url:sources.readme+'#speed-and-memory', verifiedOn:checked},
  {setup:'12 / 16 / 24 GB · simulated', result:'93 / 91 / 89 seconds respectively for 10 seconds at 1280 × 704. Simulated on an RTX 4090 by holding back the rest of its memory, before the last kernel fusions. Not measured on a 12, 16 or 24 GB card.', source:'Port author’s README', url:sources.readme+'#speed-and-memory', verifiedOn:checked},
  {setup:'RTX 4090 · 20-second world', result:'About 3 minutes 15 seconds at 1280 × 704, including 91 seconds of decoding. Starting from an image adds 2–6 seconds, according to the port author.', source:'Port author’s README', url:sources.readme+'#speed-and-memory', verifiedOn:checked},
];
export const answers = [
  {
    question: 'What is Hy-Nomas?',
    answer: 'Hy-Nomas is an interactive video world model released by Tencent Hunyuan. It generates a world in successive segments that can be guided with text and camera movement.',
    source: sources.official, sourceLabel: 'Tencent model card', verifiedOn: checked,
  },
  {
    question: 'Can I run Hy-Nomas in ComfyUI?',
    answer: 'Yes. A third-party ComfyUI port provides nodes and example workflows. Install the node pack, download the DiT, PixelUMM decoder and text encoder, then open a workflow. The port is a work in progress; this site has not tested it locally.',
    source: sources.readme+'#quick-start', sourceLabel: 'Port quick start', page: '/comfyui/', pageLabel: 'ComfyUI setup guide', verifiedOn: checked,
  },
  {
    question: 'How much VRAM does Hy-Nomas need?',
    answer: 'The port author lists an NVIDIA GPU with 12 GB or more, but the 12 GB and 16 GB results were simulated by limiting available memory on an RTX 4090. They are not measurements on those cards. System RAM and settings also matter.',
    source: sources.readme+'#what-you-need', sourceLabel: 'Port hardware requirements', page: '/vram/', pageLabel: 'Hardware reports', verifiedOn: checked,
  },
  {
    question: 'Can Hy-Nomas start from an image?',
    answer: 'The ComfyUI port offers a Start From Image workflow. The port author explains that it encodes the image into the world’s history; this is a port feature, not a native image input trained into the underlying model.',
    source: sources.readme+'#start-from-an-image', sourceLabel: 'Port image workflow', page: '/comfyui/', pageLabel: 'ComfyUI setup guide', verifiedOn: checked,
  },
  {
    question: 'How do I control the camera in Hy-Nomas?',
    answer: 'In the ComfyUI port, use Camera Recording to record a path with W/A/S/D and arrow keys, or use Camera Keys for a typed timeline such as "W 2, W+Left 1.5, idle 0.5". A camera path exported from Tencent’s demo can be pasted into Camera Recording under { } JSON. Drive mode lets you steer the world one turn at a time.',
    source: sources.readme+'#how-it-works', sourceLabel: 'Port camera controls', page: '/comfyui/#camera-control', pageLabel: 'Camera control guide', verifiedOn: checked,
  },
  {
    question: 'Can I use Hy-Nomas commercially?',
    answer: 'Check the licenses for the specific files and intended use. The port’s NOTICE says the PixelUMM decoder weights and their fine-tunes are subject to the NVIDIA One-Way Noncommercial License, which limits use to non-commercial research and evaluation.',
    source: sources.license, sourceLabel: 'PixelUMM license text', page: '/about/', pageLabel: 'Licensing information', verifiedOn: checked,
  },
];
