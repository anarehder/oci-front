import cpuCalcService from "./cpuCalcService";

function estimateReshapeCPUValues(reshape, OCPU, maxCPU, meanCPU) {
  let newOCPU;
  
  if (reshape.includes("-CPU")) {
    newOCPU = cpuCalcService.estimateCPUreduce(maxCPU, meanCPU, OCPU);
  } else if (reshape.includes("+CPU")) {
    newOCPU = cpuCalcService.estimateCPUincrease(maxCPU, meanCPU, OCPU);
  } else {
    return {newOCPU: "-"};
  }
  return { newOCPU };
}

const reshapeCPUService = { estimateReshapeCPUValues };

export default reshapeCPUService;