"use strict"

class Mongodb {
    constructor(model) {
        this.model = model;
    }

    /**
     * @param data
     *
     * @returns {Promise<*>}
     */
    async create(data) {
        let todo = new this.model(data);
        try {
            return todo.save();
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    /**
     * @param credentials
     *
     * @returns {Promise<string|*>}
     */
    async read(credentials = null) {
        try {
            if (!credentials.user_id) {
                try {
                    return await this.model.findOne(credentials);
                } catch (e) {
                    return 'not found';
                }
            } else {
                return await this.model.find(credentials);
            }
        } catch (e) {
            throw e;
        }
    }

    /**
     * @param data
     * @param credentials
     *
     * @returns {Promise<*>}
     */
    async update(data, credentials) {
        try {
            await this.model.updateOne(
                credentials,
                {$set: data}
            );
            return this.model;
        } catch (e) {
            throw e;
        }
    }

    /**
     * @param credentials
     *
     * @returns {Promise<void>}
     */
    async destroy(credentials) {
        try {
            await this.model.deleteOne(credentials);
        } catch (e) {
            throw e;
        }
    }
}

module.exports = Mongodb;
