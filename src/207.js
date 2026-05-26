const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send(`
    <form action="/discount" method="post">
      <input name="price" type="number" placeholder="Price" required><br>
      <input name="discount" type="number" placeholder="Discount" required><br>
      <select name="offer" required>
        <option value="">Select offer</option>
        <option>Festival Offer</option>
        <option>Seasonal Offer</option>
        <option>Clearance Sale</option>
      </select><br>
      <button type="submit">Submit</button>
    </form>
  `);
});
app.post('/discount', (req, res) => {
  const { price, discount, offer } = req.body;
  if (!price || !discount || Number(price) <= 0 || Number(discount) <= 0) {
    return res.send('Enter valid price and discount');
  }
  if (!offer) {
    return res.send('Please select an offer type');
  }
  res.send(`Offer received: ${offer}, Price ${price}, Discount ${discount}`);
});
app.listen(3000);