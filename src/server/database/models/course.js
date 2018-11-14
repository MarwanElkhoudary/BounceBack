const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const course = sequelize.define('course', {
    course_name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    course_category: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    course_start: {
      type: Sequelize.STRING,
    },
    course_end: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    }
});

module.exports = course;