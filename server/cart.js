const add = (cart, req) => {
  cart.contents.push(req.body);
  return JSON.stringify(cart, null, 4);
};
const change = (cart, req) => {
  let find = cart.contents.find((el) => el.id_product === +req.params.id);
  find.quantity += req.body.quantity;
  return JSON.stringify(cart, null, 4);
};

const remove = (cart, req) => {
  let index = cart.contents.findIndex((el) => el.id_product === +req.params.id);

  cart.contents.splice(index,1);
  
  return JSON.stringify(cart, null, 4);
};

module.exports = {
  add,
  change,
  remove,
};
