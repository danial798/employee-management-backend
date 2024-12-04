const { gql } = require('graphql-tag');

const typeDefs = gql`
  type Employee {
    id: ID!
    name: String!
    age: Int!
    class: String!
    subjects: [String]!
    attendance: Float!
  }

  type Query {
    listEmployees(filter: EmployeeFilter, page: Int, limit: Int, sortBy: String, sortOrder: String): [Employee]
    getEmployee(id: ID!): Employee
  }

  input EmployeeFilter {
    name: String
    class: String
  }

  type Mutation {
    addEmployee(name: String!, age: Int!, class: String!, subjects: [String]!, attendance: Float!): Employee
    updateEmployee(id: ID!, name: String, age: Int, class: String, subjects: [String], attendance: Float): Employee
  }

  type AuthPayload {
    token: String!
    role: String!
  }
`;

module.exports = typeDefs;
