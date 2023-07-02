import AdminSidebar from './component/sidebar';
import Container from '@mui/material/Container';
import { DefaultProps } from './utils/types';
import { Grid, Typography } from '@mui/material';
import "./style.css"
const Dashboard = ({
    children
  }: 
  DefaultProps): JSX.Element => {
  return (
    <Grid className="admin">
      <AdminSidebar />
     <Container className='wrap'>
      <Grid component={'div'}>
        <Typography variant='h2' className='heading'>Dashboard</Typography>
      </Grid>
       {children}
     </Container>
    </Grid>
  );
};

export default Dashboard;