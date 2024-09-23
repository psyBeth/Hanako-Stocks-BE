'use strict'

const Sale = require('../models/sale');
const Product = require('../models/product');

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "List Sales"
            #swagger.description = `
                You can use <u>filter[] & search[] & sort[] & page & limit</u> queries with endpoint.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=asc&sort[field2]=desc</b></li>
                    <li>URL/?<b>limit=10&page=1</b></li>
                </ul>
            `
        */

        const data = await re.getModelList(Sale, {}, [
            { path: 'userId', select: 'username email' },
            'brandId',
            { path: 'productId', select: 'name', populate: { path: 'categoryId' } }
        ]);   // populating ref.

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Sale),
            data
        });
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Create Sale"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "name": "Sale 1"
                }
            }
        */

        // get userId data from req.body
        req.body.userId = req.user._id;

        // get info abt the current product
        const currentProduct = await Product.findOne({ _id: req.body.productId });

        if (currentProduct.quantity >= req.body.quantity) {

        } else {
            res.errorStatusCode = 422;
            throw new Error('There is not enough product in the stocks for this sale quantity.', {
                cause: { currentProduct }
            });
        };
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Get Single Sale"
        */

        // console.log();

        if (req.params?.id) {

            // Single:
            const data = await Sale.findOne({ _id: req.params.id }).populate([
                { path: 'userId', select: 'username email' },
                'brandId',
                { path: 'productId', select: 'name', populate: { path: 'categoryId' } }
            ]);

            res.status(200).send({
                error: false,
                data
            });

        } else {

            // All: 
            const data = await re.getModelList(Sale, {}, [
                { path: 'userId', select: 'username email' },
                'brandId',
                { path: 'productId', select: 'name', populate: { path: 'categoryId' } }
            ]);

            res.status(200).send({
                error: false,
                details: await res.getModelListDetails(Sale),
                data
            });

        }
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Update Sale"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "name": "Sale 1"
                }
            }
        */

        if (req.body?.quantity) {
            // get info abt the current sale
            const currentSale = await Sale.findOne({ _id: req.body.productId });
            // amount difference
            const difference = req.body.quantity - currentSale.quantity;
            // save difference to product
            const updateProduct = await Product.updateOne({ _id: currentSale.productId, quantity: { $gte: difference } }, { $inc: { quantity: -difference } });
            // console.log(updateProduct);

            // if error in update, stop the process
            if (updateProduct.modifiedCount == 0) {
                res.errorStatusCode = 422;
                throw new Error('There is an issue updating the product quantity.');
            };
        };

        const data = await Sale.updateOne({ _id: req.params.id }, req.body, { runValidators: true });

        res.status(202).send({
            error: false,
            data,
            new: await Sale.findOne({ _id: req.params.id })
        });
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Delete Sale"
        */

        // get info abt the current sale
        const currentSale = await Sale.findOne({ _id: req.body.productId });

        const data = await Sale.deleteOne({_id: req.params.id});

        // increase amount in product //!
        const updateProduct = await Product.updateOne({ _id: currentSale.productId }, { $inc: { quantity: +currentSale.quantity } });

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        });
    }

};