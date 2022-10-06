import database from "../../database";

const listCategoriesService = async () => {
  try {
    const res = await database.query("SELECT * FROM categories;", []);

    if (res.rows.length < 1) {
      throw new Error("not found category");
    }

    return res.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default listCategoriesService;
