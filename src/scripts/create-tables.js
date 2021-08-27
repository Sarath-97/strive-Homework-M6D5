import fs from "fs-extra";

import { join } from "path";

import db from "../db/connections.js";

const sqlFilePath = join(process.cwd(), "src/sql/create-tables.sql");

const createTables = async () => {
  try {
    /** read create table queries from disk*/
    const sqlCommandsBuffer = await fs.readFile(sqlFilePath);
    const sqlCommands = sqlCommandsBuffer.toString();
    /** exacute  create table queries */
    const result = await db.query(sqlCommands);
    console.log(result);
    console.log(`Tables are  created.`);
  } catch (error) {
    console.log(error);
    console.log(`ERROR:${error}Tables not created.`);
  }
};

export default createTables;
