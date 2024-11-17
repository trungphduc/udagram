import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

// export const config = {
//   username: `${process.env.POSTGRES_USERNAME}`,
//   password: process.env.POSTGRES_PASSWORD,
//   database: process.env.POSTGRES_DB,
//   host: process.env.POSTGRES_HOST,
//   aws_region: process.env.AWS_REGION,
//   aws_profile: process.env.AWS_PROFILE,
//   aws_media_bucket: process.env.AWS_BUCKET,
//   url: process.env.URL,
//   jwt: {
//     secret: process.env.JWT_SECRET,
//   },
// };

export const config = {
  username: `postgres`,
  password: `postgres`,
  database: `postgres`,
  host: 'mydb.ciql77kn1xkx.us-east-1.rds.amazonaws.com',
  aws_region: 'us-east-1',
  aws_profile: 'default',
  aws_media_bucket: 'arn:aws:s3:::mybucket11152024',
  url: 'http://localhost:8100',
  jwt: {
    secret: 'mysecretstring',
  },
};
