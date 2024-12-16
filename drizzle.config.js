/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:qbs3kUp8MHxu@ep-soft-union-a5ycf2fh.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };