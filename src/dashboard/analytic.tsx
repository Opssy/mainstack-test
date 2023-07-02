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
                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6219 11.165L11.1728 7.57281H7.72621V5.24168C7.72621 4.25891 8.20765 3.30098 9.7514 3.30098H11.3185V0.242734C11.3185 0.242734 9.89629 0 8.53668 0C5.698 0 3.84273 1.72039 3.84273 4.83496V7.57281H0.687378V11.165H3.84273V19.849C4.47543 19.9483 5.1239 20 5.78449 20C6.44507 20 7.09355 19.9483 7.72621 19.849V11.165H10.6219Z" fill="#1877F2"/>
                        </svg>
                        </Grid>
                         Facebook<span className="num">50%</span>
                        <Grid component={'span'} className="nig-dot"></Grid>
                  </Grid>
                  <Grid component={'div'} className="list">
                        <Grid component={'span'} className="span">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.54171 2.80081C1.23199 4.16123 1.50004 5.60637 1.50004 9.99665C1.50004 13.6425 0.863932 17.2973 4.1931 18.1578C5.23268 18.4251 14.4438 18.4251 15.482 18.1564C16.8681 17.7987 17.9959 16.6744 18.15 14.714C18.1716 14.4404 18.1716 5.55776 18.1493 5.27859C17.9855 3.1904 16.7 1.98693 15.0063 1.74318C14.6181 1.68693 14.5403 1.67026 12.5487 1.66679C5.48407 1.67026 3.93546 1.35568 2.54171 2.80081Z" fill="url(#paint0_linear_703_964)"/>
                        <path d="M9.83191 3.84652C7.31038 3.84652 4.91594 3.62221 4.00135 5.96943C3.62358 6.93888 3.67844 8.1979 3.67844 10.0007C3.67844 11.5826 3.62774 13.0694 4.00135 14.0312C4.91385 16.3798 7.32774 16.1548 9.83052 16.1548C12.2451 16.1548 14.7347 16.4062 15.6604 14.0312C16.0389 13.0521 15.9833 11.8118 15.9833 10.0007C15.9833 7.59652 16.1159 6.04443 14.95 4.87915C13.7694 3.6986 12.1729 3.84652 9.82913 3.84652H9.83191ZM9.28052 4.95554C14.5402 4.94721 15.2097 4.36249 14.8402 12.4854C14.709 15.3583 12.5215 15.043 9.8326 15.043C4.92983 15.043 4.78885 14.9028 4.78885 9.9979C4.78885 5.0361 5.17774 4.95832 9.28052 4.95415V4.95554ZM13.1166 5.97707C12.709 5.97707 12.3784 6.30763 12.3784 6.71527C12.3784 7.1229 12.709 7.45346 13.1166 7.45346C13.5243 7.45346 13.8548 7.1229 13.8548 6.71527C13.8548 6.30763 13.5243 5.97707 13.1166 5.97707ZM9.83191 6.84026C8.08677 6.84026 6.67219 8.25554 6.67219 10.0007C6.67219 11.7458 8.08677 13.1604 9.83191 13.1604C11.577 13.1604 12.9909 11.7458 12.9909 10.0007C12.9909 8.25554 11.577 6.84026 9.83191 6.84026ZM9.83191 7.94929C12.5437 7.94929 12.5472 12.0521 9.83191 12.0521C7.1208 12.0521 7.11663 7.94929 9.83191 7.94929Z" fill="white"/>
                        <defs>
                        <linearGradient id="paint0_linear_703_964" x1="2.57367" y1="17.2689" x2="18.0636" y2="3.86261" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFDD55"/>
                        <stop offset="0.5" stop-color="#FF543E"/>
                        <stop offset="1" stop-color="#C837AB"/>
                        </linearGradient>
                        </defs>
                        </svg>
                        </Grid>
                         Instagram<span className="num">24%</span>
                        <Grid component={'span'} className="nig-dots"></Grid>
                  </Grid>
                  <Grid component={'div'} className="list">
                        <Grid component={'span'} className="span">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3334 3.75008C18.3334 2.60024 17.3999 1.66675 16.25 1.66675H3.75002C2.60018 1.66675 1.66669 2.60024 1.66669 3.75008V16.2501C1.66669 17.3999 2.60018 18.3334 3.75002 18.3334H16.25C17.3999 18.3334 18.3334 17.3999 18.3334 16.2501V3.75008Z" fill="#2867B2"/>
                        <path d="M6.44407 7.4812H3.6524V15.8784H6.44407V7.4812Z" fill="white"/>
                        <path d="M5.06879 3.43262C4.11368 3.43262 3.48962 4.06055 3.48962 4.88356C3.48962 5.68929 4.0947 6.33454 5.03184 6.33454H5.04988C6.02328 6.33454 6.62917 5.68929 6.62917 4.88356C6.61111 4.06055 6.02335 3.43262 5.06879 3.43262V3.43262Z" fill="white"/>
                        <path d="M13.3046 7.28589C11.8238 7.28589 11.1605 8.10024 10.7891 8.67225V7.48335H7.99811C8.03512 8.27101 7.99811 15.8805 7.99811 15.8805H10.789V11.1909C10.789 10.9399 10.8071 10.689 10.8811 10.5096C11.0825 10.0083 11.542 9.48901 12.3131 9.48901C13.3226 9.48901 13.727 10.2593 13.727 11.3877V15.8805H16.5181V11.0651C16.5181 8.48576 15.141 7.28589 13.3046 7.28589V7.28589Z" fill="white"/>
                        </svg>
                        </Grid>
                         LinkedIn <span className="num">24%</span>
                        <Grid component={'span'} className="nig"></Grid>
                  </Grid>
                  <Grid component={'div'} className="list">
                        <Grid component={'span'} className="span">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_703_976)">
                        <path d="M6.45048 18.3334C14.1907 18.3334 18.4243 11.9207 18.4243 6.3596C18.4243 6.17748 18.4243 5.99617 18.412 5.81565C19.2356 5.21989 19.9465 4.48232 20.5115 3.63734C19.7435 3.97766 18.9287 4.2008 18.0945 4.29944C18.9728 3.77367 19.6305 2.94608 19.9446 1.97178C19.1186 2.46193 18.2147 2.80742 17.2724 2.99327C16.4767 2.14713 15.3653 1.66675 14.2039 1.66675C11.8931 1.66675 9.99164 3.56823 9.99164 5.87898C9.99164 6.19956 10.0283 6.51913 10.1007 6.83137C6.71877 6.66187 3.56344 5.06221 1.42759 2.43453C0.316927 4.34651 0.891611 6.82432 2.73048 8.05221C2.06085 8.03238 1.4056 7.8517 0.820461 7.52548V7.5788C0.821022 9.57443 2.24052 11.309 4.19665 11.7041C3.57714 11.873 2.92698 11.8977 2.29649 11.7763C2.84642 13.4863 4.43221 14.6651 6.22814 14.6988C4.73825 15.8697 2.89673 16.5057 1.00178 16.5038C0.666945 16.5032 0.332431 16.4829 0 16.4431C1.92432 17.678 4.164 18.3332 6.45048 18.3301" fill="#1DA1F2"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_703_976">
                        <rect width="20" height="20" fill="white"/>
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