import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function FilterAdmin() {

    const [station, setStation] = React.useState('station1');

    const handleChange = (event) => {
        setStation(event.target.value);
    };
    return (
        <>
            <FormControl className="w-32">
                <InputLabel id="demo-simple-select-label">Selection</InputLabel>
                <Select
                value={station}
                label="Station"
                onChange={handleChange}
                className="rounded-sm h-10"
                >
                    <MenuItem value={'station1'}>Station 1</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default FilterAdmin