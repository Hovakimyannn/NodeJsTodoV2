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
            if (credentials) {
                try {
                    return await this.model.findOne(credentials);
                } catch (e) {
                    return 'not found';
                }
            } else {
                return await this.model.find();
            }
        } catch (e) {
            throw e;
        }
    }

    /**
     * @param data
     * @param id
     *
     * @returns {Promise<*>}
     */
    async update(data, id) {
        try {
            await this.model.updateOne(
                {_id: id},
                {$set: data}
            );
            return this.model;
        } catch (e) {
            throw e;
        }
    }

    /**
     * @param id
     *
     * @returns {Promise<void>}
     */
    async destroy(id) {
        try {
            await this.model.deleteOne({_id: id});
        } catch (e) {
            throw e;
        }
    }
}

module.exports = Mongodb