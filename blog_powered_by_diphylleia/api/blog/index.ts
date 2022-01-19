import { MicroCMSListResponse, MicroCMSQueries } from "microcms-js-sdk";
import { BlogEntries } from "../types";

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSListResponse<BlogEntries>;
  };
};
