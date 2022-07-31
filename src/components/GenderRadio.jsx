import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useGender } from '../hooks/useGender';


const GenderRadio = () => {
    const { genderValues, gender, setGender } = useGender()

    return (
        <FormControl>
            <RadioGroup
                row
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                aria-labelledby="controlled-gender-radio-buttons-group"
                name="controlled-gender-radio-buttons-group"
            >
                {genderValues.map(gender =>
                    <FormControlLabel
                        key={gender.label}
                        value={gender.value}
                        control={<Radio size="small" />}
                        label={gender.label}
                    />
                )}
            </RadioGroup>
        </FormControl>
    );
}

export default GenderRadio
