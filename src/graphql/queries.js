/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArtOrder = /* GraphQL */ `
  query GetArtOrder($id: ID!) {
    getArtOrder(id: $id) {
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
export const listArtOrders = /* GraphQL */ `
  query ListArtOrders(
    $filter: ModelArtOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        art_id
        order_id
        order {
          id
          user
          date
          total
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
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const listArts = /* GraphQL */ `
  query ListArts(
    $filter: ModelArtFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArt = /* GraphQL */ `
  query GetArt($id: ID!) {
    getArt(id: $id) {
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
