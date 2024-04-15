function estimateMEMreduce(maxMEM, MEM) {
    let estimatedMEM = ((maxMEM * 1.1) / 100) * MEM;
    estimatedMEM = Math.ceil(estimatedMEM);
    return estimatedMEM;
}
  
  function estimateMEMincrease(meanMEM, MEM) {
    let estimatedMEM = (meanMEM / 200) * MEM + MEM;
    estimatedMEM = Math.ceil(estimatedMEM);
    return estimatedMEM;
}

  
const memoryCalcService = { estimateMEMreduce, estimateMEMincrease };

export default memoryCalcService;