import * as yup from "yup";

const productSeriallizer = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().positive().required(),
  category_id: yup.number().positive().required(),
});

export default productSeriallizer;
