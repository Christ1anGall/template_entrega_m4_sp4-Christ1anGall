import createProductsService from "../../services/products/createProducts.service";

const createProductsController = async (request, response) => {
  const { name, price, category_id } = request.validatedBody;

  try {
    const products = await createProductsService(name, price, category_id);

    return response.status(201).json({
      message: "product create",
      product: products,
    });
  } catch (error) {
    return response.status(400).json(error.message);
  }
};

export default createProductsController;
