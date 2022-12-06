
const products = [
		{
			"id": 1,
			"category_id": 2,
			"name": "Test—1",
			"sku": "123",
			"quantity": 3,
			"min_quantity": 0,
			"price": 340,
			"selling_price": 650,
			"discount": 10,
			"weight": 500,
			"description": "test desc",
			"care": "test prod",
			"disclaimer": "test prod disclaimer",
			"certification": null,
			"packing_delivery": "test pack delivery",
			"terms_conditions": "test terms and condition",
			"featured_image": null,
			"meta_title": "test meta",
			"meta_description": "test meta desc",
			"meta_keywords": "test key words",
			"slug": "test—1",
			"order_no": 144,
			"is_featured": 0,
			"is_best_deal": 0,
			"offer_tag": null,
			"offer_value": 0,
			"status": 1,
			"step": null,
			"created_at": "2022-10-27T12:22:16.000Z",
			"updated_at": "2022-10-27T12:22:16.000Z",
			"cat_title": "AFFORDABLE ART"
		},
		{
			"id": 2,
			"category_id": 2,
			"name": "test1----2",
			"sku": "635",
			"quantity": 4,
			"min_quantity": 0,
			"price": 340,
			"selling_price": 650,
			"discount": 10,
			"weight": 400,
			"description": "test desc",
			"care": "test prod",
			"disclaimer": "test prod disclaimer",
			"certification": null,
			"packing_delivery": "test pack delivery",
			"terms_conditions": "test terms and condition",
			"featured_image": null,
			"meta_title": "test meta",
			"meta_description": "test meta desc",
			"meta_keywords": "test key words",
			"slug": "test1-2",
			"order_no": 144,
			"is_featured": 0,
			"is_best_deal": 0,
			"offer_tag": null,
			"offer_value": 0,
			"status": 1,
			"step": null,
			"created_at": "2022-10-27T12:22:16.000Z",
			"updated_at": "2022-10-27T12:22:16.000Z",
			"cat_title": "AFFORDABLE ART"
		}
	]

const categoryWiseProducts = products.reduce((acc, curr) => {
      let item = acc.find((item) => item.cat_title === curr.cat_title);

      if (item) {
        item.products.push({ ...curr });
      } else {
        acc.push({
          cat_title: curr.cat_title,
          products: [{ ...curr }],
        });
      }

      return acc;
    }, []);

console.log(categoryWiseProducts)

//result of categoryWiseProducts
// [
// 		{
// 			"cat_title": "AFFORDABLE ART",
// 			"products": [
// 				{
// 					"id": 1,
// 					"category_id": 2,
// 					"name": "Test—1",
// 					"sku": "123",
// 					"quantity": 3,
// 					"min_quantity": 0,
// 					"price": 340,
// 					"selling_price": 650,
// 					"discount": 10,
// 					"weight": 500,
// 					"description": "test desc",
// 					"care": "test prod",
// 					"disclaimer": "test prod disclaimer",
// 					"certification": null,
// 					"packing_delivery": "test pack delivery",
// 					"terms_conditions": "test terms and condition",
// 					"featured_image": null,
// 					"meta_title": "test meta",
// 					"meta_description": "test meta desc",
// 					"meta_keywords": "test key words",
// 					"slug": "test—1",
// 					"order_no": 144,
// 					"is_featured": 0,
// 					"is_best_deal": 0,
// 					"offer_tag": null,
// 					"offer_value": 0,
// 					"status": 1,
// 					"step": null,
// 					"created_at": "2022-10-27T12:22:16.000Z",
// 					"updated_at": "2022-10-27T12:22:16.000Z",
// 					"cat_title": "AFFORDABLE ART"
// 				},
// 				{
// 					"id": 2,
// 					"category_id": 2,
// 					"name": "test1----2",
// 					"sku": "635",
// 					"quantity": 4,
// 					"min_quantity": 0,
// 					"price": 340,
// 					"selling_price": 650,
// 					"discount": 10,
// 					"weight": 400,
// 					"description": "test desc",
// 					"care": "test prod",
// 					"disclaimer": "test prod disclaimer",
// 					"certification": null,
// 					"packing_delivery": "test pack delivery",
// 					"terms_conditions": "test terms and condition",
// 					"featured_image": null,
// 					"meta_title": "test meta",
// 					"meta_description": "test meta desc",
// 					"meta_keywords": "test key words",
// 					"slug": "test1-2",
// 					"order_no": 144,
// 					"is_featured": 0,
// 					"is_best_deal": 0,
// 					"offer_tag": null,
// 					"offer_value": 0,
// 					"status": 1,
// 					"step": null,
// 					"created_at": "2022-10-27T12:22:16.000Z",
// 					"updated_at": "2022-10-27T12:22:16.000Z",
// 					"cat_title": "AFFORDABLE ART"
// 				}
// 			]
// 		}
// 	]

