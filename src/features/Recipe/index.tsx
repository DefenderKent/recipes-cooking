import { pageMounted } from './model';

const entity = {
    loaders: {
        initRecipes: async () => {
            pageMounted();
            return {};
        },
    },
};
export default entity;
