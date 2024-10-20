import { V0Client } from "@vaporcms/client-sdk-js";

const vaporCmsApiKey = import.meta.env.VAPOR_CMS_TOKEN;
const vaporCmsBlogId = import.meta.env.VAPORCMS_BLOG_ID;

export const vaporCmsClient = new V0Client({
  auth: vaporCmsApiKey,
  blogId: vaporCmsBlogId,
});
