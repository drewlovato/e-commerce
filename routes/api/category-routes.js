const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// finds all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
   // includes associated products
    include:[{ model: Product }]
   });
   res.status(200).json(categoryData);
  } catch (err) {
   res.status(500).json(err);
  }
});

// finds one category by its `id` value
router.get('/:id', async (req, res) => {
  try{
      const categoryData = await Category.findByPk(req.params.id, {
      // includes its associated Products
      include:[{ model: Product }]
      });
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// creates a new category
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

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try{
    const categoryData = await Category.delete(req.body);
    res.status(200).json(categoryData);
  } catch {
    res.status(400).json(err);
  }
});

module.exports = router;
