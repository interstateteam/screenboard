import { NextResponse } from "next/server";
import { createClient } from "contentful";
import { revalidatePath } from "next/cache";

export async function GET() {
   revalidatePath("api/contentful");
   try {
      const result = await getSiteData();
      return NextResponse.json({ result });
   } catch (err) {
      return NextResponse.json({ error: "failed to load data" });
   }
}

const client = createClient({
   space: `${process.env.CONTENTFUL_SPACE_ID}`,
   accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
});

const previewClient = createClient({
   space: `${process.env.CONTENTFUL_SPACE_ID}`,
   accessToken: `${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
   host: "preview.contentful.com",
});

const getClient = (preview) => (preview ? previewClient : client);

/*
function parseEntries(entries, cb = parsePost) {
   return entries?.items?.map(cb);
}
*/

export async function getSection(type) {
   return await getClient(process.env.NODE_ENV !== "production").getEntries({
      content_type: type,
   });
}

export async function getSiteData() {
   const board = await getSection("board");
   console.log("Data", board.items[0].fields);
   return { board: board.items[0].fields };
}
