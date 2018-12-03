import { getCategories } from './../mock/data/categories'

/**
 * Calls api in the backend to fetch required information about categories.
 */
export default class ApiCategories {
    static getCategories() {
      return getCategories()
    }
  }
  