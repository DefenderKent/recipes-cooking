import React from 'react';
import { CardRecipe } from '../../organisms';
import { MainHeader } from '../../organisms/MainHeader';

import { View } from '../../templates/View';

export const HomePage: React.FC = () => {
    return (
        <>
            <MainHeader />
            <View style={{ background: 'yellow' }}>
                <CardRecipe
                    title="Test"
                    supTitle="supTest"
                    image="https://i1.sndcdn.com/artworks-sylkYPAwTp95iXqn-ehwUOA-t500x500.jpg"
                    tag={['45 min', '450 kCal', 'Caribbean']}
                />
            </View>
        </>
    );
};
