import cpuCalcService from "./cpuCalcService";
import memoryCalcService from "./memoryCalcService";

function estimateReshapeValues(reshape, OCPU, MEM, maxCPU, meanCPU, maxMEM, meanMEM) {
    let newOCPU, newMEM;
  
    if (reshape.includes("-CPU -MEM")) {
      newOCPU = cpuCalcService.estimateCPUreduce(maxCPU, meanCPU, OCPU);
      newMEM = memoryCalcService.estimateMEMreduce(maxMEM, MEM);
    } else if (reshape === " +CPU -MEM") {
      newOCPU = cpuCalcService.estimateCPUincrease(maxCPU, meanCPU, OCPU);
      newMEM = memoryCalcService.estimateMEMreduce(maxMEM, MEM);
    } else if (reshape === " -MEM") {
      newMEM = memoryCalcService.estimateMEMreduce(maxMEM, MEM);
      newOCPU = OCPU;
    } else if (reshape === " -CPU") {
      newOCPU = memoryCalcService.cpuCalcService.estimateCPUreduce(maxCPU, meanCPU, OCPU);
      newMEM = MEM;
    } else if (reshape === " -CPU +MEM") {
      newOCPU = cpuCalcService.estimateCPUreduce(maxCPU, meanCPU, OCPU);
      newMEM = memoryCalcService.estimateMEMincrease(meanMEM, MEM);
    } else if (reshape === " +CPU") {
      newOCPU = cpuCalcService.estimateCPUincrease(maxCPU, meanCPU, OCPU);
      newMEM = MEM;
    } else if (reshape === " +MEM") {
      newMEM = memoryCalcService.estimateMEMincrease(meanMEM, MEM);
      newOCPU = OCPU;
    } else if (reshape === " +CPU +MEM") {
      newOCPU = cpuCalcService.estimateCPUincrease(maxCPU, meanCPU, OCPU);
      newMEM = memoryCalcService.estimateMEMincrease(meanMEM, MEM);
    } else {
      return { newOCPU: "-", newMEM: "-" };
    }
  
    return { newOCPU, newMEM };
}

const reshapeCalcService = { estimateReshapeValues };

export default reshapeCalcService;