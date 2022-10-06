import deleteCategoryService from "../../services/categories/deleteCategory.service";

const deleteCategoryController = async (request, response) => {
  const { id } = request.params;

  try {
    const category = await deleteCategoryService(id);

    return response.status(204).json({
      message: "category deleted",
      category: category,
    });
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default deleteCategoryController;
