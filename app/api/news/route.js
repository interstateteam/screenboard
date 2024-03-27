import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(req) {
   const params = new URL(req.url).searchParams;
   const q = params.get("q");

   revalidatePath("api/news");
   try {
      const result = q; //await getNewsData(q);
      return NextResponse.json({ result });
   } catch (err) {
      return NextResponse.json({ error: "failed to load data" });
   }
}
/*
const sdk = require("api")("@webz-test/v1.0#4szmfkuv96r9s");

export async function getNewsData(params) {
   sdk.auth(process.env.NEWS_API_KEY);
   sdk.newsBlogsDiscussionsApiOverview({
      q: params.get("q"),
      format: "json",
      sort: params.get("sort") || "relevancy",
      order: params.get("order") || "asc",
      size: params.get("size") || 10,
      accuracy_confidence: params.get("accuracy") || "low",
      latest: params.get("latest") || false
   })
      .then(({ data }) => {
         console.log(data);
         return data;
      })
      .catch((err) => {
         return err;
      });
}
*/
