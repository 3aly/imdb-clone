import { Grid, Modal, Typography } from "@mui/material";
import { useStyles } from "./MovieModal.styles";
import { MovieModalProps } from "../../../types";

export const MovieModal = ({
  open,
  setOpen,
  title,
  date,
  posterUrl,

  overview,
}: MovieModalProps) => {
  const handleClose = () => {
    setOpen(false);
  };
  const { classes } = useStyles();
  return (
    <>
      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <div className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3} lg={3}>
              <img
                src={`https://image.tmdb.org/t/p/w500${posterUrl}`}
                alt={title}
                className={classes.image}
              />
            </Grid>
            <Grid item xs={6} md={6} className={classes.gridContainer}>
              <Typography variant="h5" className={classes.title}>
                {title}
              </Typography>
              <Typography
                color={"primary.text"}
                variant="subtitle1"
                className={classes.title}
              >
                {date}
              </Typography>

              <Typography
                color={"primary.grey"}
                variant="subtitle1"
                className={classes.description}
              >
                {overview}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Modal>
    </>
  );
};
