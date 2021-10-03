module.exports=(app)=>{

    const products=require('../controllers/product.controller.js');
    app.post('/products',products.create);
    app.get('/products',products.findAll);
    app.get('/products/:id',products.findOne);
    app.put('/products/:id',products.update);
    app.delete('/products/:id',products.delete);
}