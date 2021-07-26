import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface CardRecipeProps {
    title?: string;
}
// type SelfPosition = "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start";
const useStyles = makeStyles({
    root: {
        '#page': {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
        '& #toolbar': {
            position: 'fixed',
            display: 'block',
            width: '100%',
            zIndex: 10,
            boxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            backgroundColor: '#1BBBFB',
            padding: '0 16',
        },
        '#actions': {
            position: 'relative',
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            height: 64,
            top: 0,
            left: 0,
            right: 0,
            padding: 7,
            margin: 2,
            verticalAlign: 'middle',
        },
    },
    spacer: {
        display: 'flex',
        flex: 1,
        height: '100%',
        maxWidth: 348,
        minHeight: 384,
        borderRadius: 8,
    },
    card: {
        position: 'relative',
        height: 196,
    },
    icon: {},
    parentDiv: {
        '& #childId': {
            propertyName: 'something something',
        },
    },
    '#page': {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    '#actions': {
        position: 'relative',
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        height: 64,
        top: 0,
        left: 0,
        right: 0,
        padding: 7,
        margin: 2,
        verticalAlign: 'middle',
    },
    '& #toolbar': {
        position: 'fixed',
        display: 'block',
        width: '100%',
        zIndex: 10,
        boxSizing: 'border-box',
        MozBoxSizing: 'border-box',
        backgroundColor: '#1BBBFB',
        padding: '0 16',
    },
    '#title': {
        padding: 21,
        position: 'absolute',
        bottom: 0,
        color: '#fff',
    },
});

export const MainHeader: React.FC<CardRecipeProps> = ({}) => {
    const classes = useStyles();

    return (
        <div id="page" className={classes.root}>
            <div id="toolbar" data-0="height:192px" data-128="height: 64px">
                <div id="actions">
                    <div className={classes.spacer}></div>

                    <div className={classes.icon}></div>
                </div>
                <div
                    id="title"
                    data-0="font-size: 48px; padding: 0 0 24px 12px;"
                    data-128="font-size: 18px; padding: 0 0 21px 60px;"
                >
                    Page Title
                </div>
            </div>
        </div>
    );
};
