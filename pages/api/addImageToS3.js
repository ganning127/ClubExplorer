const { Upload } = require("@aws-sdk/lib-storage");
const { S3Client } = require("@aws-sdk/client-s3");

const accessKey = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const s3region = process.env.S3_REGION;
const s3bucket = process.env.S3_BUCKET;

const s3upload = async (req) => {
    console.log(req)
    const s3 = new S3Client({
        region: s3region,
        credentials: {
          accessKeyId: accessKey,
          secretAccessKey: secretAccessKey,
        },
      });
    
    console.log("Connected");
    const params = {
        Bucket: s3bucket,
        Key: `${Date.now().toString()}`+ "-" + req.files.image.name,
        Body: req.files.image.data,
    };
    // sometimes wants req.files.file.data

    const upload = new Upload({
        client: s3,
        params,
    });

    upload.on('httpUploadProgress', (progress) => {
        console.log(progress);
    });
    console.log("here too")
    const data = await upload.done().catch((err) => {
        console.log("error here")
        console.log(err)
    });
}

module.exports = s3upload;