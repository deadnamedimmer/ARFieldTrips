import React, { Fragment, ReactElement } from "react";
import { Grid, Box, Typography } from "@material-ui/core";

declare interface itemProps {
  file: string;
  image: string;
  audio: string | null;
  title: string;
  info: string;
}

const Item: React.FunctionComponent<itemProps> = ({
  file,
  image,
  audio,
  title,
  info,
}) => {
  return (
    <Fragment>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <Grid item xs={12} md={5}>
          <a rel="ar" href={file}>
            <img
              src={image}
              style={{ maxWidth: "100%", maxHeight: "80vh", float: "right" }}
            />
          </a>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box style={{ overflowY: "scroll", paddingLeft: "2%" }}>
            <Typography variant="h3">{title}</Typography>
            {audio !== null && (
              <audio controls>
                <source src={audio} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            )}
            <Typography variant="body1">{info}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Item;
