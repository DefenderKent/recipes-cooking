import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Colors } from '../../../style/paletteOptions';

interface SearchInputProps {
    className?: string;
    search: (query: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = (props) => {
 
    return (
        <Paper component="form">
            <IconButton type="button" aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                type="search"
                placeholder="Search"
                onChange={(text) => props.search(text.target.value)}
                inputProps={{ 'aria-label': 'search' }}
            />
        </Paper>
    );
};
