import React from 'react';
import IconButton from '@material-ui/core/IconButton';

import FilterIcon from '@material-ui/icons/FilterList';

import { View } from '../../templates/View';

export const HomePage: React.FC = () => {
    return (
        <>
            <View style={{ color: 'red' }}>
                <IconButton
                    aria-label="delete2"
                    centerRipple={false}
                    onClick={() => console.log('aasas')}
                    color="inherit"
                >
                    <FilterIcon />
                </IconButton>
            </View>
        </>
    );
};
