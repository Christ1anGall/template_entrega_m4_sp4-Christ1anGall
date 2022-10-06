import database from "../../database";

const listProductsService = async () => {
  try {
    const res = await database.query("SELECT * FROM Products;", []);

    return res.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default listProductsService;
