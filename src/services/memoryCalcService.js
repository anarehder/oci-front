function estimateMEMreduce(maxMEM, MEM) {
    let estimatedMEM = ((Number(maxMEM) * 1.1) / 100) * Number(MEM);
    estimatedMEM = Math.ceil(estimatedMEM);
    return estimatedMEM;
}
  
  function estimateMEMincrease(meanMEM, MEM) {
    let estimatedMEM = (Number(meanMEM) / 200) * Number(MEM) + Number(MEM);
    estimatedMEM = Math.ceil(estimatedMEM);
    return estimatedMEM;
}

  
const memoryCalcService = { estimateMEMreduce, estimateMEMincrease };

export default memoryCalcService;