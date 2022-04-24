import React from 'react';
// import './ReportStyle.css';
// import MapSensor from './MapSensor';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import moment from 'moment';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { format } from 'timeago.js';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import mapboxgl from "mapbox-gl";

const WhiteTextTypography = withStyles({
  root: {
    color: '#FFFFFF',
  },
})(Typography);

const styles = (theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(2),
  },
});

class ReportNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data_sensor: {
        pH: '',
        DO: '',
        EC: '',
        timestamp: '',
        lastupdate: '',
      },
      date_sensor_timeline4: [],
      date_sensor_pie3: [{}],
      date_sensor_timeline_all: [],
      date_sensor_area_all6: [],
    };
  }

  intervalID; //auto refresh every 1 minute function

  componentDidMount() {
    this.callAPI();
    // setInterval(this.callAPI, 15000); // runs every 15 seconds. 60000 = 1 minute
    this.intervalID = setInterval(this.callAPI.bind(this), 5000); //auto refresh every 1 minute function
  }

  //auto refresh every 1 minute function
  componentWillUnmount() {
    /*
      stop getData() from continuing to run even
      after unmounting this component
    */
    clearInterval(this.intervalID);
  }

  callAPI() {
    axios
      .get('http://localhost:8000/api/sensor')
      .then((response) => {
        const data = response.data;
        const lastData = data.slice(0)[0];

        this.setState({
          data_sensor: {
            pH: lastData['pH'],
            DO: lastData['DO'],
            EC: lastData['EC'],
            timestamp: lastData['timestamp'],
            lastupdate: lastData['lastupdate'],
          },
          date_sensor_timeline4: data.slice(0, 8).reverse(),
          date_sensor_pie3: [
            { name: 'pH', value: lastData['pH'] },
            { name: 'DO', value: lastData['DO'] },
            { name: 'EC', value: lastData['EC'] },
          ],
          date_sensor_timeline_all: data,
          date_sensor_area_all6: data.slice(0, 15).reverse(),
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  

  render() {
    const { classes } = this.props;
    const {
      data_sensor,
      date_sensor_timeline4,
      date_sensor_pie3,
      date_sensor_area_all6,
      // date_sensor_area_all,
    } = this.state;

    //Last update Status
    const lastUpdate = data_sensor.lastupdate;
    // console.log("LastUpdate", lastUpdate);
    // console.log(format(lastUpdate));

    // console.log("Data PIE"+date_sensor_pie3)

    return (
      <div className={classes.root}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <WhiteTextTypography align="left">IoT Sensor</WhiteTextTypography>
            </Grid>
            <Grid item xs={6}>
              <WhiteTextTypography align="right">
                Last updated: {format(lastUpdate)}
              </WhiteTextTypography>
            </Grid>
            {/* <Grid item xs={12}>
              <MapSensor />
            </Grid> */}
            <Grid item xs={6} sm={4}>
              <Paper className={classes.paper}>
                <Typography>pH</Typography>
                <Typography variant="h3">
                  {data_sensor.pH.toLocaleString()}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper className={classes.paper}>
                <Typography>DO</Typography>
                <Typography variant="h3">
                  {data_sensor.DO.toLocaleString()}
                  <span className="unit_sensor"> mg/L</span>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper className={classes.paper}>
                <Typography>EC</Typography>
                <Typography variant="h3">
                  {data_sensor.EC.toLocaleString()}
                  <span className="unit_sensor"> μS/c m</span>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    width={500}
                    height={300}
                    data={date_sensor_timeline4}
                    margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="timestamp"
                      tickFormatter={(unixTime) =>
                        moment(unixTime).format('HH:mm')
                      }
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pH" fill="#9FEAFF" />
                    <Bar dataKey="DO" fill="#37C2A4" />
                    <Bar dataKey="EC" fill="#043A5B" />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart width={400} height={400}>
                    <Legend />
                    <Pie
                      dataKey="value"
                      isAnimationActive={false}
                      data={date_sensor_pie3}
                      outerRadius={100}
                      label
                    >
                      <Cell fill="#9FEAFF" />
                      <Cell fill="#37C2A4" />
                      <Cell fill="#043A5B" />
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart
                    width={730}
                    height={250}
                    data={date_sensor_area_all6}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorpH" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#9FEAFF"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#9FEAFF"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient id="colorDO" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#37C2A4"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#37C2A4"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient id="colorEC" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#043A5B"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#043A5B"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="timestamp"
                      tickFormatter={(unixTime) =>
                        moment(unixTime).format('HH:mm')
                      }
                    />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="pH"
                      stroke="#9FEAFF"
                      fillOpacity={1}
                      fill="url(#colorpH)"
                    />
                    <Area
                      type="monotone"
                      dataKey="DO"
                      stroke="#37C2A4"
                      fillOpacity={1}
                      fill="url(#colorDO)"
                    />
                    <Area
                      type="monotone"
                      dataKey="EC"
                      stroke="#043A5B"
                      fillOpacity={1}
                      fill="url(#colorEC)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(ReportNew);