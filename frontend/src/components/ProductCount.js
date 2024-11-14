const getProductCounts = (x) => {
  console.log("start")  
  
  let productCounts = [];
    

    const itemDetails = x.map(item => item.orderItems)
    console.log("items detail",itemDetails.length)
   

    console.log("order items", itemDetails);
    itemDetails.forEach(orderItem => {
      const productName = orderItem[0].name;
      console.log('test',orderItem.length)
      const order = orderItem[0]


      const duplicate = productCounts.find(item => item.name === productName)
      console.log("duplicate",duplicate)

      if (!duplicate) {
        console.log("info", order.name,order.qty)
        const temp = {
          name: order.name,
          qty: order.qty
        }

        productCounts = [...productCounts,temp]

        // productCounts[productName] += orderItem.qty;
      } else {
        // productCounts.find(item => item.name === productName)
        duplicate.qty = duplicate.qty + order.qty

        // productCounts[productName] = 1;
      }
    });
    // return Object.entries(productCounts).map(([name, count]) => ({ name, count }));
   
    return productCounts
  };

  export default getProductCounts
