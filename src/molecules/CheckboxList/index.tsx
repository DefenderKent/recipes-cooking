import React from 'react';
import CSS from 'csstype';
import {FormGroup} from '@material-ui/core';
import {Checkbox} from 'src/components';
import {Cuisine} from "../../api/types";
import {Controller} from "react-hook-form";


interface CheckboxListProps {
    style?: CSS.Properties;
    className?: string;
    options?: Cuisine[];
    control: any
    setValue:any
}

export const CheckboxList: React.FC<CheckboxListProps> = ({control, options}) => {
    const [value, setValue] = React.useState(options?.map(s=>s.id)||[]);
    return (


        <FormGroup>
            {options?.map((item,index) => {

                return (
                    <Controller name={'cuisines'} control={control} key={item.id}
                                render={({
                                             field: {
                                                 onChange,

                                             }
                                         }) => {
                                    return <Checkbox

                                        labelPlacement="start"
                                        textLabel={item.title}
                                        checkboxPropsUI={{
                                            color: 'default',
                                            value:item.id,
                                            onChange:(e)=>{
                                                const valueCopy = [...value];
                                                valueCopy[index] = e.target.checked ? +e.target.value : 0;

                                                // send data to react hook form
                                                onChange(valueCopy);

                                                // update local state
                                                setValue(valueCopy);
                                            },
                                            // checked: item.isSelected
                                        }}
                                    />
                                }}/>

                );
            })}
        </FormGroup>
    );
};
