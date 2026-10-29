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
export const files = [
  {name:'hy_nomas_distil_int8.safetensors', folder:'models/diffusion_models', size:'9.06 GB', url: sources.weights, source:'Port model files', verifiedOn:checked},
  {name:'hy_nomas_pixelumm_fp8.safetensors', folder:'models/vae', size:'9.13 GB', url:sources.weights, source:'Port model files', verifiedOn:checked},
  {name:'qwen_2.5_vl_7b_fp8_scaled.safetensors', folder:'models/text_encoders', size:'9.38 GB', url:sources.encoder, source:'Comfy-Org', verifiedOn:checked},
];
export const reports = [
  {setup:'RTX 4090 · ComfyUI port', result:'10 seconds of 1280 × 704 video in 85 seconds; 832 × 480 in 34 seconds. Warm run, two 5-second segments.', source:'Port author’s README', url:sources.readme+'#speed-and-memory', verifiedOn:checked},
  {setup:'12 / 16 / 24 GB · simulated', result:'93 / 91 / 89 seconds respectively for 10 seconds at 1280 × 704. The author restricted memory on a 4090; these are not tests on three cards.', source:'Port author’s README', url:sources.readme+'#speed-and-memory', verifiedOn:checked},
];
