'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategorySchema extends Schema {
  up() {
    this.create('categories', table => {
      table.increments()
      table
        .string('title')
        .notNull()
        .unique()
      table
        .string('slug')
        .notNull()
        .unique()
      table.integer('parent_id').default(null)
    })
  }

  down() {
    this.drop('categories')
  }
}

module.exports = CategorySchema
