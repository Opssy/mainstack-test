import { Grid, Typography } from "@mui/material";
import React from "react";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Chart from "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

const label = ["January", "February", "March", "April", "May", "June"];
const datas = {
  labels: label,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const data = {
    labels: ["Nigeria", "United states", "Netherlands", "Andorra", "Others"],
    datasets: [
      {
        label: "percentage",
        data: [50, 24, 24, 24, 24],
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
    labels: ["Facebook", "Instagram", "LinkedIn", "Twitter", "Others"],
    datasets: [
      {
        label: "percentage",
        data: [50, 24, 24, 24, 24],
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
const Analytic: React.FC = () => {
    return(
        <>
        <Grid component={'section'} className="header">
         <Grid component={'div'}>
            <Typography variant="h3" className="title">Good morning Blessing</Typography>
            <Grid component={'p'} className="desc">Check out your dashboard summary.</Grid>
         </Grid>
         <Grid component={'div'}>
           <Typography variant="h6">
             View Analytics
           </Typography>
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
        <Grid component={'div'}>
          <Grid component={'h2'}>Page View</Grid>
          <Grid component={'span'}>All time</Grid>
          <Grid component={'div'}>
           <Line data={datas} />
          </Grid>
        </Grid>
        <Grid component={'div'}>
          <Grid component={'div'} className="grid">
            <Grid component={'div'} className="grid-box">
              <Grid component={'div'} className="country">
                <Grid component={'div'} className="up">
                    <Typography variant="h3">Top Locations</Typography>
                    <Typography variant="h6">View full reports</Typography>
                </Grid>
                <Grid component={'div'} className="graph">
                  <Grid component={'div'} className="listwrap">
                  <Grid component={'div'} className="list">
                        <Grid component={'span'} className="span">
                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H7V15.5H0V0.5ZM14 0.5H21V15.5H14V0.5Z" fill="#0A6A30"/>
                        </svg>
                        </Grid>
                         Nigeria <span className="num">50%</span>
                        <Grid component={'span'} className="nig-dot"></Grid>
                  </Grid>
                  <Grid component={'div'} className="list">
                        <Grid component={'span'} className="span">
                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_703_925)">
                        <rect y="0.5" width="21" height="15" rx="3" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H9V7.5H0V0.5Z" fill="#1A47B8"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0.5V1.5H21V0.5H9ZM9 2.5V3.5H21V2.5H9ZM9 4.5V5.5H21V4.5H9ZM9 6.5V7.5H21V6.5H9ZM0 8.5V9.5H21V8.5H0ZM0 10.5V11.5H21V10.5H0ZM0 12.5V13.5H21V12.5H0ZM0 14.5V15.5H21V14.5H0Z" fill="#F93939"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 1.5V2.5H2V1.5H1ZM3 1.5V2.5H4V1.5H3ZM5 1.5V2.5H6V1.5H5ZM7 1.5V2.5H8V1.5H7ZM6 2.5V3.5H7V2.5H6ZM4 2.5V3.5H5V2.5H4ZM2 2.5V3.5H3V2.5H2ZM1 3.5V4.5H2V3.5H1ZM3 3.5V4.5H4V3.5H3ZM5 3.5V4.5H6V3.5H5ZM7 3.5V4.5H8V3.5H7ZM1 5.5V6.5H2V5.5H1ZM3 5.5V6.5H4V5.5H3ZM5 5.5V6.5H6V5.5H5ZM7 5.5V6.5H8V5.5H7ZM6 4.5V5.5H7V4.5H6ZM4 4.5V5.5H5V4.5H4ZM2 4.5V5.5H3V4.5H2Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_703_925">
                        <rect y="0.5" width="21" height="15" rx="3" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>

                        </Grid>
                         United states <span className="num">24%</span>
                        <Grid component={'span'} className="nig-dots"></Grid>
                  </Grid>
                  <Grid component={'div'} className="list">
                        <Grid component={'span'} className="span">
                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_703_931)">
                        <rect y="0.5" width="21" height="15" rx="3" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.5H21V15.5H0V10.5Z" fill="#1E448D"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H21V5.5H0V0.5Z" fill="#B01923"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_703_931">
                        <rect y="0.5" width="21" height="15" rx="3" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        </Grid>
                         Netherlands <span className="num">24%</span>
                        <Grid component={'span'} className="nig"></Grid>
                  </Grid>
                  <Grid component={'div'} className="list">
                        <Grid component={'span'} className="span">
                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_703_937)">
                        <path d="M19 0.5H2C0.89543 0.5 0 1.39543 0 2.5V13.5C0 14.6046 0.89543 15.5 2 15.5H19C20.1046 15.5 21 14.6046 21 13.5V2.5C21 1.39543 20.1046 0.5 19 0.5Z" fill="#FFDA2C"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.936 10.435C12.55 10.248 13 9.677 13 9V6C13 5.165 12.328 4.5 11.5 4.5H9.5C8.674 4.5 8 5.17 8 6V9C8 9.682 8.448 10.25 9.064 10.436C9.25 11.056 9.822 11.5 10.5 11.5C11.182 11.5 11.75 11.05 11.936 10.435Z" fill="#D4AF2C"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 5.5H10V7H9V5.5ZM11 7.5H12V9H11V7.5Z" fill="#AF010D"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 5.5H12V7H11V5.5ZM9 7.5H10V9H9V7.5Z" fill="#FFDA2C"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0.5H21V15.5H14V0.5Z" fill="#F93939"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H7V15.5H0V0.5Z" fill="#1A47B8"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_703_937">
                        <rect y="0.5" width="21" height="15" rx="3" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        </Grid>
                         Andorra <span className="num">24%</span>
                        <Grid component={'span'} className="nig-do"></Grid>
                  </Grid>
                  <Grid component={'div'} className="list">
                         Others <span className="num">24%</span>
                        <Grid component={'span'} className="nig-d"></Grid>
                  </Grid>
                  </Grid>
                  <Grid component={'div'} className="pie">
                   <Doughnut data={data} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid component={'div'} className="grid-box">
              <Grid component={'div'} className="country">
                <Grid component={'div'} className="up">
                    <Typography variant="h3">Top Locations</Typography>
                    <Typography variant="h6">View full reports</Typography>
                </Grid>
                <Grid component={'div'} className="graph">
                  <Grid component={'div'} className="listwrap">
                  <Grid component={'div'} className="list">
                        <Grid component={'span'} className="span">
                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H7V15.5H0V0.5ZM14 0.5H21V15.5H14V0.5Z" fill="#0A6A30"/>
                        </svg>
                        </Grid>
                         Facebook<span className="num">50%</span>
                        <Grid component={'span'} className="nig-dot"></Grid>
                  </Grid>
                  <Grid component={'div'} className="list">
                        <Grid component={'span'} className="span">
                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_703_925)">
                        <rect y="0.5" width="21" height="15" rx="3" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H9V7.5H0V0.5Z" fill="#1A47B8"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0.5V1.5H21V0.5H9ZM9 2.5V3.5H21V2.5H9ZM9 4.5V5.5H21V4.5H9ZM9 6.5V7.5H21V6.5H9ZM0 8.5V9.5H21V8.5H0ZM0 10.5V11.5H21V10.5H0ZM0 12.5V13.5H21V12.5H0ZM0 14.5V15.5H21V14.5H0Z" fill="#F93939"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 1.5V2.5H2V1.5H1ZM3 1.5V2.5H4V1.5H3ZM5 1.5V2.5H6V1.5H5ZM7 1.5V2.5H8V1.5H7ZM6 2.5V3.5H7V2.5H6ZM4 2.5V3.5H5V2.5H4ZM2 2.5V3.5H3V2.5H2ZM1 3.5V4.5H2V3.5H1ZM3 3.5V4.5H4V3.5H3ZM5 3.5V4.5H6V3.5H5ZM7 3.5V4.5H8V3.5H7ZM1 5.5V6.5H2V5.5H1ZM3 5.5V6.5H4V5.5H3ZM5 5.5V6.5H6V5.5H5ZM7 5.5V6.5H8V5.5H7ZM6 4.5V5.5H7V4.5H6ZM4 4.5V5.5H5V4.5H4ZM2 4.5V5.5H3V4.5H2Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_703_925">
                        <rect y="0.5" width="21" height="15" rx="3" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>

                        </Grid>
                         Instagram<span className="num">24%</span>
                        <Grid component={'span'} className="nig-dots"></Grid>
                  </Grid>
                  <Grid component={'div'} className="list">
                        <Grid component={'span'} className="span">
                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_703_931)">
                        <rect y="0.5" width="21" height="15" rx="3" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.5H21V15.5H0V10.5Z" fill="#1E448D"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H21V5.5H0V0.5Z" fill="#B01923"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_703_931">
                        <rect y="0.5" width="21" height="15" rx="3" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        </Grid>
                         LinkedIn <span className="num">24%</span>
                        <Grid component={'span'} className="nig"></Grid>
                  </Grid>
                  <Grid component={'div'} className="list">
                        <Grid component={'span'} className="span">
                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_703_937)">
                        <path d="M19 0.5H2C0.89543 0.5 0 1.39543 0 2.5V13.5C0 14.6046 0.89543 15.5 2 15.5H19C20.1046 15.5 21 14.6046 21 13.5V2.5C21 1.39543 20.1046 0.5 19 0.5Z" fill="#FFDA2C"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.936 10.435C12.55 10.248 13 9.677 13 9V6C13 5.165 12.328 4.5 11.5 4.5H9.5C8.674 4.5 8 5.17 8 6V9C8 9.682 8.448 10.25 9.064 10.436C9.25 11.056 9.822 11.5 10.5 11.5C11.182 11.5 11.75 11.05 11.936 10.435Z" fill="#D4AF2C"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 5.5H10V7H9V5.5ZM11 7.5H12V9H11V7.5Z" fill="#AF010D"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 5.5H12V7H11V5.5ZM9 7.5H10V9H9V7.5Z" fill="#FFDA2C"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0.5H21V15.5H14V0.5Z" fill="#F93939"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H7V15.5H0V0.5Z" fill="#1A47B8"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_703_937">
                        <rect y="0.5" width="21" height="15" rx="3" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        </Grid>
                         Twitter <span className="num">24%</span>
                        <Grid component={'span'} className="nig-do"></Grid>
                  </Grid>
                  <Grid component={'div'} className="list">
                         Others <span className="num">24%</span>
                        <Grid component={'span'} className="nig-d"></Grid>
                  </Grid>
                  </Grid>
                  <Grid component={'div'} className="pie">
                   <Doughnut data={socialdata} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </>
    )
}
export default Analytic