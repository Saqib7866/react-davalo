const products = [
  {
    _id: "1",
    name: "Surbex 1",
    size: "Small",
    type: "Syrup",
    oldPrice: 550,
    price: 449,
    Brand: 'Neutrogena 1',
    detailedName:'Neutrogena Spot Controlling Oil-free Facial',
    description:' It is formulated with clear defend technology to help clear spots and defend against new breakouts from first use for healthy looking, spot proof skin. It is best suitable for sensitive skin. It consists of Salicylic acid as the main ingredient which helps preventing the acne. It is a oil-free scrub which is the best feature for spot prone skin.',
    discountpercent: 10,
    selectedQuantity:1,
    productCartTotal:0
  },
  {
    _id: "2",
    name: "Surbex 2",
    size: "Large",
    type: "Tablet",
    oldPrice: 456,
    price: 123,
    Brand: 'Neutrogena 2',
    detailedName:'Neutrogena Spot Controlling Oil-free Facial',
    description:' It is formulated with clear defend technology to help clear spots and defend against new breakouts from first use for healthy looking, spot proof skin. It is best suitable for sensitive skin. It consists of Salicylic acid as the main ingredient which helps preventing the acne. It is a oil-free scrub which is the best feature for spot prone skin.',
    discountpercent: 10,
    selectedQuantity:1,
    productCartTotal:0
  },
  {
    _id: "3",
    name: "Surbex 3",
    size: "Medium",
    type: "Tablet",
    oldPrice: 789,
    price: 321,
    Brand: 'Neutrogena 3',
    detailedName:'Neutrogena Spot Controlling Oil-free Facial',
    description:' It is formulated with clear defend technology to help clear spots and defend against new breakouts from first use for healthy looking, spot proof skin. It is best suitable for sensitive skin. It consists of Salicylic acid as the main ingredient which helps preventing the acne. It is a oil-free scrub which is the best feature for spot prone skin.',
    discountpercent: 10,
    selectedQuantity:1,
    productCartTotal:0
  },
  {
    _id: "4",
    name: "Surbex 4",
    size: "Medium",
    type: "Syrup",
    oldPrice: 951,
    price: 200,
    Brand: 'Neutrogena 4',
    detailedName:'Neutrogena Spot Controlling Oil-free Facial',
    description:' It is formulated with clear defend technology to help clear spots and defend against new breakouts from first use for healthy looking, spot proof skin. It is best suitable for sensitive skin. It consists of Salicylic acid as the main ingredient which helps preventing the acne. It is a oil-free scrub which is the best feature for spot prone skin.',
    discountpercent: 10,
    selectedQuantity:1,
    productCartTotal:0
  },
  {
    _id: "5",
    name: "Surbex 5",
    size: "Small",
    type: "Syrup 5",
    oldPrice: 100,
    price: 90,
    Brand: 'Neutrogena 5',
    detailedName:'Neutrogena Spot Controlling Oil-free Facial',
    description:' It is formulated with clear defend technology to help clear spots and defend against new breakouts from first use for healthy looking, spot proof skin. It is best suitable for sensitive skin. It consists of Salicylic acid as the main ingredient which helps preventing the acne. It is a oil-free scrub which is the best feature for spot prone skin.',
    discountpercent: 10,
    selectedQuantity:1,
    productCartTotal:0
  },
  {
    _id: "6",
    name: "Surbex 6",
    size: "Small",
    type: "Syrup",
    oldPrice: 250,
    price: 230,
    Brand: 'Neutrogena 6',
    detailedName:'Neutrogena Spot Controlling Oil-free Facial',
    description:' It is formulated with clear defend technology to help clear spots and defend against new breakouts from first use for healthy looking, spot proof skin. It is best suitable for sensitive skin. It consists of Salicylic acid as the main ingredient which helps preventing the acne. It is a oil-free scrub which is the best feature for spot prone skin.',
    discountpercent: 10,
    selectedQuantity:1,
    productCartTotal:0
  },
  {
    _id: "7",
    name: "Surbex 7",
    size: "Small",
    type: "Syrup",
    oldPrice: 900,
    price: 950,
    Brand: 'Neutrogena 7',
    detailedName:'Neutrogena Spot Controlling Oil-free Facial',
    description:' It is formulated with clear defend technology to help clear spots and defend against new breakouts from first use for healthy looking, spot proof skin. It is best suitable for sensitive skin. It consists of Salicylic acid as the main ingredient which helps preventing the acne. It is a oil-free scrub which is the best feature for spot prone skin.',
    discountpercent: 10,
    selectedQuantity:1,
    productCartTotal:0
  },
  {
    _id: "8",
    name: "Surbex 8",
    size: "Small",
    type: "Syrup",
    oldPrice: 900,
    price: 800,
    Brand: 'Neutrogena 8',
    detailedName:'Neutrogena Spot Controlling Oil-free Facial',
    description:' It is formulated with clear defend technology to help clear spots and defend against new breakouts from first use for healthy looking, spot proof skin. It is best suitable for sensitive skin. It consists of Salicylic acid as the main ingredient which helps preventing the acne. It is a oil-free scrub which is the best feature for spot prone skin.',
    discountpercent: 10,
    selectedQuantity:1,
    productCartTotal:0
  },
];

export function getproducts() {
  return products;
}

export function getproductbyId(id) {
  return products.find((x) => x._id === id);
}
