import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
    await db.execute(sql`
   ALTER TABLE "blog" ADD COLUMN "slug" varchar NOT NULL;
  ALTER TABLE "blog" ADD COLUMN "thumbnail_id" integer NOT NULL;
  ALTER TABLE "blog" ADD COLUMN "featured" boolean;
  ALTER TABLE "blog" ADD CONSTRAINT "blog_thumbnail_id_media_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE UNIQUE INDEX "blog_slug_idx" ON "blog" USING btree ("slug");
  CREATE INDEX "blog_thumbnail_idx" ON "blog" USING btree ("thumbnail_id");`)
}

export async function down({
    db,
    payload,
    req,
}: MigrateDownArgs): Promise<void> {
    await db.execute(sql`
   ALTER TABLE "blog" DROP CONSTRAINT "blog_thumbnail_id_media_id_fk";
  
  DROP INDEX "blog_slug_idx";
  DROP INDEX "blog_thumbnail_idx";
  ALTER TABLE "blog" DROP COLUMN "slug";
  ALTER TABLE "blog" DROP COLUMN "thumbnail_id";
  ALTER TABLE "blog" DROP COLUMN "featured";`)
}
