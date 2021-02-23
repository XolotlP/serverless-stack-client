const config = {
  STRIPE_KEY: "pk_test_51INQiRG5y8M5StqBCVclVSkf6VJsvLgqFrQqFyemRnCHUAtgOOY9aPhQOkrBOiW6Y5Du1TJj4g6wiwPYDd5fHmgz00gRQkCJaw",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-api-xolotlp"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://2ybgj1fs5g.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_CRnN8er4p",
    APP_CLIENT_ID: "6un5jen2pq9d11ourm9rnr6tki",
    IDENTITY_POOL_ID: "us-east-1:3441be49-d0ef-4fcb-be29-328f9db13ba4",
  },
};

export default config;
