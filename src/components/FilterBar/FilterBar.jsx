import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import "./FilterBar.css"

const FilterSelect = () => {
    const [items, setItems] = React.useState("");

    const handleChange = (event) => {
        setItems(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 220}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filtrar</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={items}
                    label="Seleccione"
                    onChange={handleChange}
                >
                    <div>
                    <MenuItem value={false}>
                    <Link to="/" className="MuiTypography-root">Todos</Link>
                    </MenuItem>
                    <MenuItem value={false}>
                        <Link to="/category/false" className="MuiTypography-root">Juegos Pagos</Link>
                    </MenuItem>
                    <MenuItem value={true}>
                        <Link to="/category/true" className="MuiTypography-root">Juegos Free to play</Link>
                    </MenuItem>
                    </div>
                </Select>
            </FormControl>
        </Box>
    );
}

export default FilterSelect