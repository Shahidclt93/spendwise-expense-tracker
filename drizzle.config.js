export default {
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://spend-wise_owner:npg_0WiIhqJ8ArLP@ep-orange-sound-a5caenbb-pooler.us-east-2.aws.neon.tech/spend-wise?sslmode=require",
    connectionString: "postgresql://spend-wise_owner:npg_0WiIhqJ8ArLP@ep-orange-sound-a5caenbb-pooler.us-east-2.aws.neon.tech/spend-wise?sslmode=require",
    // url: process.env.NEXT_PUBLIC_DATABASE_URL,
    // connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
};