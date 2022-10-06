import listProductsService from "../../services/products/listProducts.service";

const listOneProductController = async (request, response) => {
  const { id } = request.params;

  try {
    const ProductList = await listProductsService();

    const Product = ProductList.filter((elem) => elem.id === id);

    if (Product.length < 1) throw new Error("not found");

    return response.status(200).json(Product[0]);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default listOneProductController;
