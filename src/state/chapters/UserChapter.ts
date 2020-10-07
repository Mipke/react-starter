import { action, Action } from 'easy-peasy';

export interface UserChapter {
    userId: string | null;

    setUserId: Action<UserChapter, string | null>;
}

export const userChapter: UserChapter = {
    userId: null,

    setUserId: action((state, payload) => {
        state.userId = payload;
    })
};
