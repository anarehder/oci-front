import memoryCalcService from "./memoryCalcService";

function estimateReshapeMEMValues(reshape, MEM, maxMEM, meanMEM) {
  let newMEM;
  
  if (reshape.includes("-MEM")) {
    newMEM = memoryCalcService.estimateMEMreduce(maxMEM, MEM);
  } else if (reshape.includes("+MEM")) {
    newMEM = memoryCalcService.estimateMEMincrease(meanMEM, MEM);
  } else {
    return { newMEM: "-" };
  }
  return { newMEM };
}

const reshapeMEMService = { estimateReshapeMEMValues };

export default reshapeMEMService;