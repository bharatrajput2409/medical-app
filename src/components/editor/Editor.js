import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./Toolbar";
import "react-quill/dist/quill.snow.css";
import {
  Chip,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
const useStyles = makeStyles((theme) => ({
  root: {},
  urlTextFiled: {
    "& .MuiInput-underline:after": {
      background: "red",
      border: "none",
    },
    "& .MuiInputBase-root::before": {
      outline: "none",
      border: "none",
    },
    padding: " 8px 14px",
    width: "calc(100% - 28px)",
  },
  autocomplete: {
    width: "calc(100% - 28px)",
    margin: " 4px 14px",
    border: "none",
    "& .MuiOutlinedInput-root fieldset": {
      border: "none",
    },
  },
}));
export const Editor = () => {
  const [state, setState] = React.useState({ value: null });
  const handleChange = (value) => {
    setState({ value });
  };
  const classes = useStyles();
  return (
    <div className="text-editor">
      <EditorToolbar />
      <div className="ql-container-paper">
        <TextField
          component={Paper}
          className={classes.urlTextFiled}
          placeholder={"Topic Url..."}
        />
        <Paper>
          <Typography component="div">
            <ReactQuill
              theme="snow"
              value={state.value}
              onChange={handleChange}
              modules={modules}
              formats={formats}
              placeholder="Article body here..."
            />
          </Typography>
        </Paper>
        <Paper>
          <Autocomplete
            multiple
            id="tags-filled"
            options={[]}
            freeSolo
            className={classes.autocomplete}
            // value={props.companyProfileFrom.keyClients
            //   .split("`")
            //   .filter((el) => el != "")}
            // onChange={onKeyClientChange}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                placeholder="Symptoms ..."
              />
            )}
          />
        </Paper>
      </div>
    </div>
  );
};

export default Editor;