import { Grid, Box, Button, Typography } from "@mui/material"
import img from '../assets/img.png'

export const Home = () => {
    return (
        <Box id="home">
            <Grid container>
                <Grid item lg={6} md={12} sm={12} xs={12}>
                    <Typography variant="body1" className="orange_color bold_text head">
                        CONECTING THE DISCONNECTED
                    </Typography>
                    <h1>
                        <span className="orange_color">Vyorius</span> brings unmanned<br />
                        robots <span className="orange_color">together</span>,<br />
                        wherever they are<br />
                    </h1>
                    <Typography variant="body1" className="bold_text description">
                        With all of the operations, commanding and maintenance<br />
                        tools in one place, unmanned vehicles will stay connected<br />
                        and productive no matter where you’re Delivering<br />
                    </Typography>
                    <Button className="left_button">Try  Vyorius</Button>
                    <Button >Learn More</Button>
                    <Typography variant="body2">Need to order a delivery?  <a href="/">Get Started</a></Typography>
                </Grid>
                <Grid item lg={6} md={12} sm={12} xs={12}>
                    <img src={img} alt="vyorius" />
                </Grid>
            </Grid>
        </Box>
    )
}