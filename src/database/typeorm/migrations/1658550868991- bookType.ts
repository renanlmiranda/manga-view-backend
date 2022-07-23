/* eslint-disable @typescript-eslint/no-empty-function */
import { MigrationInterface, QueryRunner } from "typeorm";

export class undefinedookType1658550868991 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO public.tb_book_type VALUES
                (1, 'Manga'),
                (2, 'Light Novel'),
                (3, 'Book')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
