const Employee = require('./models/Employee');

const resolvers = {
  Query: {
    listEmployees: async (_, { filter, page, limit, sortBy, sortOrder }) => {
      const query = filter || {};
      const options = {
        skip: (page - 1) * limit,
        limit,
        sort: { [sortBy || 'name']: sortOrder === 'DESC' ? -1 : 1 },
      };
      return await Employee.find(query, null, options);
    },
    getEmployee: async (_, { id }) => {
      return await Employee.findById(id);
    },
  },
  Mutation: {
    addEmployee: async (_, args) => {
      const newEmployee = new Employee(args);
      return await newEmployee.save();
    },
    updateEmployee: async (_, { id, ...updateFields }) => {
      return await Employee.findByIdAndUpdate(id, updateFields, { new: true });
    },
  },
};

module.exports = resolvers;
