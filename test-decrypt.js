const AWS = require('aws-sdk');
// use KMS to decrypt customer token in kmsEncryptedCustomerToken environment variable
const decryptParams = {
  CiphertextBlob: Buffer.from(process.env.kmsEncryptedCustomerToken, 'base64')
};

// use KMS to decrypt customer token in kmsEncryptedCustomerToken environment variable
// const decryptParams = {
//   CiphertextBlob: Buffer.from(process.env.kmsEncryptedCustomerToken, 'base64'),
//   EncryptionContext: { LambdaFunctionName: process.env.AWS_LAMBDA_FUNCTION_NAME },
// };

const kms = new AWS.KMS({ apiVersion: '2014-11-01', region: 'us-west-2' });

kms.decrypt(decryptParams, (error, data) => {
  if (error) {
    console.log(error);
  }
  else {
    console.log(data.Plaintext.toString('ascii'));
  }
});
