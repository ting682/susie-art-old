const { CongnitoIdentityServiceProvider } = require("aws-sdk")
const cognitoIdentityServiceProvider = new CongnitoIdentityServiceProvider();
const USER_POOL_ID = "us-east-1_8sqndWgod";
const stripe = require("stripe")("<strip_private_key>");

const getUserEmail = async (event) => {
    const params = {
        UserPoolId: USER_POOL_ID,
        Username: event.identity.claims.username
    }
    const user = await cognitoIdentityServiceProvider.adminGetUser(params).promise();
    const { Value: email } = user.UserAttributes.find((attr) => {
        if (attr.Name === "email") {
            return attr.value;
        }
    })
    return email;
}

exports.handler = async (event) => {
    try {
        const { id, cart, total, address, username, token } = event.arguments.input;
        const email = await getUserEmail(event)

        await stripe.charges.create({
            amount: total * 100,
            currency: "usd",
            source: token,
            description: `Order ${new Date()} by ${email}`
        })

        return { id, cart, total, address, username, email}
    } catch (err) {
        throw new Error(err);
    }
}