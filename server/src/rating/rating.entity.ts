import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "../user/user.entity";
import { Media } from "../media/media.entity";

@Entity()
export class Rating {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User, (user) => user.ratings)
    userId!: string;

    @ManyToOne(() => Media, (media) => media.ratings)
    mediaId!: string;

    @Column()
    rating!: number;

    @Column()
    comment!: string;

    @Column({ type: "datetime" })
    postedAt!: Date;

    // Thread?
}