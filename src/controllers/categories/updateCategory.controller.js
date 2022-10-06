import updateCategoryService from "../../services/categories/updateCategory.service";

const updateCategoryController = async (request, response) => {
  const { id } = request.params;

  const body = request.body;

  try {
    const category = await updateCategoryService(id, body);

    return response.status(200).json({
      message: "category Updated",
      category,
    });
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default updateCategoryController;
