import React, { useState } from "react";

import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {
  Container,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { KeyboardArrowRight } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [details, setDetails] = useState("");
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("Work");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title == "") {
      setTitleError(true);
    }

    if (details == "") {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details, category);
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a new note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          error={titleError}
          fullWidth
          required
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          error={detailsError}
          multiline
          rows={4}
          fullWidth
          required
        />

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>

          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="Work" control={<Radio />} label="Work" />
            <FormControlLabel value="Money" control={<Radio />} label="Money" />
            <FormControlLabel value="ToDos" control={<Radio />} label="ToDos" />
            <FormControlLabel
              value="Remainders"
              control={<Radio />}
              label="Remainders"
            />
          </RadioGroup>
        </FormControl>

        <Button
          onClick={() => console.log("You clicked me")}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
