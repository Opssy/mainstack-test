import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import axios from "axios";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Chart from "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

interface LineDataValue {
  x: string;
  y: number | unknown;
}

const Analytic: React.FC = () => {
  const [lineData, setLineData] = useState<LineDataValue[]>([]);
  const [countryDataName, setCountryDataName] = useState<any[]>([]);
  const [countryDataPercent, setCountryDataPercent] = useState<any[]>([]);
  const [sourceDataName, setSourceDataName] = useState<any[]>([]);
  const [sourceDataPercent, setSourceDataPercent] = useState<any[]>([]);

  const getDateDay = (dateObj: string) => {
    return new Date(dateObj).getDate().toString().padStart(2, "0");
  };

  const getDateMonth = (dateObj: string) => {
    return new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      new Date(dateObj)
    );
  };

  useEffect(() => {
    const url = "https://fe-task-api.mainstack.io/";
    axios({
      method: "GET",
      url: url,
    })
      .then((res) => {
        console.log(res);
        let arr: any[] = [];

        let countName: any[] = [];
        let countPercent: any[] = [];

        let sourceName: any[] = [];
        let sourcePercent: any[] = [];
        if (res.status === 200) {
          arr = Object.entries(res.data.graph_data.views).map(
            ([x, y]): LineDataValue => ({
              x: `${getDateDay(x)}-${getDateMonth(x)}`,
              y: y,
            })
          );
          setLineData(arr);
          countName = res.data.top_locations.map((count: any) => count.country);
          setCountryDataName(countName);
          countPercent = res.data.top_locations.map((per: any) => per.percent);
          setCountryDataPercent(countPercent);
          //source
          sourceName = res.data.top_sources.map((count: any) => count.source);
          setSourceDataName(sourceName);
          sourcePercent = res.data.top_sources.map((per: any) => per.percent);
          setSourceDataPercent(sourcePercent);
        } else {
          alert("Something went wrong. Please try again later!");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong. Please try again later!")!;
      });
  }, []);
  console.log(countryDataName);
  console.log(countryDataPercent);

  const datas = {
    // labels: label,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: lineData,
      },
    ],
  };

  const data = {
    labels: countryDataName,
    datasets: [
      {
        label: "percentage",
        data: countryDataPercent,
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const socialdata = {
    labels: sourceDataName,
    datasets: [
      {
        label: "percentage",
        data: sourceDataPercent,
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <Grid component={"section"} className="header">
        <Grid component={"div"}>
          <Typography variant="h3" className="title">
            Good morning Blessing
          </Typography>
          <Grid component={"p"} className="desc">
            Check out your dashboard summary.
          </Grid>
        </Grid>
        <Grid component={"div"}>
          <Typography variant="h6">View Analytics</Typography>
        </Grid>
      </Grid>
      <Stack direction="row" spacing={1}>
        <Chip label="1 Days" variant="outlined" />
        <Chip label="3 Days" variant="outlined" />
        <Chip label="7 Days" variant="outlined" />
        <Chip label="30 Days" variant="outlined" />
        <Chip label="All Time" variant="outlined" />
        <Chip label="Custom Date" variant="outlined" />
      </Stack>
      <Grid component={"div"}>
        <Grid component={"h2"}>Page View</Grid>
        <Grid component={"span"}>All time</Grid>
        <Grid component={"div"}>
          <Line data={datas} />
        </Grid>
      </Grid>
      <Grid component={"div"}>
        <Grid component={"div"} className="grid">
          <Grid component={"div"} className="grid-box">
            <Grid component={"div"} className="country">
              <Grid component={"div"} className="up">
                <Typography variant="h3">Top Locations</Typography>
                <Typography variant="h6">View full reports</Typography>
              </Grid>
              <Grid component={"div"} className="graph">
                <Grid component={"div"} className="listwrap">
                  <Grid component={"div"} className="list">
                    <Grid component={"span"} className="span">
                      <svg
                        width="21"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icons-ng"
                        viewBox="0 0 512 512"
                      >
                        <g fill-rule="evenodd" stroke-width="1pt">
                          <path fill="#fff" d="M0 0h512v512H0z" />
                          <path
                            fill="#008753"
                            d="M341.3 0H512v512H341.3zM0 0h170.7v512H0z"
                          />
                        </g>
                      </svg>
                    </Grid>
                    {countryDataName[0]}{" "}
                    <span className="num">{countryDataPercent[0]}%</span>
                    <Grid component={"span"} className="nig-dot"></Grid>
                  </Grid>
                  <Grid component={"div"} className="list">
                    <Grid component={"span"} className="span">
                      <svg
                        width="21"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icons-de"
                        viewBox="0 0 512 512"
                      >
                        <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                        <path d="M0 0h512v170.7H0z" />
                        <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                      </svg>
                    </Grid>
                    {countryDataName[1]}{" "}
                    <span className="num">{countryDataPercent[1]}%</span>
                    <Grid component={"span"} className="nig-dots"></Grid>
                  </Grid>
                  <Grid component={"div"} className="list">
                    <Grid component={"span"} className="span">
                      <svg
                        width="21"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icons-gh"
                        viewBox="0 0 512 512"
                      >
                        <path fill="#006b3f" d="M0 0h512v512H0z" />
                        <path fill="#fcd116" d="M0 0h512v341.3H0z" />
                        <path fill="#ce1126" d="M0 0h512v170.7H0z" />
                        <path d="m256 170.7 55.5 170.6L166.3 236h179.4L200.6 341.3z" />
                      </svg>
                    </Grid>
                    {countryDataName[2]}{" "}
                    <span className="num">{countryDataPercent[2]}%</span>
                    <Grid component={"span"} className="nig"></Grid>
                  </Grid>
                  <Grid component={"div"} className="list">
                    <Grid component={"span"} className="span">
                      <svg
                        width="21"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icons-fi"
                        viewBox="0 0 512 512"
                      >
                        <path fill="#fff" d="M0 0h512v512H0z" />
                        <path fill="#002f6c" d="M0 186.2h512v139.6H0z" />
                        <path fill="#002f6c" d="M123.2 0h139.6v512H123.1z" />
                      </svg>
                    </Grid>
                    {countryDataName[3]}{" "}
                    <span className="num">{countryDataPercent[3]}%</span>
                    <Grid component={"span"} className="nig-do"></Grid>
                  </Grid>
                  <Grid component={"div"} className="list">
                    <Grid component={"span"} className="span">
                      <svg
                        width="21"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icons-gb"
                        viewBox="0 0 512 512"
                      >
                        <path fill="#012169" d="M0 0h512v512H0z" />
                        <path
                          fill="#FFF"
                          d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"
                        />
                        <path
                          fill="#C8102E"
                          d="m184 324 11 34L42 512H0v-3l184-185zm124-12 54 8 150 147v45L308 312zM512 0 320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z"
                        />
                        <path
                          fill="#FFF"
                          d="M176 0v512h160V0H176zM0 176v160h512V176H0z"
                        />
                        <path
                          fill="#C8102E"
                          d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z"
                        />
                      </svg>
                    </Grid>
                    {countryDataName[4]}{" "}
                    <span className="num">{countryDataPercent[4]}%</span>
                    <Grid component={"span"} className="nig-d"></Grid>
                  </Grid>
                </Grid>
                <Grid component={"div"} className="pie">
                  <Doughnut data={data} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid component={"div"} className="grid-box">
            <Grid component={"div"} className="country">
              <Grid component={"div"} className="up">
                <Typography variant="h3">Top Source</Typography>
                <Typography variant="h6">View full reports</Typography>
              </Grid>
              <Grid component={"div"} className="graph">
                <Grid component={"div"} className="listwrap">
                  <Grid component={"div"} className="list">
                    <Grid component={"span"} className="span">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                    </Grid>
                    {sourceDataName[0]}{" "}
                    <span className="num">{sourceDataPercent[0]}%</span>
                    <Grid component={"span"} className="nig-do"></Grid>
                  </Grid>
                  <Grid component={"div"} className="list">
                    <Grid component={"span"} className="span">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.54171 2.80081C1.23199 4.16123 1.50004 5.60637 1.50004 9.99665C1.50004 13.6425 0.863932 17.2973 4.1931 18.1578C5.23268 18.4251 14.4438 18.4251 15.482 18.1564C16.8681 17.7987 17.9959 16.6744 18.15 14.714C18.1716 14.4404 18.1716 5.55776 18.1493 5.27859C17.9855 3.1904 16.7 1.98693 15.0063 1.74318C14.6181 1.68693 14.5403 1.67026 12.5487 1.66679C5.48407 1.67026 3.93546 1.35568 2.54171 2.80081Z"
                          fill="url(#paint0_linear_703_964)"
                        />
                        <path
                          d="M9.83191 3.84652C7.31038 3.84652 4.91594 3.62221 4.00135 5.96943C3.62358 6.93888 3.67844 8.1979 3.67844 10.0007C3.67844 11.5826 3.62774 13.0694 4.00135 14.0312C4.91385 16.3798 7.32774 16.1548 9.83052 16.1548C12.2451 16.1548 14.7347 16.4062 15.6604 14.0312C16.0389 13.0521 15.9833 11.8118 15.9833 10.0007C15.9833 7.59652 16.1159 6.04443 14.95 4.87915C13.7694 3.6986 12.1729 3.84652 9.82913 3.84652H9.83191ZM9.28052 4.95554C14.5402 4.94721 15.2097 4.36249 14.8402 12.4854C14.709 15.3583 12.5215 15.043 9.8326 15.043C4.92983 15.043 4.78885 14.9028 4.78885 9.9979C4.78885 5.0361 5.17774 4.95832 9.28052 4.95415V4.95554ZM13.1166 5.97707C12.709 5.97707 12.3784 6.30763 12.3784 6.71527C12.3784 7.1229 12.709 7.45346 13.1166 7.45346C13.5243 7.45346 13.8548 7.1229 13.8548 6.71527C13.8548 6.30763 13.5243 5.97707 13.1166 5.97707ZM9.83191 6.84026C8.08677 6.84026 6.67219 8.25554 6.67219 10.0007C6.67219 11.7458 8.08677 13.1604 9.83191 13.1604C11.577 13.1604 12.9909 11.7458 12.9909 10.0007C12.9909 8.25554 11.577 6.84026 9.83191 6.84026ZM9.83191 7.94929C12.5437 7.94929 12.5472 12.0521 9.83191 12.0521C7.1208 12.0521 7.11663 7.94929 9.83191 7.94929Z"
                          fill="white"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_703_964"
                            x1="2.57367"
                            y1="17.2689"
                            x2="18.0636"
                            y2="3.86261"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#FFDD55" />
                            <stop offset="0.5" stop-color="#FF543E" />
                            <stop offset="1" stop-color="#C837AB" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </Grid>
                    {sourceDataName[1]}{" "}
                    <span className="num">{sourceDataPercent[1]}%</span>
                    <Grid component={"span"} className="nig-dots"></Grid>
                  </Grid>
                  <Grid component={"div"} className="list">
                    <Grid component={"span"} className="span">
                      <svg
                        width="12"
                        height="20"
                        viewBox="0 0 12 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.6219 11.165L11.1728 7.57281H7.72621V5.24168C7.72621 4.25891 8.20765 3.30098 9.7514 3.30098H11.3185V0.242734C11.3185 0.242734 9.89629 0 8.53668 0C5.698 0 3.84273 1.72039 3.84273 4.83496V7.57281H0.687378V11.165H3.84273V19.849C4.47543 19.9483 5.1239 20 5.78449 20C6.44507 20 7.09355 19.9483 7.72621 19.849V11.165H10.6219Z"
                          fill="#1877F2"
                        />
                      </svg>
                    </Grid>
                    {sourceDataName[2]}{" "}
                    <span className="num">{countryDataPercent[2]}%</span>
                    <Grid component={"span"} className="nig-dot"></Grid>
                  </Grid>
                  <Grid component={"div"} className="list">
                    <Grid component={"span"} className="span">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.3334 3.75008C18.3334 2.60024 17.3999 1.66675 16.25 1.66675H3.75002C2.60018 1.66675 1.66669 2.60024 1.66669 3.75008V16.2501C1.66669 17.3999 2.60018 18.3334 3.75002 18.3334H16.25C17.3999 18.3334 18.3334 17.3999 18.3334 16.2501V3.75008Z"
                          fill="#2867B2"
                        />
                        <path
                          d="M6.44407 7.4812H3.6524V15.8784H6.44407V7.4812Z"
                          fill="white"
                        />
                        <path
                          d="M5.06879 3.43262C4.11368 3.43262 3.48962 4.06055 3.48962 4.88356C3.48962 5.68929 4.0947 6.33454 5.03184 6.33454H5.04988C6.02328 6.33454 6.62917 5.68929 6.62917 4.88356C6.61111 4.06055 6.02335 3.43262 5.06879 3.43262V3.43262Z"
                          fill="white"
                        />
                        <path
                          d="M13.3046 7.28589C11.8238 7.28589 11.1605 8.10024 10.7891 8.67225V7.48335H7.99811C8.03512 8.27101 7.99811 15.8805 7.99811 15.8805H10.789V11.1909C10.789 10.9399 10.8071 10.689 10.8811 10.5096C11.0825 10.0083 11.542 9.48901 12.3131 9.48901C13.3226 9.48901 13.727 10.2593 13.727 11.3877V15.8805H16.5181V11.0651C16.5181 8.48576 15.141 7.28589 13.3046 7.28589V7.28589Z"
                          fill="white"
                        />
                      </svg>
                    </Grid>
                    {sourceDataName[3]}{" "}
                    <span className="num">{sourceDataPercent[3]}%</span>
                    <Grid component={"span"} className="nig"></Grid>
                  </Grid>
                </Grid>
                <Grid component={"div"} className="pie">
                  <Doughnut data={socialdata} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Analytic;
