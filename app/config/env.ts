export const env = {
  serverport: Number(process.env.SERVER_PORT),
  mongouri: process.env.MONGO_URI,
  jwtsecret: process.env.JWT_SECRET,
};
