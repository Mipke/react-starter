import { createStore, createTypedHooks } from 'easy-peasy';
import { userChapter, UserChapter } from './chapters/UserChapter';

interface StateModel {
    userChapter: UserChapter;
}
const stateModel: StateModel = {
    userChapter
};

const { useStoreState, useStoreActions, useStoreDispatch } = createTypedHooks<StateModel>();
export { useStoreState, useStoreActions, useStoreDispatch };

export default createStore(stateModel);
