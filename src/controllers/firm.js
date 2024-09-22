'use strict'

const Firm = require('../models/firm');

module.exports = {

    list: async(req, res) => {
        /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "List Firms"
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
            #swagger.tags = ["Firms"]
            #swagger.summary = "Create Firm"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "name": "Firm 1"
                }
            }
        */
    },

    read: async(req, res) => {
        /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "Get Single Firm"
        */
    },

    update: async(req, res) => {
        /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "Update Firm"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "name": "Firm 1"
                }
            }
        */
    },

    delete: async(req, res) => {
        /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "Delete Firm"
        */
    }

}