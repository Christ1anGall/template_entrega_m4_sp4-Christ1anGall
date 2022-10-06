import database from "../../database";

const deleteProductService = async (id) => {
  try {
    const res = await database.query(
      "DELETE FROM Products WHERE Products.id = $1 RETURNING *; ",
      [id]
    );

    return res.rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
};
export default deleteProductService;
