import { Column, Entity, Index, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Media } from "../media/media.entity";
import { Rating } from "../rating/rating.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
    
    @Column()
    @Index({ unique: true })
    email!: string;

    @Column()
    userName!: string;

    @Column()
    bio!: string;

    @Column()
    fullName!: string;

    @Column()
    emailVerified!: boolean;

    @Column({ type: "date" })
    joinDate!: Date;

    @Column({ type: "date" })
    birthDate!: Date;

    @Column()
    profilePictureUrl!: string;

    @ManyToMany(() => User, (user) => user.friends)
    @JoinTable({
        name: "userFriends",
        joinColumn: { name: "userId", referencedColumnName: "id" },
        inverseJoinColumn: { name: "friendId", referencedColumnName: "id" }
    })
    friends!: User[]

    @ManyToMany(() => Media, (media) => media.favorited)
    @JoinTable({
        name: "userFavorites",
        joinColumn: { name: "userId", referencedColumnName: "id" },
        inverseJoinColumn: { name: "mediaId", referencedColumnName: "id" }
    })
    favorites!: Media[];

    @ManyToMany(() => Media, (media) => media.watchlisted)
    @JoinTable({
        name: "userWatchlsit",
        joinColumn: { name: "userId", referencedColumnName: "id" },
        inverseJoinColumn: { name: "mediaId", referencedColumnName: "id" }
    })
    watchList!: Media[]

    @OneToMany(() => Rating, (rating) => rating.userId)
    ratings!: Rating[]
}