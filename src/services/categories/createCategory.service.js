import database from "../../database";

const createCategoryService = async (nome) => {
  try {
    const nameExist = await database.query(
      "SELECT name FROM categories WHERE name LIKE $1 ",
      [nome]
    );

    if (nameExist.rows[0]?.name === nome) {
      throw new Error("Name Alredy Exist");
    }

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
