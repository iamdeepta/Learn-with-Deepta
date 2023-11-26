
const object = [
    {
      name: "Mr Noodles",
      retailprice: 270,
      discountprice: 260,
    },

    {

        name: "Maggi",
        retailprice : 170,
        discountprice: 160,
      
    },
    {
        name: "Mama noodles",
        retailprice : 200,
        discountprice : 180,
    },
  ];


  const sumOfprice = object.reduce((sum, curElement) => {
    return (sum = sum + curElement.discountprice + curElement.retailprice);
  }, 0);

  console.log(sumOfprice);
  