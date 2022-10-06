import listProductAllInformationService from "../../services/products/listProductAllInformation.service";

const listProductAllInformationController = async (request, response) => {
  const { category_id } = request.params;

  try {
    const products = await listProductAllInformationService(category_id);

    return response.status(200).json(products);
  } catch (error) {
    return response.status(400).json(error.message);
  }
};

export default listProductAllInformationController;
