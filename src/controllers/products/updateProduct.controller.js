import updateProductService from "../../services/products/updateProduct.service";

const updateProductController = async (request, response) => {
  const { id } = request.params;

  const body = request.body;

  try {
    const product = await updateProductService(id, body);

    return response.status(200).json({
      message: "Product Updated",
      product,
    });
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default updateProductController;
