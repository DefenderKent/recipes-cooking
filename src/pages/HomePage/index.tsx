import React, { useEffect } from 'react';
import { CardRecipe } from '../../organisms';

import { View } from '../../templates/View';
import { getRecipes } from '../../api/axios/recipes';

export const HomePage: React.FC = () => {
    const req = async () => {
        try {
            const { data } = await getRecipes();
            console.log('data', data.recipes);
        } catch (error) {}
    };
    useEffect(() => {
        req();
    }, []);
    return (
        <View style={{ background: 'yellow' }}>
            <CardRecipe
                title="Test"
                supTitle="supTest"
                image="https://i1.sndcdn.com/artworks-sylkYPAwTp95iXqn-ehwUOA-t500x500.jpg"
                tag={['45 min', '450 kCal', 'Caribbean']}
            />
        </View>
    );
};
