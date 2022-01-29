import React from 'react';
import { Button, Group } from "@mantine/core";


function Footer() {
    return (
        <Group position="center" m="md" mb="xl">
            <div className='donation'>
                <p>SUPPORT OUR WORK</p>
                <Button>$5</Button>
                <Button>$10</Button>
                <Button>$15</Button>
                <Button>Other</Button>
                <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>DONATE</Button>

            </div>
        </Group>
    )
}


export default Footer;


// <Group position="center" m="md" mb="xl">

// <div className='donation'>
//     <p>SUPPORT OUR WORK</p>
//     <Grid>
//         <Grid.Col span={1}><Button>$5</Button></Grid.Col>
//         <Grid.Col span={1}><Button>$10</Button></Grid.Col>
//         <Grid.Col span={1}><Button>$15</Button></Grid.Col>
//         <Grid.Col span={1}><Button>Other</Button></Grid.Col>
//         <Grid.Col span={1}><Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>DONATE</Button></Grid.Col>
//     </Grid >
// </div>


{/* <Group position="center" m="md" mb="xl">
<div className='donation'>
    <p>SUPPORT OUR WORK</p>
    <Button>$5</Button>
    <Button>$10</Button>
    <Button>$15</Button>
    <Button>Other</Button>
    <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>DONATE</Button>

</div>
</Group> */}