'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostTagSchema extends Schema {
  up () {
    this.create('post_tag', (table) => {
      table.increments()
      table.integer('tag_id').unsigned().references('id').inTable('tags').onDelete('CASCADE')
      table.integer('post_id').unsigned().references('id').inTable('posts').onDelete('CASCADE')
    })
  }

  down () {
    this.drop('post_tag')
  }
}

module.exports = PostTagSchema
