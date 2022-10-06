import database from "../../database";

const listProductAllInformationService = async (category_id) => {
  try {
    const res = await database.query(
      "SELECT categories.name as category , products.price, products.name  FROM categories FULL JOIN products ON products.category_id = categories.id WHERE categories.id = $1 ; ",
      [category_id]
    );

    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
};
export default listProductAllInformationService;
