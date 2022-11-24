import { config } from './config.js'; //MySql
//import { config } from './configSQLite.js'; //SQLite
import _knex from 'knex';
//console.log(config); //para verificar .env file is ok
export const knex = _knex(config)