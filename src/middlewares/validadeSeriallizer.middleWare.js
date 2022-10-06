import productSeriallizer from "../seriallizers/product.seriallizers";

const validateSeriallizerMiddleware = async (request, response, next) => {
  try {
    const validateProducts = await productSeriallizer.validate(request.body, {
      stripUnknown: true,
      abortEarly: false,
    });

    request.validatedBody = validateProducts;

    return next();
  } catch (error) {
    return response.status(400).json({
      message: error.errors,
    });
  }
};

export default validateSeriallizerMiddleware;
