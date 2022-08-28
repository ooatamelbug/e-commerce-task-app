// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    
    const { data, params, app } = context;

    const order = await app.service("orders").get(data.order_id);
    
    if(order.user_id != params.user.id) {
      throw new Error("you are not allow to paid this order");
    }

    // create object from Bill
    const newBill = {
      order_id :data.order_id,
      card_date :data.card_date,
      total_amount: order.total_price,
      type_paid: data.type_paid,
      user_id: params.user.id
    };

    // console.log(newBill)
    context.data =  newBill;   
    return context;
  };
};
