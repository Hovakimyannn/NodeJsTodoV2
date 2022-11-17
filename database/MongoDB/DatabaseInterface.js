"use strict"

class DatabaseInterface {
    /**
     * @param data
     *
     * @returns {Promise<*>}
     */
    async create(data) {}

    /**
     * @param credentials
     *
     * @returns {Promise<string|*>}
     */
    async read(credentials = null) {}

    /**
     * @param data
     * @param credentials
     *
     * @returns {Promise<*>}
     */
    async update(data, credentials) {}

    /**
     * @param credentials
     *
     * @returns {Promise<void>}
     */
    async destroy(credentials) {}
}

module.exports = DatabaseInterface;