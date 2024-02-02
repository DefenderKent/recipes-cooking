import { Typography as TypographyMU, TypographyProps } from '@material-ui/core';

interface IProps extends TypographyProps {
    title?: string;
}
export const Typography: React.FC<IProps> = (props) => {
    return <TypographyMU {...props} />;
};
