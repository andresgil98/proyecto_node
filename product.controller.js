const { Router } = require('express');
const Product=require('../models/product.model.js');


exports.create=(req,res)=>{
    console.log("creando");
    console.log(req.body);
    const product=new Product(req.body)
    product.save();
    res.send('Guardado')
}

exports.findAll=(req,res)=>{
    console.log("listando");
    
    Product.find((err, lista_productos) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'No se pudieron listar los productos',
                err
            });
        } else {
            res.json({
                resultado: true,
                msj: 'Lista de productos',
                lista_productos
                
            });
            console.log(lista_productos);
            
        }
    });
}
exports.findOne=(req,res)=>{
    
    console.log("listando por id");
    
    let id = req.params.id;
    Product.findById(id, function(err, product) {
        if (err) {
            return res.json({
                success: false,
                msj: 'No se encontró ningún producto con ese id',
                err
            });
        } else {
            return res.json({
                success: true,
                producto: product 
                
            });
            
        }
          
    })
    

}
exports.delete=(req,res)=>{
    console.log("eliminando");
    res.send('Eliminado')
    let id = req.params.id;
    Product.findById(id, function(err, product) {
        if (err) {
            return res.json({
                success: false,
                msj: 'Error al eliminar el producto',
                err
            });
        } 
        product.remove()
        console.log('Producto eliminado')
          
    })
}
exports.update=(req,res)=>{
    console.log("actualizando");   
    }


