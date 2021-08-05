import AccessTimeIcon from '@material-ui/icons/AccessTime';
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';

import { Difficulty } from '../style/mainThem';
import { Hat } from '../assets/Hat';
import { Colors } from '../style/paletteOptions';

export const getLabelInfo = (
    difficulty: keyof typeof Difficulty,
    title?: string,
): { color: string; title: string; icon: JSX.Element } => {
    switch (difficulty) {
        case 'easy':
            return { color: Colors.easy, title: 'Easy', icon: Hat({ color: Colors.easy }) };
        case 'medium':
            return { color: Colors.medium, title: 'Medium', icon: Hat({ color: Colors.medium }) };
        case 'hard':
            return { color: Colors.hard, title: 'Hard', icon: Hat({ color: Colors.hard }) };
        case 'time':
            return {
                color: Colors.base0,
                title: title ? title : '',
                icon: <AccessTimeIcon style={{ color: Colors.grey }} />,
            };
        case 'kCal':
            return {
                color: Colors.base0,
                title: title ? title : '',
                icon: <WhatshotOutlinedIcon style={{ color: Colors.grey }} />,
            };
        case 'cuisine':
            return {
                color: Colors.base0,
                title: title ? title : '',
                icon: <LanguageOutlinedIcon style={{ color: Colors.grey }} />,
            };
        default:
            return { color: Colors.easy, title: 'Easy', icon: Hat({ color: Colors.easy }) };
    }
};
