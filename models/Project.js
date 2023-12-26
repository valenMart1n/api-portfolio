module.exports = (sequelize, dataTypes) => {
    let alias = 'Project';
    let cols = {
        url: {
            type: dataTypes.STRING
        },
        title: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'projects',
        timestamps: false
    };
    const Project = sequelize.define(alias, cols, config)

    return Project;
}