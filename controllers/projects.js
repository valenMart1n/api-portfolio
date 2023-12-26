const db = require('../models')
const { Sequelize, Op, Model, DataTypes } = require('sequelize');

let projects = {
    data: async (req, res) =>{
        
        res.json({       
            projects: resultado = Array.from(await db.Project.findAll()).map(function(datos){
             return{ 
              url: datos.url,
              title: datos.title,
              description: datos.description,
              
            }
        }
        )}
        )
    }
}
module.exports = projects;