const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// find all categories
router.get('/', (req, res) => {
  Category.findAll({
    include: [Product],
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
 });

// router.get('/', async (req, res) => {
//   try {
//     const categoryData = await Category.findAll({
//    // includes associated products
//     include:[{ model: Product }]
//    });
//    res.status(200).json(categoryData);
//   } catch (err) {
//    res.status(500).json(err);
//   }
// });

// find one category by its `id` value
router.get('/:id', async (req, res) => {
  try{
    const categoryData = await Category.findByPk(req.params.id, {
      // be sure to include its associated Products
      include:[{ model: Product }]
      });
      res.status(200).json(err);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
try {
  const categoryData = await Category.create(req.body);
  res.status(200).json(categoryData);
} catch (err) {
  res.status(400).json(err);
}
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
try{
  const categoryData = await Category.update(req.body);
  res.status(200).json(categoryData);
} catch {
  res.status(400).json(err);
}
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
