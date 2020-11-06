import React, { useState } from "react";
import "./ScoreTask.css";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
// import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";

function ScoreTask() {
  const [backdrop, setBackdrop] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [open, setOpen] = React.useState(false);

  const searchImages = (e) => {
    e.preventDefault();
    setBackdrop(true);
    setTimeout(() => {
      setBackdrop(false);
      setShowImages(true);
    }, 2500);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const useStyles = makeStyles((theme) => ({
  //   form: {
  //     display: "flex",
  //     flexDirection: "column",
  //     margin: "auto",
  //     width: "fit-content",
  //   },
  //   formControl: {
  //     marginTop: theme.spacing(2),
  //     minWidth: 120,
  //   },
  //   formControlLabel: {
  //     marginTop: theme.spacing(1),
  //   },
  // }));

  return (
    <div className="scoreTask">
      <Backdrop className="scoreTask__backdrop" open={backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Score Tasks</DialogTitle>
        <DialogContent>
          <div className="scoreTask__modal">
            <img src={"https://picsum.photos/400/500"} alt="task"></img>
            <form noValidate>
              <FormControl className="scoreTask__select">
                <InputLabel id="rating">Select Rating</InputLabel>
                <Select labelId="rating">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => {
                    return <MenuItem value={rating}>{rating}</MenuItem>;
                  })}
                </Select>
              </FormControl>

              <TextField
                className="scoreTask__input"
                id="standard-basic"
                label="Additional Comments"
              />
              <button>Download Image</button>
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {showImages ? (
        <>
          <div className="scoreTask__allImages">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((image) => {
              return (
                <img
                  onClick={() => setOpen(true)}
                  src={"https://picsum.photos/400/500"}
                  alt="task"
                ></img>
              );
            })}
          </div>
        </>
      ) : (
        <div className="scoreTask__content">
          <h3>Score tasks</h3>
          <form>
            <input placeholder="Task Name/ID"></input>
            <button onClick={searchImages}>Search</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ScoreTask;
