import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Colors } from '../../style/globalStyles';

interface SearchInputProps {
    className?: string;
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: '2px 4px',
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            maxWidth: 276,
            borderRadius: 28,
            boxShadow: 'none',
            border: 1,
            borderStyle: 'solid',
            borderColor: Colors.shade20,
        },

        iconButton: {
            padding: 10,
            color: Colors.shade40,
        },
        input: {
            flex: 1,
            paddingRight: 16,
        },
    }),
);

export const SearchInput: React.FC<SearchInputProps> = () => {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
                onSubmit={(data) => {
                    console.log('data', data);
                }}
            >
                <SearchIcon />
            </IconButton>
            <InputBase type="search" className={classes.input} placeholder="Search" />
        </Paper>
    );
};
