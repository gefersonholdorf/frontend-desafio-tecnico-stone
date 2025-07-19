import { UserCard } from "../user-card";
import { UserCardAvatar } from "../user-card/user-card-avatar";
import { UserCardInfo } from "../user-card/user-card-info";

export function UserList() {
    return (
        <>
            <div className="grid grid-cols-5 gap-4 w-full border rounded-2xl shadow-2xs bg-zinc-100 p-2">
                <UserCard.UserCardContent>
                    <div className="flex gap-2 items-center">
                        <UserCardAvatar />
                        <UserCardInfo />
                    </div>
                    <div>
                        <UserCard.UserCardFooter />
                    </div>
                </UserCard.UserCardContent>
                <UserCard.UserCardContent>
                    <div className="flex gap-2 items-center">
                        <UserCardAvatar />
                        <UserCardInfo />
                    </div>
                    <div>
                        <UserCard.UserCardFooter />
                    </div>
                </UserCard.UserCardContent>
                <UserCard.UserCardContent>
                    <div className="flex gap-2 items-center">
                        <UserCardAvatar />
                        <UserCardInfo />
                    </div>
                    <div>
                        <UserCard.UserCardFooter />
                    </div>
                </UserCard.UserCardContent>
                <UserCard.UserCardContent>
                    <div className="flex gap-2 items-center">
                        <UserCardAvatar />
                        <UserCardInfo />
                    </div>
                    <div>
                        <UserCard.UserCardFooter />
                    </div>
                </UserCard.UserCardContent>
                <UserCard.UserCardContent>
                    <div className="flex gap-2 items-center">
                        <UserCardAvatar />
                        <UserCardInfo />
                    </div>
                    <div>
                        <UserCard.UserCardFooter />
                    </div>
                </UserCard.UserCardContent>
                <UserCard.UserCardContent>
                    <div className="flex gap-2 items-center">
                        <UserCardAvatar />
                        <UserCardInfo />
                    </div>
                    <div>
                        <UserCard.UserCardFooter />
                    </div>
                </UserCard.UserCardContent>
                <UserCard.UserCardContent>
                    <div className="flex gap-2 items-center">
                        <UserCardAvatar />
                        <UserCardInfo />
                    </div>
                    <div>
                        <UserCard.UserCardFooter />
                    </div>
                </UserCard.UserCardContent>
            </div>
        </>
    )
}