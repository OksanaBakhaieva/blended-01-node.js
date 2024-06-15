export default function controllerDecorator(controller) {
  const func = async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      res.status(error.status).send(error.message);
      //next(error);
    }
  };
  return func;
}
