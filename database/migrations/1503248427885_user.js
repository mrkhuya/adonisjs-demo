'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', table => {
      table.increments()
      table.string('code', 6)
      table
        .string('username')
        .notNullable()
        .unique()
      table.string('name', 100)
      table
        .string('email', 254)
        .notNullable()
        .unique()
      table.string('password', 254).notNullable()
      table.string('phone', 11).notNullable()
      table.string('gender', 100)
      table.date('birthday')
      table.text('avatar')
      table.string('address')
      table.timestamps()
    })
    this.raw('ALTER TABLE users AUTO_INCREMENT = 1000')
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
