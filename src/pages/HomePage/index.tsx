import React, { useEffect } from 'react';
import { CardRecipe } from '../../organisms';
import { MainHeader } from '../../organisms/MainHeader';
import { Switch, Route, Link, useParams } from 'react-router-dom';

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
        <>
            <MainHeader />
            <Switch>
                <Route exact path="/">
                    <View style={{ background: 'yellow' }}>
                        <Link to="/detail_1" />
                        <CardRecipe
                            title="Test"
                            supTitle="supTest"
                            image="https://i1.sndcdn.com/artworks-sylkYPAwTp95iXqn-ehwUOA-t500x500.jpg"
                            tag={['45 min', '450 kCal', 'Caribbean']}
                        />
                    </View>
                </Route>
                <Route path="/detail_:id" children={<Child />} />
                <Route path="/dashboard">
                    <View>dashboard</View>
                </Route>
            </Switch>
        </>
    );
};
function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    const { id } = useParams<{ id: string | undefined }>();

    return (
        <div>
            <h3>ID: {id}</h3>
        </div>
    );
}
