const timestamp = require("time-stamp");

export default function generateEmail(): string {
  const emailPrefix = "komrakova.anna+aqa-user";
  const domain = "gmail.com";
  const stamp = timestamp.utc("YYYYMMDDmmss");
  return `${emailPrefix}${stamp}@${domain}`;
}
