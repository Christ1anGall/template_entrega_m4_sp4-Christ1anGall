import database from "../../database";

const deleteCategoryService = async (id) => {
  try {
    const res = await database.query(
      "DELETE FROM categories WHERE categories.id = $1 RETURNING *; ",
      [id]
    );

    return res.rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
};
export default deleteCategoryService;
