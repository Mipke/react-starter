import React from 'react';
import { useStoreActions, useStoreState } from '../../../state/state';

export default () => {
    const { userId } = useStoreState((store) => store.userChapter);
    const { setUserId } = useStoreActions((store) => store.userChapter);

    return (
        <div>
            <h1>Home Scren</h1>
            <p>{userId ?? 'No User'}</p>
            <button onClick={() => setUserId('user-id')}>Set User</button>
        </div>
    );
};
