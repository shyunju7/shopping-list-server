import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('code')
export class CodeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userCode: string;
}
