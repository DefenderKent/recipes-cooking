import { Colors, Difficulty } from '../style/globalStyles';

export const getDifficulty = (difficulty: keyof typeof Difficulty): { color: string; title: string } => {
    switch (difficulty) {
        case 'easy':
            return { color: Colors.easy, title: 'Easy' };
        case 'medium':
            return { color: Colors.medium, title: 'Medium' };
        case 'hard':
            return { color: Colors.hard, title: 'Hard' };
        default:
            return { color: Colors.easy, title: 'Easy' };
    }
};
