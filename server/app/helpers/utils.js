const utils = {};
utils.removeUndefinedKeys = async (obj) => {
    try {

        Object.keys(obj).forEach(
            (key) => {
                if (obj[key] === "-1" || obj[key] === -1) {
                    obj[key] = null;
                } else if (obj[key] === undefined || obj[key] === "") {
                    delete obj[key];
                }
            }
        );
        return obj;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = utils;