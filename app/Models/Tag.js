'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tag extends Model {

  static boot () {
    super.boot()
    this.addTrait('@provider:Lucid/Slugify', {
      fields: {
        slug: 'title'
      },
      strategy: 'dbIncrement'
    })
  }

  posts() {
    return this.belongsToMany('App/Models/Post').pivotTable('post_tag')
  }
}

module.exports = Tag
