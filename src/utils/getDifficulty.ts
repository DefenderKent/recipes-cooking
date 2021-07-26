import { Colors, Difficulty } from '../style/globalStyles';

export const getDifficulty = (difficulty: keyof typeof Difficulty): { color: string; title: string } => {
    switch (difficulty) {
        case 'Easy':
            return { color: Colors.easy, title: 'Easy' };
        case 'Medium':
            return { color: Colors.medium, title: 'Medium' };
        case 'Hard':
            return { color: Colors.hard, title: 'Hard' };
        default:
            return { color: Colors.easy, title: 'Easy' };
    }
};
