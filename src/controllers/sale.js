'use strict'

const Sale = require('../models/sale');
const Product = require('../models/product');

module.exports = {

    list: async(req, res) => {
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
    },

    create: async(req, res) => {
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
    },

    read: async(req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Get Single Sale"
        */
    },

    update: async(req, res) => {
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
    },

    delete: async(req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Delete Sale"
        */
    }

};