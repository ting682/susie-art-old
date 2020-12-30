const { v4: uuidv4 } = require("uuid")
const AWS = require("aws-sdk")
const documentClient = new AWS.DynamoDB.DocumentClient();

const ORDER_TABLE = "Order-cnp4hlzp65cpzhlbavouh6oy54-dev"
const ORDER_TYPE = "Order"
const BOOK_ORDER_TABLE = "ArtOrder-cnp4hlzp65cpzhlbavouh6oy54-dev"
const BOOK_ORDER_TYPE = "ArtOrder"

const createOrder = async (payload) => {
    const { order_id, username, email, total }  = payload;
    let params = {
        TableName: ORDER_TABLE,
        Item: {
            id: order_id,
            __typename: ORDER_TYPE,
            customer: email,
            user: username,
            total: total,
            updatedAt: new Date().toISOString(),
            createdAt: new Date().toISOString()
        }

    }
    console.log(params)

    await documentClient.put(params).promise()
}

exports.handler = async (event) => {
    try {
        let payload = event.prev.result;
        payload.order_id = uuidv4();

        await createOrder(payload)

        await createBookOrder(payload)

        return "SUCCESS"
    } catch (err) {
        console.log(err)

        return new Error(err)
    }
}