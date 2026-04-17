export interface ANIMALSProduct {
  product_id: number;
  product_name: string;
  product_subheading: string;
  price: string;
  price_levy: string;
  calorie: string;
  spot_quantity: number;
  in_stock_value: string;
  allergens: string;
  may_contain_allergens: string;
  may_contain_allergens_text: string;
  nutrients: string;
  nutrient_details: {
    name: string;
    amount: string;
    unit: string;
  }[];
  product_img: string;
}

export const ANIMALS: ANIMALSProduct[] = [
  {
    product_id: 46,
    product_name: 'Don Simon Orange Juice 200ml',
    product_subheading:
      '<p>Refreshing orange juice, pure juice from concentrate.&nbsp;</p>',
    price: '0.01',
    price_levy: '0.00',
    calorie: '93.00',
    spot_quantity: 9,
    in_stock_value: '9 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 18(g), Energy Kcal 93(Kcal), Energy Kj 393(Kj), Fat 2(g), Fibre 1(g), Of Which Saturates 0(g), Of Which Sugars 18(g), Protein 1(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '18',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '393',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '93',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '18',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/168985124254939.png',
  },
  {
    product_id: 762,
    product_name: 'Mr Brownie Glactic  ',
    product_subheading:
      '<p>Fun brownies coated in crispy chocolate candies</p>',
    price: '0.99',
    price_levy: '0.00',
    calorie: '111.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: 'Eggs, Gluten, Milk, Wheat',
    may_contain_allergens:
      'Almonds, Brazil nuts, Cashews, Hazlenuts, Macadamias, Pecans, Pistachios, Walnuts',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 48(g), Energy Kcal 445(Kcal), Energy Kj 1861(Kj), Fat 25(g), Fibre 1(g), Of Which Saturates 4(g), Of Which Sugars 37(g), Protein 7(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '7',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '37',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '4',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '25',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '1861',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '445',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '48',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/176253384128546.png',
  },
  {
    product_id: 761,
    product_name: 'Mr Brownie Blondie',
    product_subheading:
      '<p>Feel the intense taste of vanilla and Belgian chocolate in these delicious blondies</p>',
    price: '0.99',
    price_levy: '0.00',
    calorie: '114.00',
    spot_quantity: 7,
    in_stock_value: '7 in stock',
    allergens: 'Eggs, Gluten, Soya, Wheat',
    may_contain_allergens: 'Milk',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 52(g), Energy Kcal 458(Kcal), Energy Kj 1914(Kj), Fat 25(g), Fibre 1(g), Of Which Saturates 3(g), Of Which Sugars 36(g), Protein 6(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '6',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '36',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '25',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '1914',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '458',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '52',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/176253346857391.png',
  },
  {
    product_id: 702,
    product_name: 'Keoghs Popcorn',
    product_subheading:
      '<p><span style="color: rgb(102, 102, 102);">Hand popped corn seasoned with just a sprinkling of crunchy Irish Atlantic sea salt flake. Vegan &amp; Gluten Free.</span></p>',
    price: '0.99',
    price_levy: '0.00',
    calorie: '41.00',
    spot_quantity: 18,
    in_stock_value: '18 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 44(g), Energy Kcal 414(Kcal), Energy Kj 1730(Kj), Fat 22(g), Fibre 6(g), Of Which Saturates 2(g), Protein 8(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '6',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '8',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '22',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '1730',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '414',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '44',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174696622258840.png',
  },
  {
    product_id: 59,
    product_name: 'Wholemeal American Pancakes',
    product_subheading:
      '<p>Healthy wholemeal pancakes, for a happier healthier you.&nbsp;</p>',
    price: '0.99',
    price_levy: '0.00',
    calorie: '92.00',
    spot_quantity: 14,
    in_stock_value: '14 in stock',
    allergens: 'Eggs, Gluten, Milk, Wheat',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 12(g), Energy Kcal 92(Kcal), Energy Kj 386(Kj), Fat 4(g), Fibre 0(g), Of Which Saturates 1(g), Of Which Sugars 5(g), Protein 2(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '5',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '4',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '386',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '92',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '12',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/162911862178056.png',
  },
  {
    product_id: 57,
    product_name: 'Oreo Cookies',
    product_subheading:
      "<p>Take a delicious break with OREO Chocolate Sandwich Cookies, America's favourite sandwich cookie for over 100 years. OREO cookies sandwich a rich crème filling between the bold taste of two chocolate biscuits.</p>",
    price: '0.99',
    price_levy: '0.00',
    calorie: '103.00',
    spot_quantity: 4,
    in_stock_value: '4 in stock',
    allergens: 'Gluten, Soya, Wheat',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 15(g), Energy Kcal 103(Kcal), Energy Kj 434(Kj), Fat 4(g), Fibre 1(g), Of Which Saturates 1(g), Of Which Sugars 8(g), Protein 1(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '8',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '4',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '434',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '103',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '15',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/162911861999456.png',
  },
  {
    product_id: 133,
    product_name: 'CapriSun Orange 200ml',
    product_subheading:
      '<p>Original Capri-Sun is made with real fruit juice and water and without artificial ingredients. Orange flavour.</p>',
    price: '1.49',
    price_levy: '0.00',
    calorie: '14.00',
    spot_quantity: 11,
    in_stock_value: '11 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 4(g), Energy Kcal 18(Kcal), Energy Kj 75(Kj), Fat 0(g), Fibre 0(g), Of Which Saturates 0(g), Of Which Sugars 4(g), Protein 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '4',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '75',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '18',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '4',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/162911869536880.png',
  },
  {
    product_id: 60,
    product_name: 'Rice Cakes Yoghurt Flavoured',
    product_subheading:
      '<p>Our yogurt flavoured rice cakes are a deliciously light snack.</p>',
    price: '1.49',
    price_levy: '0.00',
    calorie: '48.00',
    spot_quantity: 5,
    in_stock_value: '5 in stock',
    allergens: 'Milk, Soya',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 7(g), Energy Kcal 48(Kcal), Energy Kj 203(Kj), Fat 2(g), Of Which Saturates 2(g), Of Which Sugars 3(g), Protein 1(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '203',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '48',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '7',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/172459639842031.png',
  },
  {
    product_id: 684,
    product_name: 'Polo Mints  ',
    product_subheading:
      '<p><span style="color: rgb(102, 102, 102);">Delicious, crunchy breath freshening mint sweets&nbsp;</span></p>',
    price: '1.49',
    price_levy: '0.00',
    calorie: '18.00',
    spot_quantity: 3,
    in_stock_value: '3 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 35(g), Energy Kcal 402(Kcal), Energy Kj 1707(Kj), Fat 1(g), Of Which Saturates 98(g), Of Which Sugars 96(g), Protein 0(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '96',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '98',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '1707',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '402',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '35',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/173591268813970.png',
  },
  {
    product_id: 675,
    product_name: 'Croissant ',
    product_subheading:
      '<p>Light &amp; buttery croissant, a perfect snack. 60g</p>',
    price: '1.49',
    price_levy: '0.00',
    calorie: '175.00',
    spot_quantity: 4,
    in_stock_value: '4 in stock',
    allergens: 'Eggs, Gluten, Milk, Wheat',
    may_contain_allergens:
      'Almonds, Brazil nuts, Cashews, Hazlenuts, Macadamias, Peanuts, Pecans, Pistachios, Soya, Tree Nuts, Walnuts',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 41(g), Energy Kcal 427(Kcal), Energy Kj 1785(Kj), Fat 24(g), Fibre 3(g), Of Which Saturates 15(g), Of Which Sugars 7(g), Protein 11(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '11',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '7',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '15',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '24',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '1785',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '427',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '41',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/172663679895253.png',
  },
  {
    product_id: 47,
    product_name: 'Don Simon Apple Juice 200ml',
    product_subheading:
      '<p>Refreshing sweet apple juice, pure juice from concentrate.&nbsp;</p>',
    price: '1.49',
    price_levy: '0.00',
    calorie: '82.00',
    spot_quantity: 9,
    in_stock_value: '9 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 20(g), Energy Kcal 82(Kcal), Energy Kj 347(Kj), Fat 0(g), Fibre 0(g), Of Which Saturates 0(g), Of Which Sugars 20(g), Protein 1(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '20',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '347',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '82',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '20',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/168985080023020.png',
  },
  {
    product_id: 513,
    product_name: 'Manhattan Popcorn',
    product_subheading:
      "<p>Manhattan Popcorn is Ireland's best loved popcorn. Made from premium quality corn &amp; popped to perfection!</p>",
    price: '1.49',
    price_levy: '0.00',
    calorie: '76.00',
    spot_quantity: 7,
    in_stock_value: '7 in stock',
    allergens: '',
    may_contain_allergens:
      'Brazil nuts, Hazlenuts, Peanuts, Tree Nuts, Walnuts',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 66(g), Energy Kcal 503(Kcal), Energy Kj 2108(Kj), Fat 19(g), Fibre 16(g), Of Which Saturates 13(g), Of Which Sugars 0(g), Protein 10(g), Salt 2(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '16',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '10',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '13',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '19',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '2108',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '503',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '66',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/169036778425228.png',
  },
  {
    product_id: 725,
    product_name: 'Wrigleys Extra Spearmint Gum',
    product_subheading: '<p></p>',
    price: '1.70',
    price_levy: '0.00',
    calorie: '1.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients: 'Carbohydrate 1(g)',
    nutrient_details: [
      {
        name: 'Carbohydrate',
        amount: '1',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174696478167064.png',
  },
  {
    product_id: 724,
    product_name: 'Wrigleys Extra Cool Ice Peppermint',
    product_subheading: '<p></p>',
    price: '1.70',
    price_levy: '0.00',
    calorie: '1.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients: 'Carbohydrate 1(g)',
    nutrient_details: [
      {
        name: 'Carbohydrate',
        amount: '1',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174696473860097.png',
  },
  {
    product_id: 651,
    product_name: 'Traditional Sweet Waffle ',
    product_subheading:
      '<p><span style="color: rgb(13, 13, 13);">Crispy on the outside, fluffy on the inside, our sweet waffle is a delightful treat</span></p>',
    price: '1.79',
    price_levy: '0.00',
    calorie: '386.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: 'Barley, Eggs, Gluten, Milk, Soya, Wheat',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 50(g), Energy Kcal 429(Kcal), Energy Kj 1794(Kj), Fat 22(g), Of Which Saturates 11(g), Of Which Sugars 22(g), Protein 7(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '7',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '22',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '11',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '22',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '1794',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '429',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '50',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/171232122757921.png',
  },
  {
    product_id: 523,
    product_name: 'Cadbury Crunchie',
    product_subheading:
      '<p>Each bite brings a mouthful of honeycomb heaven. The golden centre is covered in a thick layer of Cadbury Milk Chocolate, 48g</p>',
    price: '1.99',
    price_levy: '0.00',
    calorie: '223.00',
    spot_quantity: 2,
    in_stock_value: '2 in stock',
    allergens: 'Milk',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 36(g), Energy Kcal 223(Kcal), Energy Kj 936(Kj), Fat 8(g), Fibre 1(g), Of Which Saturates 5(g), Of Which Sugars 31(g), Protein 2(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '31',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '5',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '8',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '936',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '223',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '36',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/169030184838497.png',
  },
  {
    product_id: 134,
    product_name: 'Tayto Cheese & Onion Crisps',
    product_subheading:
      "<p>Irelands' Favourite Crisp, cheese and onion potato crisps bursting with flavour.</p>",
    price: '1.99',
    price_levy: '0.00',
    calorie: '236.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: 'Gluten, Milk, Wheat',
    may_contain_allergens: 'Soya',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 53(g), Energy Kcal 523(Kcal), Energy Kj 2180(Kj), Fat 31(g), Fibre 4(g), Of Which Saturates 3(g), Of Which Sugars 2(g), Protein 6(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '4',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '6',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '31',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '2180',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '523',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '53',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/162911869659833.png',
  },
  {
    product_id: 135,
    product_name: 'Tayto - Salt & Vinegar',
    product_subheading:
      '<p>Irelands Favourite Crisp, salt and vinegar potato crisp bursting with flavour.</p>',
    price: '1.99',
    price_levy: '0.00',
    calorie: '238.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: 'Barley, Soya, Wheat',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 53(g), Energy Kcal 527(Kcal), Energy Kj 2196(Kj), Fat 32(g), Of Which Saturates 3(g), Of Which Sugars 1(g), Protein 5(g), Salt 2(g)',
    nutrient_details: [
      {
        name: 'Salt',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '5',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '32',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '2196',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '527',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '53',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/162911869686722.png',
  },
  {
    product_id: 137,
    product_name: 'Sparkling Lemon & Lime Water',
    product_subheading:
      '<p>Refreshing sparkling spring water flavoured with zesty lemon and lime.&nbsp;</p>',
    price: '1.99',
    price_levy: '0.15',
    calorie: '2.00',
    spot_quantity: 19,
    in_stock_value: '19 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 1(g), Energy Kcal 2(Kcal), Energy Kj 9(Kj), Fat 0(g), Of Which Saturates 0(g), Of Which Sugars 1(g), Protein 0(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '9',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '2',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '1',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/162911869871513.png',
  },
  {
    product_id: 138,
    product_name: ' Fruit of the Forest Sparkling Water ',
    product_subheading:
      '<p>Mixed berry fruity still water, served ice cold.</p>',
    price: '1.99',
    price_levy: '0.15',
    calorie: '0.01',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 0(g), Energy Kcal 0(Kcal), Energy Kj 0(Kj), Fat 0(g), Of Which Saturates 0(g), Of Which Sugars 0(g), Protein 0(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '0',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '0',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '0',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/162911869948162.png',
  },
  {
    product_id: 690,
    product_name: 'Hula Hoops- Barbeque  ',
    product_subheading:
      '<p><span style="color: rgb(102, 102, 102);">Barbeque Flavoured Potato Rings </span></p>',
    price: '1.99',
    price_levy: '0.00',
    calorie: '169.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: 'Milk',
    may_contain_allergens: 'Gluten',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 64(g), Energy Kcal 501(Kcal), Energy Kj 2095(Kj), Fat 25(g), Fibre 3(g), Of Which Saturates 2(g), Of Which Sugars 1(g), Protein 4(g), Salt 2(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '4',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '25',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '2095',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '501',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '64',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/173591280918081.png',
  },
  {
    product_id: 365,
    product_name: 'Tayto Treble Crunch Cheese & Onion ',
    product_subheading:
      '<p>These deliciously light and crunchy potato chips contain only 99 calories per packet and are packed full of flavour.</p>',
    price: '1.99',
    price_levy: '0.00',
    calorie: '97.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: 'Gluten, Milk, Soya',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 61(g), Energy Kcal 470(Kcal), Energy Kj 1968(Kj), Fat 22(g), Of Which Saturates 2(g), Of Which Sugars 3(g), Protein 5(g), Salt 2(g)',
    nutrient_details: [
      {
        name: 'Salt',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '5',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '22',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '1968',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '470',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '61',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/164211987613510.png',
  },
  {
    product_id: 519,
    product_name: 'Twix Twin',
    product_subheading:
      '<p><span style="color: rgb(51, 51, 51);">Twix bars consisting of a biscuit finger, topped with caramel and coated in milk chocolate.&nbsp;</span></p>',
    price: '1.99',
    price_levy: '0.00',
    calorie: '790.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: 'Gluten, Milk, Soya, Wheat',
    may_contain_allergens:
      'Brazil nuts, Hazlenuts, Peanuts, Tree Nuts, Walnuts',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 104(g), Energy Kcal 790(Kcal), Energy Kj 3308(Kj), Fat 38(g), Fibre 0(g), Of Which Saturates 22(g), Of Which Sugars 78(g), Protein 7(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '7',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '78',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '22',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '38',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '3308',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '790',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '104',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/169036786661271.png',
  },
  {
    product_id: 368,
    product_name: 'Cadbury Yellow Snack ',
    product_subheading:
      '<p>Snackable squares of delicious shortcake biscuit, covered with smooth Cadbury milk chocolate for a perfect biscuity bite!</p>',
    price: '1.99',
    price_levy: '0.00',
    calorie: '207.00',
    spot_quantity: 7,
    in_stock_value: '7 in stock',
    allergens: 'Gluten, Milk, Wheat',
    may_contain_allergens:
      'Brazil nuts, Hazlenuts, Peanuts, Tree Nuts, Walnuts',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 63(g), Energy Kcal 517(Kcal), Energy Kj 2162(Kj), Fat 26(g), Fibre 2(g), Of Which Saturates 13(g), Of Which Sugars 35(g), Protein 7(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '7',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '35',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '13',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '26',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '2162',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '517',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '63',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/164212119011769.png',
  },
  {
    product_id: 689,
    product_name: 'Hula Hoops- Salt & Vinegar  ',
    product_subheading:
      '<p><span style="color: rgb(102, 102, 102);">Salt &amp; Vinegar Flavoured Potato Rings </span></p>',
    price: '1.99',
    price_levy: '0.00',
    calorie: '120.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: 'Gluten, Milk',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 64(g), Energy Kcal 498(Kcal), Energy Kj 2086(Kj), Fat 25(g), Fibre 3(g), Of Which Saturates 2(g), Of Which Sugars 1(g), Protein 3(g), Salt 2(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '25',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '2086',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '498',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '64',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/173591285411930.png',
  },
  {
    product_id: 685,
    product_name: 'Hula Hoops Original Flavour  ',
    product_subheading:
      '<p><span style="color: rgb(102, 102, 102);">Original Salted Potato Rings </span></p>',
    price: '1.99',
    price_levy: '0.00',
    calorie: '96.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: 'Gluten, Milk',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 65(g), Energy Kcal 499(Kcal), Energy Kj 2087(Kj), Fat 25(g), Fibre 3(g), Of Which Saturates 0(g), Of Which Sugars 1(g), Protein 3(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '25',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '2087',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '499',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '65',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/173591271047464.png',
  },
  {
    product_id: 531,
    product_name: 'Cadbury Twirl',
    product_subheading:
      '<p>A light chocolatey delight. Bite through the cadbury milk chocolate coating and let the delicate swirls unfold as they melt in your mouth.</p>',
    price: '1.99',
    price_levy: '0.00',
    calorie: '252.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: 'Milk',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 58(g), Energy Kcal 526(Kcal), Energy Kj 2196(Kj), Fat 29(g), Fibre 2(g), Of Which Saturates 17(g), Of Which Sugars 58(g), Protein 7(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '7',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '58',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '17',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '29',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '2196',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '526',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '58',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/169030200265206.png',
  },
  {
    product_id: 654,
    product_name: 'Lemon Slice (Gluten Free)',
    product_subheading:
      '<p>Golden brown square shaped biscuit with a layer of lemon filling, decorated with pearl sugar.</p>',
    price: '1.99',
    price_levy: '0.00',
    calorie: '239.00',
    spot_quantity: 1,
    in_stock_value: '1 in stock',
    allergens: 'Eggs',
    may_contain_allergens: 'Almonds, Hazlenuts, Milk, Pecans',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 59(g), Energy Kcal 398(Kcal), Energy Kj 1672(Kj), Fat 17(g), Of Which Saturates 2(g), Of Which Sugars 34(g), Protein 2(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '34',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '17',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '1672',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '398',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '59',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/172459631837258.png',
  },
  {
    product_id: 374,
    product_name: 'Gluten Free Brownie',
    product_subheading: '<p>Tasty Gluten Free Sweet Treat.</p>',
    price: '1.99',
    price_levy: '0.00',
    calorie: '264.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: 'Eggs, Milk',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 31(g), Energy Kcal 264(Kcal), Energy Kj 1105(Kj), Fat 14(g), Fibre 2(g), Of Which Saturates 3(g), Of Which Sugars 19(g), Protein 3(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '19',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '14',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '1105',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '264',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '31',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/164372756993576.png',
  },
  {
    product_id: 723,
    product_name: 'Galaxy Smooth Caramel',
    product_subheading: '<p></p>',
    price: '1.99',
    price_levy: '0.00',
    calorie: '1.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients: 'Carbohydrate 1(g)',
    nutrient_details: [
      {
        name: 'Carbohydrate',
        amount: '1',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174696378950696.png',
  },
  {
    product_id: 52,
    product_name: 'Snack-A-Jacks Salt & Vinegar',
    product_subheading:
      '<p>Rice Cakes that are light, crunchy, and wonderfully tasty, Jacks Salt &amp; Vinegar Snacks are a delicious snack.</p>',
    price: '1.99',
    price_levy: '0.00',
    calorie: '96.00',
    spot_quantity: 9,
    in_stock_value: '9 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 17(g), Energy Kcal 96(Kcal), Energy Kj 404(Kj), Fat 2(g), Fibre 1(g), Of Which Saturates 0(g), Of Which Sugars 1(g), Protein 2(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '404',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '96',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '17',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/162911861494597.png',
  },
  {
    product_id: 53,
    product_name: 'Popchips - BBQ',
    product_subheading:
      '<p>BBQ flavour popped potato snacks Hungry for more? we have other flavours for you to explore.</p>',
    price: '1.99',
    price_levy: '0.00',
    calorie: '99.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 16(g), Energy Kcal 99(Kcal), Energy Kj 415(Kj), Fat 3(g), Fibre 1(g), Of Which Saturates 0(g), Of Which Sugars 1(g), Protein 2(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '415',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '99',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '16',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/162911861576239.png',
  },
  {
    product_id: 54,
    product_name: 'Popchips - Sour Cream',
    product_subheading:
      '<p>Sour Cream flavour popped potato snacks Hungry for more? we have other flavours for you to explore.</p>',
    price: '1.99',
    price_levy: '0.00',
    calorie: '95.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: 'Milk',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 14(g), Energy Kcal 95(Kcal), Energy Kj 398(Kj), Fat 4(g), Fibre 1(g), Of Which Saturates 0(g), Of Which Sugars 1(g), Protein 1(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '4',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '398',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '95',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '14',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/162911861667811.png',
  },
  {
    product_id: 55,
    product_name: 'HyGo Water',
    product_subheading: '<p>Irish Spring Water.</p>',
    price: '1.99',
    price_levy: '0.00',
    calorie: '0.01',
    spot_quantity: 23,
    in_stock_value: '23 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 0(g), Energy Kcal 0(Kcal), Energy Kj 0(Kj), Fat 0(g), Of Which Saturates 0(g), Of Which Sugars 0(g), Protein 0(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '0',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '0',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '0',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/171092379236709.png',
  },
  {
    product_id: 56,
    product_name: 'Snack-A-Jacks Sweet Chilli ',
    product_subheading:
      '<p>Light, crunchy, and wonderfully tasty, Jacks sweet chilli Snacks are a delicious treat.</p>',
    price: '1.99',
    price_levy: '0.00',
    calorie: '94.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 18(g), Energy Kcal 94(Kcal), Energy Kj 397(Kj), Fat 2(g), Fibre 1(g), Of Which Saturates 0(g), Of Which Sugars 1(g), Protein 2(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '397',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '94',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '18',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/162911861828877.png',
  },
  {
    product_id: 42,
    product_name: 'Large Sausage Roll',
    product_subheading:
      '<p>Enjoy a traditional premium pork sausage meat recipe wrapped in golden puff pastry, served fresh from the oven.</p>',
    price: '1.99',
    price_levy: '0.00',
    calorie: '273.00',
    spot_quantity: 6,
    in_stock_value: '6 in stock',
    allergens: 'Gluten, Wheat',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 29(g), Energy Kcal 270(Kcal), Energy Kj 1132(Kj), Fat 13(g), Fibre 2(g), Of Which Saturates 6(g), Of Which Sugars 1(g), Protein 8(g), Salt 2(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '8',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '6',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '13',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '1132',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '270',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '29',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174213835365989.png',
  },
  {
    product_id: 50,
    product_name: 'Large Double Chocolate Muffin',
    product_subheading:
      '<p>Incredibly moist delicious chocolate muffins that are infused with vanilla, and stuffed full of chocolate chips.</p>',
    price: '2.09',
    price_levy: '0.00',
    calorie: '140.00',
    spot_quantity: 6,
    in_stock_value: '6 in stock',
    allergens: 'Eggs, Gluten, Milk, Soya, Sulphur Dioxide (Sulphites), Wheat',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 16(g), Energy Kcal 140(Kcal), Energy Kj 586(Kj), Fat 7(g), Fibre 1(g), Of Which Saturates 1(g), Of Which Sugars 10(g), Protein 2(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '10',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '7',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '586',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '140',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '16',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/162911861263729.png',
  },
  {
    product_id: 51,
    product_name: 'Large Blueberry  Muffin',
    product_subheading:
      '<p>American style individually wrapped, soft &amp; fluffy blueberry muffin full of flavour.</p>',
    price: '2.09',
    price_levy: '0.00',
    calorie: '386.00',
    spot_quantity: 6,
    in_stock_value: '6 in stock',
    allergens: 'Eggs, Gluten, Milk, Wheat',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 47(g), Energy Kcal 354(Kcal), Energy Kj 1485(Kj), Fat 16(g), Fibre 2(g), Of Which Saturates 2(g), Of Which Sugars 25(g), Protein 5(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '5',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '25',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '16',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '1485',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '354',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '47',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/162911861397447.png',
  },
  {
    product_id: 132,
    product_name: 'Mars Bar ',
    product_subheading:
      '<p>Chocolate-malt nougat topped with a layer of caramel and covered with milk chocolate.</p>',
    price: '2.19',
    price_levy: '0.00',
    calorie: '228.00',
    spot_quantity: 24,
    in_stock_value: '24 in stock',
    allergens: 'Barley, Gluten, Milk, Soya',
    may_contain_allergens:
      'Brazil nuts, Hazlenuts, Peanuts, Tree Nuts, Walnuts',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 69(g), Energy Kcal 447(Kcal), Energy Kj 1877(Kj), Fat 17(g), Of Which Saturates 8(g), Of Which Sugars 60(g), Protein 4(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '4',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '60',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '8',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '17',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '1877',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '447',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '69',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/162911869425503.png',
  },
  {
    product_id: 48,
    product_name: 'Double Chocolate Chip Cookie',
    product_subheading:
      '<p>A classic American cookie, loaded with rich chocolate chunks for a deliciously chewy and sweet treat.</p>',
    price: '2.19',
    price_levy: '0.00',
    calorie: '374.00',
    spot_quantity: 4,
    in_stock_value: '4 in stock',
    allergens: 'Eggs, Gluten, Milk, Soya, Wheat',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 63(g), Energy Kcal 492(Kcal), Energy Kj 2061(Kj), Fat 24(g), Fibre 3(g), Of Which Saturates 13(g), Of Which Sugars 40(g), Protein 5(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '5',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '40',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '13',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '24',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '2061',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '492',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '63',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174585047522038.png',
  },
  {
    product_id: 529,
    product_name: 'KitKat',
    product_subheading:
      '<p><span style="color: rgb(59, 59, 59);">Comprising of a smooth dark chocolate layer and crispy wafer that’s perfect for enjoying with your afternoon cuppa. </span></p>',
    price: '2.19',
    price_levy: '0.00',
    calorie: '208.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: 'Gluten, Milk, Wheat',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 62(g), Energy Kcal 502(Kcal), Energy Kj 2103(Kj), Fat 25(g), Fibre 2(g), Of Which Saturates 14(g), Of Which Sugars 49(g), Protein 7(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '7',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '49',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '14',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '25',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '2103',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '502',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '62',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/169036816994738.png',
  },
  {
    product_id: 418,
    product_name: 'Nutrigrain Bar - Apple ',
    product_subheading:
      '<p><span style="color: rgb(108, 102, 91);">A soft golden baked crust made with whole wheat, wheat, wholegrain oats, barley and an apple filling.</span></p>',
    price: '2.19',
    price_levy: '0.00',
    calorie: '138.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: 'Gluten, Milk, Oats, Soya, Wheat',
    may_contain_allergens:
      'Brazil nuts, Hazlenuts, Peanuts, Tree Nuts, Walnuts',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 25(g), Energy Kcal 138(Kcal), Energy Kj 580(Kj), Fat 3(g), Fibre 1(g), Of Which Saturates 1(g), Of Which Sugars 12(g), Protein 2(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '12',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '580',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '138',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '25',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/165878577121748.png',
  },
  {
    product_id: 363,
    product_name: 'Nature Valley Honey & Oat bar ',
    product_subheading:
      '<p><span style="color: rgb(51, 51, 51);">Crunchy cereal bars made with whole grain rolled oats and honey. </span></p>',
    price: '2.19',
    price_levy: '0.00',
    calorie: '192.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: 'Gluten, Oats',
    may_contain_allergens: 'Peanuts, Soya, Tree Nuts',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 27(g), Energy Kcal 192(Kcal), Energy Kj 805(Kj), Fat 7(g), Fibre 2(g), Of Which Saturates 1(g), Of Which Sugars 12(g), Protein 3(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '12',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '7',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '805',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '192',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '27',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/164211926124297.png',
  },
  {
    product_id: 362,
    product_name: 'Nutrigrain Bar - Strawberry',
    product_subheading:
      '<p><span style="color: rgb(108, 102, 91);">A soft golden baked crust made with wholewheat, wheat, wholegrain oats, barley and a strawberry filling. </span></p>',
    price: '2.19',
    price_levy: '0.00',
    calorie: '138.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: 'Gluten, Milk, Oats, Soya, Wheat',
    may_contain_allergens:
      'Brazil nuts, Hazlenuts, Peanuts, Tree Nuts, Walnuts',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 25(g), Energy Kcal 138(Kcal), Energy Kj 581(Kj), Fat 3(g), Fibre 1(g), Of Which Saturates 1(g), Of Which Sugars 12(g), Protein 2(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '12',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '581',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '138',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '25',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/164211902942247.png',
  },
  {
    product_id: 361,
    product_name: 'Nutrigrain Bar - Blueberry',
    product_subheading:
      '<p><span style="color: rgb(108, 102, 91);">A soft golden baked crust made with wheat, wholegrain oats, barley and a blueberry filling. </span>&nbsp;</p>',
    price: '2.19',
    price_levy: '0.00',
    calorie: '138.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: 'Gluten, Milk, Oats, Soya, Wheat',
    may_contain_allergens:
      'Brazil nuts, Hazlenuts, Peanuts, Tree Nuts, Walnuts',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 25(g), Energy Kcal 138(Kcal), Energy Kj 582(Kj), Fat 3(g), Fibre 2(g), Of Which Saturates 1(g), Of Which Sugars 12(g), Protein 2(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '12',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '582',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '138',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '25',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/164211881420097.png',
  },
  {
    product_id: 139,
    product_name: 'Maltesers',
    product_subheading:
      '<p>Maltesers are delicious little honeycomb spheres covered in a creamy and delicious layer of milk chocolate that many find irresistible. Maltesers are the lighter way to enjoy chocolate.</p>',
    price: '2.19',
    price_levy: '0.00',
    calorie: '185.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: 'Barley, Gluten, Milk, Soya, Wheat',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 62(g), Energy Kcal 501(Kcal), Energy Kj 2097(Kj), Fat 25(g), Fibre 0(g), Of Which Saturates 15(g), Of Which Sugars 52(g), Protein 8(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '8',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '52',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '15',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '25',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '2097',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '501',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '62',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/162911870093261.png',
  },
  {
    product_id: 712,
    product_name: 'Triple Chocolate Chip Cookie',
    product_subheading:
      '<p>Our brand-new <strong>Triple Chocolate Chip Cookie</strong> is packed with rich, gooey chocolate chips in every bite. Soft, chewy, and freshly baked, it’s the perfect sweet treat to brighten up your day.</p>',
    price: '2.19',
    price_levy: '0.00',
    calorie: '370.00',
    spot_quantity: 6,
    in_stock_value: '6 in stock',
    allergens: 'Eggs, Gluten, Milk, Soya, Wheat',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 61(g), Energy Kcal 486(Kcal), Energy Kj 2036(Kj), Fat 24(g), Fibre 3(g), Of Which Saturates 14(g), Of Which Sugars 40(g), Protein 5(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '5',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '40',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '14',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '24',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '2036',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '486',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '61',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174696453980290.png',
  },
  {
    product_id: 136,
    product_name: 'Cadbury Dairy Milk',
    product_subheading: "<p>Ireland's favourite chocolate bar.</p>",
    price: '2.29',
    price_levy: '0.00',
    calorie: '266.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: 'Milk',
    may_contain_allergens:
      'Brazil nuts, Gluten, Hazlenuts, Peanuts, Tree Nuts, Walnuts, Wheat',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 56(g), Energy Kcal 531(Kcal), Energy Kj 2219(Kj), Fat 30(g), Fibre 2(g), Of Which Saturates 18(g), Of Which Sugars 56(g), Protein 8(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '8',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '56',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '18',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '30',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '2219',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '531',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '56',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/162911869868585.png',
  },
  {
    product_id: 517,
    product_name: 'Pringles Sour Cream',
    product_subheading:
      '<p>Pringles Sour Cream &amp; Onion are the perfect combination of green taste and savoury cream.</p>',
    price: '2.49',
    price_levy: '0.00',
    calorie: '210.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: 'Gluten, Milk, Wheat',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 22(g), Energy Kcal 210(Kcal), Energy Kj 876(Kj), Fat 12(g), Fibre 1(g), Of Which Saturates 3(g), Of Which Sugars 1(g), Protein 2(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '12',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '876',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '210',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '22',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/169036856575615.png',
  },
  {
    product_id: 518,
    product_name: 'Pringles Salt & Vinegar',
    product_subheading:
      '<p>A tasty twist on a classic snack. Pringles Salt &amp; Vinegar crisps are the perfect way to spice up your snack,</p>',
    price: '2.49',
    price_levy: '0.00',
    calorie: '206.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: 'Barley, Gluten, Milk, Wheat',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 22(g), Energy Kcal 206(Kcal), Energy Kj 859(Kj), Fat 12(g), Fibre 1(g), Of Which Saturates 1(g), Of Which Sugars 1(g), Protein 2(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '12',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '859',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '206',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '22',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/169036853676008.png',
  },
  {
    product_id: 520,
    product_name: 'Pringles BBQ',
    product_subheading:
      '<p>A tasty twist on a classic snack. Pringles Texas BBQ Sauce Crisps combines a tangy tomato sauce and spices flavour with the classic Pringles taste sensation.</p>',
    price: '2.49',
    price_levy: '0.00',
    calorie: '208.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: 'Gluten, Milk, Wheat',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 23(g), Energy Kcal 208(Kcal), Energy Kj 869(Kj), Fat 12(g), Fibre 1(g), Of Which Saturates 3(g), Of Which Sugars 2(g), Protein 2(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '12',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '869',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '208',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '23',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/169036851572574.png',
  },
  {
    product_id: 521,
    product_name: 'Pringles Original',
    product_subheading: '<p>A classic flavour for a classic crisp .</p>',
    price: '2.49',
    price_levy: '0.00',
    calorie: '213.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: 'Gluten, Wheat',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 22(g), Energy Kcal 213(Kcal), Energy Kj 891(Kj), Fat 12(g), Fibre 1(g), Of Which Saturates 3(g), Of Which Sugars 1(g), Protein 2(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '12',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '891',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '213',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '22',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/169036855123190.png',
  },
  {
    product_id: 483,
    product_name: 'Ribena Strawberry 250ml',
    product_subheading:
      '<p><span style="color: rgb(51, 51, 51);">Ribena Strawberry juice drink, the drink everyone knows and loves. Served Chilled.</span></p>',
    price: '2.49',
    price_levy: '0.00',
    calorie: '2.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 1(g), Energy Kcal 2(Kcal), Energy Kj 7(Kj), Fat 0(g), Fibre 0(g), Of Which Saturates 0(g), Of Which Sugars 1(g), Protein 0(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '7',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '2',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '1',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/168984809963027.png',
  },
  {
    product_id: 476,
    product_name: 'Ribena Blackcurrant 250ml',
    product_subheading:
      '<p><span style="color: rgb(51, 51, 51);">Ribena Blackcurrant juice drink, the drink everyone knows and loves. Served Chilled.</span></p>',
    price: '2.49',
    price_levy: '0.00',
    calorie: '44.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 11(g), Energy Kcal 44(Kcal), Energy Kj 187(Kj), Fat 0(g), Fibre 0(g), Of Which Saturates 0(g), Of Which Sugars 11(g), Protein 0(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '11',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '187',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '44',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '11',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/168977981888109.png',
  },
  {
    product_id: 721,
    product_name: 'Lucozade Energy Original 380ml',
    product_subheading:
      '<p><span style="color: rgb(102, 102, 102);">Lucozade Energy is bursting with sparkling flavour. With Glucose and Vitamin B3 to help reduce tiredness, Lucozade Energy helps you get through your day. It\'s On!</span></p>',
    price: '2.60',
    price_levy: '0.15',
    calorie: '1.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients: 'Carbohydrate 1(g), Energy Kcal 12(Kcal)',
    nutrient_details: [
      {
        name: 'Energy Kcal',
        amount: '12',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '1',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174696401724402.png',
  },
  {
    product_id: 719,
    product_name: 'Club Orange 500ml',
    product_subheading:
      '<p><span style="color: rgb(42, 47, 51);">Club Orange is made with the whole of the orange including the juice, pith and the rind which gives it its much loved delicious combination of sweet orange juice and real fruit \'bits\'.</span></p>',
    price: '2.74',
    price_levy: '0.15',
    calorie: '1.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients: 'Carbohydrate 1(g)',
    nutrient_details: [
      {
        name: 'Carbohydrate',
        amount: '1',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174696362081724.png',
  },
  {
    product_id: 720,
    product_name: 'Red Bull Energy 250ml',
    product_subheading: '<p></p>',
    price: '2.89',
    price_levy: '0.15',
    calorie: '1.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients: 'Carbohydrate 1(g)',
    nutrient_details: [
      {
        name: 'Carbohydrate',
        amount: '1',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174696306214191.png',
  },
  {
    product_id: 718,
    product_name: 'Coca-Cola Zero Sugar 500 ml',
    product_subheading:
      '<p><span style="color: rgb(0, 0, 0);">Coca-Cola Zero Sugar&nbsp;is the perfect drink for people who want all the taste of&nbsp;Coca-Cola, without the sugar or calories.</span></p>',
    price: '2.89',
    price_levy: '0.15',
    calorie: '0.10',
    spot_quantity: 7,
    in_stock_value: '7 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients: 'Carbohydrate 1(g)',
    nutrient_details: [
      {
        name: 'Carbohydrate',
        amount: '1',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174696299837483.png',
  },
  {
    product_id: 717,
    product_name: 'Coca-Cola Original 500ml',
    product_subheading:
      '<p><a href="https://www.yourcoca-cola.co.uk/brands/coca-cola-original-taste.list" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 0, 0);">Coco-Cola</a><span style="color: rgb(0, 0, 0);">&nbsp;Original Taste is the world\'s favourite soft drink&nbsp;and has been enjoyed since 1886. </span></p>',
    price: '2.89',
    price_levy: '0.15',
    calorie: '1.00',
    spot_quantity: 5,
    in_stock_value: '5 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients: 'Carbohydrate 1(g)',
    nutrient_details: [
      {
        name: 'Carbohydrate',
        amount: '1',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174696293919330.png',
  },
  {
    product_id: 692,
    product_name: 'Lucozade Zero Sugar Raspberry 500ml',
    product_subheading:
      '<p>Raspberry Flavour Isotonic Drink with Sweeteners.​ Lucozade Zero Sugar Raspberry is an isotonic sports drink which provides carbohydrates and electrolytes to enhance hydration and help maintain performance during prolonged endurance exercise.</p>',
    price: '2.99',
    price_levy: '0.15',
    calorie: '129.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 32(g), Energy Kcal 129(Kcal), Energy Kj 546(Kj), Of Which Sugars 18(g), Protein 1(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '18',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '546',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '129',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '32',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/173900965690299.png',
  },
  {
    product_id: 370,
    product_name: 'VIT HIT Immunitea Dragonfruit',
    product_subheading:
      '<p>Immunitea is a delicious juice blend of Dragonfruit and Yuzu combined with health-boosting Ceylon tea.</p>',
    price: '2.99',
    price_levy: '0.15',
    calorie: '27.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 6(g), Energy Kcal 27(Kcal), Energy Kj 113(Kj), Fat 0(g), Fibre 0(g), Of Which Saturates 0(g), Of Which Sugars 6(g), Protein 1(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '6',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '113',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '27',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '6',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/164212152926875.png',
  },
  {
    product_id: 477,
    product_name: 'VIT HIT Mandarin Detox ',
    product_subheading:
      '<p><span style="color: rgb(32, 33, 36);">Detox is a thirst quenching blend of both Mandarin &amp; Orange juice is&nbsp;a thirst-quenching 10% juice blended with spring water &amp; vitamins.</span></p>',
    price: '2.99',
    price_levy: '0.15',
    calorie: '16.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 6(g), Energy Kcal 16(Kcal), Energy Kj 67(Kj), Fat 0(g), Fibre 0(g), Of Which Saturates 0(g), Of Which Sugars 6(g), Protein 0(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '6',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '67',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '16',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '6',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/168978011968212.png',
  },
  {
    product_id: 373,
    product_name: 'VIT HIT Citrus Revive',
    product_subheading:
      '<p>Revive is a delicious blend of citrus fruits that was created for those who want to give a lift to their day, without having a sugar crash.</p>',
    price: '2.99',
    price_levy: '0.15',
    calorie: '28.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 7(g), Energy Kcal 28(Kcal), Energy Kj 119(Kj), Fat 0(g), Fibre 0(g), Of Which Saturates 0(g), Of Which Sugars 7(g), Protein 0(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '7',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '119',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '28',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '7',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/164212190750346.png',
  },
  {
    product_id: 372,
    product_name: 'VIT HIT Mango & Passionfruit',
    product_subheading:
      '<p>Perform is a delicious tropical blend of Mango and Passionfruit juice with essential Amino acids.</p>',
    price: '2.99',
    price_levy: '0.15',
    calorie: '42.00',
    spot_quantity: 9,
    in_stock_value: '9 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 3(g), Energy Kcal 42(Kcal), Energy Kj 174(Kj), Fat 3(g), Fibre 3(g), Of Which Saturates 1(g), Of Which Sugars 3(g), Protein 1(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '174',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '42',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '3',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/164212177926304.png',
  },
  {
    product_id: 371,
    product_name: 'VIT HIT Lean & Green Apple',
    product_subheading:
      '<p>Lean &amp; Green is a mouthwatering blend of Apple and Elderflower for a fresh, crisp taste combined with an antioxidant hit of Maté Tea.</p>',
    price: '2.99',
    price_levy: '0.15',
    calorie: '66.00',
    spot_quantity: 7,
    in_stock_value: '7 in stock',
    allergens: 'Sulphur Dioxide (Sulphites)',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 7(g), Energy Kcal 66(Kcal), Energy Kj 274(Kj), Fat 3(g), Fibre 3(g), Of Which Saturates 1(g), Of Which Sugars 7(g), Protein 3(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '7',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '274',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '66',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '7',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/164212166572739.png',
  },
  {
    product_id: 58,
    product_name: 'Lucozade Sport Orange 500ml',
    product_subheading:
      '<p>Orange Flavour Isotonic Drink with Sugars and Sweeteners.​ Lucozade Sport is an isotonic sports drink which provides carbohydrates and electrolytes to enhance hydration and help maintain performance during prolonged endurance exercise.</p>',
    price: '2.99',
    price_levy: '0.15',
    calorie: '129.00',
    spot_quantity: 7,
    in_stock_value: '7 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 32(g), Energy Kcal 129(Kcal), Energy Kj 546(Kj), Of Which Sugars 18(g), Protein 1(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '18',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '546',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '129',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '32',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/162911862068931.png',
  },
  {
    product_id: 369,
    product_name: 'VIT HIT Berry Boost',
    product_subheading:
      '<p>Boost is a delicious blend of summer berries, fused with water and a powerful burst of ginseng and rooibos tea.</p>',
    price: '2.99',
    price_levy: '0.15',
    calorie: '27.00',
    spot_quantity: 9,
    in_stock_value: '9 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 6(g), Energy Kcal 27(Kcal), Energy Kj 113(Kj), Fat 0(g), Fibre 0(g), Of Which Saturates 0(g), Of Which Sugars 6(g), Protein 1(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '6',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '113',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '27',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '6',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/164212138065266.png',
  },
  {
    product_id: 364,
    product_name: 'Ribena Blackcurrant 500ml',
    product_subheading:
      '<p><span style="color: rgb(51, 51, 51);">Ribena Blackcurrant juice drink, the drink everyone knows and loves. Served Chilled. </span></p>',
    price: '2.99',
    price_levy: '0.15',
    calorie: '96.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 24(g), Energy Kcal 96(Kcal), Energy Kj 408(Kj), Fat 0(g), Fibre 0(g), Of Which Saturates 0(g), Of Which Sugars 23(g), Protein 0(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '23',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '408',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '96',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '24',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/164211956748071.png',
  },
  {
    product_id: 515,
    product_name: 'Homemade Chicken & Vegetable Soup',
    product_subheading:
      '<p>Chef’s hearty chicken &amp; veg soup is the ultimate tummy warmer. Delicious tender chicken &amp; smooth root vegetables seasoned perfectly.</p>',
    price: '3.49',
    price_levy: '0.00',
    calorie: '75.00',
    spot_quantity: 23,
    in_stock_value: '23 in stock',
    allergens: 'Celery, Milk',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 6(g), Energy Kcal 43(Kcal), Energy Kj 180(Kj), Fat 1(g), Fibre 1(g), Of Which Saturates 1(g), Of Which Sugars 2(g), Protein 2(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '180',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '43',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '6',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174213805343287.png',
  },
  {
    product_id: 726,
    product_name: 'Haribo',
    product_subheading: '<p></p>',
    price: '3.49',
    price_levy: '0.00',
    calorie: '1.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients: 'Carbohydrate 1(g)',
    nutrient_details: [
      {
        name: 'Carbohydrate',
        amount: '1',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174696394655033.png',
  },
  {
    product_id: 722,
    product_name: 'Monster Energy-Original',
    product_subheading: '<p></p>',
    price: '3.70',
    price_levy: '0.15',
    calorie: '1.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: '',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients: 'Carbohydrate 1(g)',
    nutrient_details: [
      {
        name: 'Carbohydrate',
        amount: '1',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174696312375522.png',
  },
  {
    product_id: 493,
    product_name: 'Popcorn Chicken',
    product_subheading:
      '<p>Super crispy &amp; flavourful bite-size pieces of chicken.</p>',
    price: '3.99',
    price_levy: '0.00',
    calorie: '376.00',
    spot_quantity: 6,
    in_stock_value: '6 in stock',
    allergens: 'Gluten, Milk, Wheat',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 17(g), Energy Kcal 234(Kcal), Energy Kj 979(Kj), Fat 11(g), Of Which Saturates 1(g), Of Which Sugars 2(g), Protein 17(g), Salt 2(g)',
    nutrient_details: [
      {
        name: 'Salt',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '17',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '11',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '979',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '234',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '17',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174213886070531.png',
  },
  {
    product_id: 89,
    product_name: '2 x Large Sausage Rolls',
    product_subheading:
      '<p>Enjoy two traditional premium pork sausage meat rolls wrapped in golden puff pastry, served fresh from the oven.200g</p>',
    price: '3.99',
    price_levy: '0.00',
    calorie: '521.00',
    spot_quantity: 6,
    in_stock_value: '6 in stock',
    allergens: 'Gluten, Wheat',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 56(g), Energy Kcal 515(Kcal), Energy Kj 2157(Kj), Fat 25(g), Fibre 3(g), Of Which Saturates 11(g), Of Which Sugars 1(g), Protein 16(g), Salt 3(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '16',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '11',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '25',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '2157',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '515',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '56',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174213728715228.png',
  },
  {
    product_id: 110,
    product_name: 'Chicken & Stuffing on White Mega-Bite',
    product_subheading:
      '<p>Flavour in every bite. Sliced chicken breast, flavourful stuffing and mayo on thick-cut premium white sliced mega-bite bread.</p>',
    price: '3.99',
    price_levy: '0.00',
    calorie: '474.00',
    spot_quantity: 4,
    in_stock_value: '4 in stock',
    allergens: 'Eggs, Gluten, Soya, Wheat',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 26(g), Energy Kcal 215(Kcal), Energy Kj 905(Kj), Fat 5(g), Fibre 2(g), Of Which Saturates 1(g), Of Which Sugars 2(g), Protein 15(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '15',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '5',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '905',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '215',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '26',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174213761397900.png',
  },
  {
    product_id: 111,
    product_name: 'Chicken & Stuffing on Multigrain',
    product_subheading:
      '<p>Flavour in every bite. Sliced chicken breast, flavourful stuffing and mayo on thick multigrain bread.</p>',
    price: '3.99',
    price_levy: '0.00',
    calorie: '493.00',
    spot_quantity: 13,
    in_stock_value: '13 in stock',
    allergens: 'Eggs, Gluten, Soya, Wheat',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 25(g), Energy Kcal 223(Kcal), Energy Kj 939(Kj), Fat 6(g), Fibre 4(g), Of Which Saturates 1(g), Of Which Sugars 2(g), Protein 16(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '4',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '16',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '6',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '939',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '223',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '25',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174213759757013.png',
  },
  {
    product_id: 112,
    product_name: 'Ham & Cheese on White Mega-Bite',
    product_subheading:
      '<p>A hearty sandwich of Irish premium ham with red cheddar cheese on soft mega-bite white bread.</p>',
    price: '3.99',
    price_levy: '0.00',
    calorie: '468.00',
    spot_quantity: 4,
    in_stock_value: '4 in stock',
    allergens: 'Gluten, Milk, Soya, Wheat',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 23(g), Energy Kcal 238(Kcal), Energy Kj 997(Kj), Fat 10(g), Fibre 2(g), Of Which Saturates 0(g), Of Which Sugars 2(g), Protein 14(g), Salt 2(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '14',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '10',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '997',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '238',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '23',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174213801386654.png',
  },
  {
    product_id: 113,
    product_name: 'Ham & Cheese on Multigrain',
    product_subheading:
      '<p>A hearty sandwich of Irish premium ham with red cheddar cheese on healthy multigrain bread.&nbsp;</p>',
    price: '3.99',
    price_levy: '0.00',
    calorie: '487.00',
    spot_quantity: 4,
    in_stock_value: '4 in stock',
    allergens: 'Barley, Gluten, Milk, Rye, Soya, Wheat',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 21(g), Energy Kcal 247(Kcal), Energy Kj 1036(Kj), Fat 10(g), Fibre 4(g), Of Which Saturates 1(g), Of Which Sugars 2(g), Protein 15(g), Salt 2(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '4',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '15',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '10',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '1036',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '247',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '21',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174213798842515.png',
  },
  {
    product_id: 534,
    product_name: 'Fulfil Chocolate Salted Caramel',
    product_subheading:
      '<p class="ql-align-justify">An indulgent milk chocolate coating surrounds a soft, silky salted caramel centre topped with a layer of crunchy crispies, with all the&nbsp;added benefits of 20g protein, low sugar and 9 multivitamins.</p><p>This bar only contains 205 kcal per serving.</p>',
    price: '3.99',
    price_levy: '0.00',
    calorie: '225.00',
    spot_quantity: 8,
    in_stock_value: '8 in stock',
    allergens: 'Barley, Gluten, Milk, Soya',
    may_contain_allergens:
      'Brazil nuts, Hazlenuts, Peanuts, Tree Nuts, Walnuts',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 29(g), Energy Kcal 408(Kcal), Energy Kj 1715(Kj), Fat 15(g), Fibre 5(g), Of Which Saturates 9(g), Of Which Sugars 3(g), Protein 37(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '5',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '37',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '9',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '15',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '1715',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '408',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '29',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/169030156230378.png',
  },
  {
    product_id: 91,
    product_name: 'Pepperoni & Mozzarella Pizza Ciabatta',
    product_subheading:
      '<p>This delicious pizza toastie hybrid is epic.&nbsp;Hot ciabatta filled with a rich tomato sauce, melted mozzarella and pepperoni slices. Simply delicious.</p>',
    price: '4.49',
    price_levy: '0.00',
    calorie: '525.00',
    spot_quantity: 6,
    in_stock_value: '6 in stock',
    allergens: 'Gluten, Milk, Wheat',
    may_contain_allergens: '',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 24(g), Energy Kcal 238(Kcal), Energy Kj 997(Kj), Fat 10(g), Fibre 1(g), Of Which Saturates 2(g), Of Which Sugars 2(g), Protein 12(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '12',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '10',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '997',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '238',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '24',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174213872892388.png',
  },
  {
    product_id: 422,
    product_name: 'Hot & Spicy Chicken Baguette (Butter)',
    product_subheading:
      '<p>Hot crisp buttered roll with Irish Hot &amp; Spicy breaded Chicken breast. None of the fuss; all of the taste.</p>',
    price: '4.49',
    price_levy: '0.00',
    calorie: '614.00',
    spot_quantity: 6,
    in_stock_value: '6 in stock',
    allergens: 'Gluten, Milk, Wheat',
    may_contain_allergens: 'Celery, Eggs, Sesame, Soya',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 32(g), Energy Kcal 235(Kcal), Energy Kj 990(Kj), Fat 7(g), Fibre 2(g), Of Which Saturates 2(g), Of Which Sugars 2(g), Protein 11(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '11',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '7',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '990',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '235',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '32',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174213826141592.png',
  },
  {
    product_id: 36,
    product_name: 'SF Chicken Baguette (Butter)',
    product_subheading:
      '<p>Crisp buttered roll with Hot Irish breaded chicken, none of the fuss; all of the taste.</p>',
    price: '4.49',
    price_levy: '0.00',
    calorie: '625.00',
    spot_quantity: 6,
    in_stock_value: '6 in stock',
    allergens: 'Celery, Gluten, Milk, Wheat',
    may_contain_allergens: 'Eggs, Sesame, Soya',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 33(g), Energy Kcal 239(Kcal), Energy Kj 1008(Kj), Fat 7(g), Fibre 2(g), Of Which Saturates 2(g), Of Which Sugars 2(g), Protein 11(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '11',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '7',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '1008',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '239',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '33',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174213940940783.png',
  },
  {
    product_id: 715,
    product_name: 'Chicken Tikka With Rice',
    product_subheading:
      '<p>May Monthly Special - Tender pieces of marinated chicken tikka, layered over a bed of fluffy rice. The rich, creamy tikka sauce is bursting with aromatic spices and a hint of smoky heat, offering a comforting and satisfying flavour in every bite.</p>',
    price: '4.99',
    price_levy: '0.00',
    calorie: '607.00',
    spot_quantity: 6,
    in_stock_value: '6 in stock',
    allergens: 'Milk',
    may_contain_allergens: 'Celery, Gluten',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 18(g), Energy Kcal 116(Kcal), Energy Kj 490(Kj), Fat 2(g), Fibre 1(g), Of Which Saturates 1(g), Of Which Sugars 2(g), Protein 6(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '6',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '490',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '116',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '18',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174637983146616.png',
  },
  {
    product_id: 3,
    product_name: 'Chicken & Chorizo Pasta Bake',
    product_subheading:
      '<p>If you like a pasta dish that is meaty, a little spicy and bursting with flavour then this will be the pasta dish for you!</p>',
    price: '4.99',
    price_levy: '0.00',
    calorie: '861.00',
    spot_quantity: 7,
    in_stock_value: '7 in stock',
    allergens: 'Gluten, Milk, Wheat',
    may_contain_allergens: 'Celery',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 18(g), Energy Kcal 162(Kcal), Energy Kj 681(Kj), Fat 6(g), Fibre 1(g), Of Which Saturates 3(g), Of Which Sugars 2(g), Protein 9(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '9',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '6',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '681',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '162',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '18',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174213753422768.png',
  },
  {
    product_id: 38,
    product_name: 'Shredded Chicken Oven Baked Potato Cube & Curry',
    product_subheading:
      '<p>Crispy shredded chicken served with potato cubes and curry sauce on the side.</p>',
    price: '4.99',
    price_levy: '0.00',
    calorie: '513.00',
    spot_quantity: 2,
    in_stock_value: '2 in stock',
    allergens: 'Gluten, Milk, Mustard, Wheat',
    may_contain_allergens: 'Celery, Eggs, Sesame, Soya',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 19(g), Energy Kcal 131(Kcal), Energy Kj 553(Kj), Fat 4(g), Of Which Saturates 1(g), Of Which Sugars 1(g), Protein 5(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '5',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '4',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '553',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '131',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '19',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174213949460812.png',
  },
  {
    product_id: 23,
    product_name: 'Spice Bag with Oven Baked Potato Cub & Curry Sauce',
    product_subheading:
      '<p>Crispy shredded chicken and your favourite spice bag spice flavours served with potato cubes and curry sauce on the side.</p>',
    price: '4.99',
    price_levy: '0.00',
    calorie: '716.00',
    spot_quantity: 11,
    in_stock_value: '11 in stock',
    allergens: 'Gluten, Milk, Mustard, Wheat',
    may_contain_allergens: 'Celery, Eggs, Sesame, Soya',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 21(g), Energy Kcal 166(Kcal), Energy Kj 697(Kj), Fat 7(g), Fibre 1(g), Of Which Saturates 3(g), Of Which Sugars 2(g), Protein 5(g), Salt 2(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '5',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '7',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '697',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '166',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '21',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/176579673788227.png',
  },
  {
    product_id: 20,
    product_name: 'Chicken Curry with Rice',
    product_subheading:
      '<p>Tender chicken breast chunks in a flavourful curry sauce served over white rice.</p>',
    price: '4.99',
    price_levy: '0.00',
    calorie: '544.00',
    spot_quantity: 6,
    in_stock_value: '6 in stock',
    allergens: 'Milk, Mustard',
    may_contain_allergens: 'Celery',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 19(g), Energy Kcal 111(Kcal), Energy Kj 469(Kj), Fat 1(g), Fibre 1(g), Of Which Saturates 0(g), Of Which Sugars 2(g), Protein 6(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '6',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '469',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '111',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '19',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174213517728638.png',
  },
  {
    product_id: 18,
    product_name: 'Penne Pasta Bolognese',
    product_subheading:
      '<p>Rich meaty beef tomato Bolognese, made with lean Irish beef served over penne pasta.</p>',
    price: '4.99',
    price_levy: '0.00',
    calorie: '500.00',
    spot_quantity: 22,
    in_stock_value: '22 in stock',
    allergens: 'Gluten, Wheat',
    may_contain_allergens: 'Celery, Eggs, Milk, Mustard',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 20(g), Energy Kcal 120(Kcal), Energy Kj 508(Kj), Fat 2(g), Fibre 2(g), Of Which Saturates 1(g), Of Which Sugars 3(g), Protein 5(g), Salt 0(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '0',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '5',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '508',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '120',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '20',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174213868656347.png',
  },
  {
    product_id: 7,
    product_name: 'Pulled Pork & Rice Burrito',
    product_subheading:
      '<p>Classic burrito with pulled pork in BBQ sauce , rice and kidney beans and served with guacamole, cheese, and crispy onion wrapped in a flour tortilla.</p>',
    price: '4.99',
    price_levy: '0.00',
    calorie: '743.00',
    spot_quantity: 6,
    in_stock_value: '6 in stock',
    allergens: 'Gluten, Milk, Wheat',
    may_contain_allergens: 'Celery',
    may_contain_allergens_text: 'This product may contain these allergens.',
    nutrients:
      'Carbohydrate 25(g), Energy Kcal 178(Kcal), Energy Kj 747(Kj), Fat 5(g), Fibre 2(g), Of Which Saturates 1(g), Of Which Sugars 3(g), Protein 6(g), Salt 1(g)',
    nutrient_details: [
      {
        name: 'Fibre',
        amount: '2',
        unit: 'g',
      },
      {
        name: 'Salt',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Protein',
        amount: '6',
        unit: 'g',
      },
      {
        name: 'Of Which Sugars',
        amount: '3',
        unit: 'g',
      },
      {
        name: 'Of Which Saturates',
        amount: '1',
        unit: 'g',
      },
      {
        name: 'Fat',
        amount: '5',
        unit: 'g',
      },
      {
        name: 'Energy Kj',
        amount: '747',
        unit: 'Kj',
      },
      {
        name: 'Energy Kcal',
        amount: '178',
        unit: 'Kcal',
      },
      {
        name: 'Carbohydrate',
        amount: '25',
        unit: 'g',
      },
    ],
    product_img:
      'https://foodvillage-development-bucket.s3-eu-west-1.amazonaws.com/production-unit/1/product/174226270396121.png',
  },
];
