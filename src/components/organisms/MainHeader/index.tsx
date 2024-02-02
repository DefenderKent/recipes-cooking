// import React, { useState} from 'react';
// import {useDispatch} from 'react-redux';
//
// import {Colors} from '../../style/paletteOptions';
// import Image from '../../assets/image.png';
// import {clearFilter, filterRecipe, recipes, searchRecipe, updateOptions} from '../../store/recipes/recipesSlice';
// import {FilterModal} from '../../molecules/FilterModal';
// import {useAppSelector} from '../../store/hooks';
// import {HeaderWrap} from '../HeaderWrap';
// import {useRecipesStore} from "../../features/Recipe/hooks";
//
// interface MainHeaderProps {
//     scrolled: number;
//     className?: string;
// }
//
//
// export const MainHeader: React.FC<MainHeaderProps> = ({scrolled}) => {
//     scrolled;
//
//
//
//
//     const recipes2 = useRecipesStore(state=>state.recipes)
//     console.debug("MainHeaderRecipes", recipes2)
//     const classes = useStyles();
//     const dispatch = useDispatch();
//     const search = (query: string) => dispatch(searchRecipe(query));
//     const [isVisible, setVisible] = useState(false);
//     const recipe = useAppSelector(recipes);
//
//     const onToggle = () => {
//         setVisible((prev) => !prev);
//     };
//     const handleOptions = (id: number, isSelected: boolean) => {
//         dispatch(updateOptions({id, isSelected: !isSelected}));
//     };
//     const [calorieRange, setCalorieRange] = React.useState<number[]>(recipe.allItems.startRange);
//
//     const handleChange = (newValue: number[]) => {
//         setCalorieRange(newValue as number[]);
//     };
//     const onFilterRecipe = (calorieRange: number[]) => {
//         console.log('calorieRange', calorieRange);
//
//         dispatch(filterRecipe(calorieRange));
//         onToggle();
//     };
//     const onClear = () => {
//         dispatch(clearFilter());
//     };
//
//     return (
//         <div
//             id="global-nav"
//             className={`${classes.root} nav ${scrolled > 70 && 'scrolled-nav-mid'} ${scrolled > 100 && 'scrolled-nav'}`}
//         >
//
//             {/* <View className={classes.img}></View> */}
//             <FilterModal
//                 options={recipe.allItems.filters}
//                 handleOptions={handleOptions}
//                 handleCalorieRange={(props) => handleChange(props)}
//                 isVisible={isVisible}
//                 onToggle={onToggle}
//                 calorieRange={calorieRange.length ? calorieRange : recipe.allItems.startRange}
//                 startRange={recipe.allItems.startRange}
//                 filterRecipe={onFilterRecipe}
//                 onClear={onClear}
//             />
//         </div>
//     );
// };