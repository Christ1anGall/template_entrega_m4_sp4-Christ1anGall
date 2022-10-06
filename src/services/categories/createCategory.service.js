import database from "../../database";

const createCategoryService = async (nome) => {
  try {
    const res = await database.query(
      "INSERT INTO Categories(name) VALUES($1) RETURNING *",
      [nome]
    );

    return res.rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
};
export default createCategoryService;
