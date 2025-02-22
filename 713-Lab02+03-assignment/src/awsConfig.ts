import { S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  credentials: {
    accessKeyId: "ca253e61641d0f2c55d7ad58c21d631c",
    secretAccessKey:
      "f2abbc043f63d30b125ce130f448cca502dc6007b139d4922ecfb2566d581b96"
  },
  endpoint: "https://knvebhwuynjbubbeefmo.supabase.co/storage/v1/s3",
  region: "ap-southeast-1",
  forcePathStyle: true
});

export default s3Client;
