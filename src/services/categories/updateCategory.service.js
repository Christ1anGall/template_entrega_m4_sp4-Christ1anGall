import database from "../../database";

const updateCategoryService = async (id, body) => {
  const Keys = Object.keys(body);
  const Value = Object.values(body);

  let query = Keys.map((key, index) => {
    return `${key} = $${index + 1} `;
  });

  query = query.toString() + `WHERE id=$${Keys.length + 1}`;

  try {
    const res = await database.query(
      `UPDATE categories SET ${query} RETURNING *;`,
      [...Value, id]
    );

    return res.rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

export default updateCategoryService;
