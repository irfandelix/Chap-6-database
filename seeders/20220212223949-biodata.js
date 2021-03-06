'use strict';

const { query } = require("express");

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert("Biodata", [
      {
        username: "irfandelix",
        firstName: "irfan",
        lastName: "delix",
        birthday: "2020-04-16",
        gender: "male",
        email: "irfandelix@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date ()
      }
     ])
  },
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete("Biodata", null,{})
  }
};
