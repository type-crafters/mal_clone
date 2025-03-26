import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { User } from "../user/user.entity";
import { Rating } from "../rating/rating.entity";

@Entity()
export class Media {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    title!: string;

    @ManyToMany(() => User, (user) => user.favorites)
    @JoinTable({
        name: "usersFavorited",
        joinColumn: { name: "userId", referencedColumnName: "id" },
        inverseJoinColumn: { name: "mediaId", referencedColumnName: "id" }
    })
    favorited!: User[]

    @ManyToMany(() => User, (user) => user.watchList)
    @JoinTable({
        name: "usersWatchlisted",
        joinColumn: { name: "userId", referencedColumnName: "id" },
        inverseJoinColumn: { name: "mediaId", referencedColumnName: "id" }
    })
    watchlisted!: User[]
    

    @OneToMany(() => Rating, (rating) => rating.mediaId)
    ratings!: Rating[]
}