function getCost(shape, OCPU, MEM) {
    let OCPU_id, MEM_id;
    
    try {
      OCPU_id = dict_shapes[shape][0];
    } catch (error) {
      console.log("Erro ao obter OCPU!");
    }
  
    try {
      MEM_id = dict_shapes[shape][1];
    } catch (error) {
      MEM_id = false;
    }
  
    let price_value = 0;
    const currency_code = 'BRL';
  
    if (shape === 'VM.Standard.A1.Flex' && (OCPU <= 4 && MEM <= 24)) {
      return 0;
    } else {
      for (const item of OCIPrices.items) {
        if (item.partNumber === OCPU_id) {
          for (const currency of item.currencyCodeLocalizations) {
            if (currency.currencyCode === currency_code) {
              for (const price of currency.prices) {
                if (price.model === 'PAY_AS_YOU_GO') {
                  price_value = price.value;
                  break;
                }
              }
              break;
            }
          }
          break;
        }
      }
  
      let cost = OCPU * price_value * 720;
  
      if (MEM_id) {
        for (const item of OCIPrices.items) {
          if (item.partNumber === MEM_id) {
            for (const currency of item.currencyCodeLocalizations) {
              if (currency.currencyCode === currency_code) {
                for (const price of currency.prices) {
                  if (price.model === 'PAY_AS_YOU_GO') {
                    price_value = price.value;
                    break;
                  }
                }
                break;
              }
            }
            break;
          }
        }
        const MEMcost = MEM * price_value * 720;
        cost += MEMcost;
      }
  
      cost = cost.toFixed(2);
  
      return cost;
    }
}
