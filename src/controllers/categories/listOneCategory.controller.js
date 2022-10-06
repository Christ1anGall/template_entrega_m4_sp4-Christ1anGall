import listCategoriesService from "../../services/categories/listCategories.service";

const listOneCategoryController = async (request, response) => {
  const { id } = request.params;

  try {
    const categoryList = await listCategoriesService();

    const category = categoryList.filter((elem) => elem.id === id);

    if (category.length < 1) {
      throw new Error("not Found");
    }

    return response.status(200).json(category[0]);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default listOneCategoryController;
