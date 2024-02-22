import { registerAs } from "@nestjs/config";

export default registerAs("aws", () => ({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  s3Bucket: process.env.AWS_S3_BUCKET,
}));
