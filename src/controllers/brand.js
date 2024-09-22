'use strict'

const Brand = require('../models/brand');

module.exports = {

    list: async(req, res) => {
        /*
            #swagger.tags = ["Brands"]
            #swagger.summary = "List Brands"
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
            #swagger.tags = ["Brands"]
            #swagger.summary = "Create Brand"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "name": "Brand 1"
                }
            }
        */
    },

    read: async(req, res) => {
        /*
            #swagger.tags = ["Brands"]
            #swagger.summary = "Get Single Brand"
        */
    },

    update: async(req, res) => {
        /*
            #swagger.tags = ["Brands"]
            #swagger.summary = "Update Brand"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "name": "Brand 1"
                }
            }
        */
    },

    delete: async(req, res) => {
        /*
            #swagger.tags = ["Brands"]
            #swagger.summary = "Delete Brand"
        */
    }

};