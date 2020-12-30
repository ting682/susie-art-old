/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createArt = /* GraphQL */ `
  mutation CreateArt(
    $input: CreateArtInput!
    $condition: ModelArtConditionInput
  ) {
    createArt(input: $input, condition: $condition) {
      id
      title
      description
      image
      price
      createdAt
      updatedAt
    }
  }
`;
export const updateArt = /* GraphQL */ `
  mutation UpdateArt(
    $input: UpdateArtInput!
    $condition: ModelArtConditionInput
  ) {
    updateArt(input: $input, condition: $condition) {
      id
      title
      description
      image
      price
      createdAt
      updatedAt
    }
  }
`;
export const deleteArt = /* GraphQL */ `
  mutation DeleteArt(
    $input: DeleteArtInput!
    $condition: ModelArtConditionInput
  ) {
    deleteArt(input: $input, condition: $condition) {
      id
      title
      description
      image
      price
      createdAt
      updatedAt
    }
  }
`;
export const createArtOrder = /* GraphQL */ `
  mutation CreateArtOrder(
    $input: CreateArtOrderInput!
    $condition: ModelArtOrderConditionInput
  ) {
    createArtOrder(input: $input, condition: $condition) {
      id
      art_id
      order_id
      order {
        id
        user
        date
        total
        books {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      art {
        id
        title
        description
        image
        price
        createdAt
        updatedAt
      }
      owner
    }
  }
`;
export const updateArtOrder = /* GraphQL */ `
  mutation UpdateArtOrder(
    $input: UpdateArtOrderInput!
    $condition: ModelArtOrderConditionInput
  ) {
    updateArtOrder(input: $input, condition: $condition) {
      id
      art_id
      order_id
      order {
        id
        user
        date
        total
        books {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      art {
        id
        title
        description
        image
        price
        createdAt
        updatedAt
      }
      owner
    }
  }
`;
export const deleteArtOrder = /* GraphQL */ `
  mutation DeleteArtOrder(
    $input: DeleteArtOrderInput!
    $condition: ModelArtOrderConditionInput
  ) {
    deleteArtOrder(input: $input, condition: $condition) {
      id
      art_id
      order_id
      order {
        id
        user
        date
        total
        books {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      art {
        id
        title
        description
        image
        price
        createdAt
        updatedAt
      }
      owner
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      books {
        items {
          id
          art_id
          order_id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      books {
        items {
          id
          art_id
          order_id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      books {
        items {
          id
          art_id
          order_id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
