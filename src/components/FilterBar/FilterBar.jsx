import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import "./FilterBar.css";

const FilterSelect = () => {
    const [items, setItems] = React.useState("");

    const handleChange = (event) => {
        setItems(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 180 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filtrar</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Filtrar"
                    onChange={handleChange}
                ><div>
                        <Link to="/" className="MuiTypography-root">
                            <MenuItem value={1}>
                                Todos
                            </MenuItem>
                        </Link>
                        <Link to="/category/false" className="MuiTypography-root">
                            <MenuItem value={2}>
                                Juegos Pagos
                            </MenuItem>
                        </Link>
                        <Link to="/category/true" className="MuiTypography-root">
                            <MenuItem value={3}>
                                Juegos Free to play
                            </MenuItem>
                        </Link>
                    </div>
                </Select>
            </FormControl>
        </Box>
    );
};

export default FilterSelect;
