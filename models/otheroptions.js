var dbconfig = require('../config/database.js')
var mysql = require('mysql')

var db = mysql.createPool(dbconfig.mysql)

// 查询coefficient表中水的系数
exports.getCoefficient = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM coefficient WHERE Type='0'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}
// 查询pipediameter表
exports.getPipeDiameter = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM pipediameter`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}
// 查询powertype表
exports.getPowerType = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM powertype`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}
// 查询meteruse表
exports.getMeterUse = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM meteruse`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}
// 查询subordinatedepartments表
exports.getSubordinateDepartments = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM subordinatedepartments`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 查询watermeterlevel表
exports.selectWaterMeterLevel = function(req,res,callback){
  // console.log(req.body.WaterMeterLevelMinusOne)
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM watermeterlevel`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}