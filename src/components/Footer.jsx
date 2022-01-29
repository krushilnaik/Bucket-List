import React from 'react'
import { Button } from 'semantic-ui-react'


const Footer = () => (
    <div>
        <p>SUPPORT OUR WORK</p>
        <Button.Group buttons={['$5', '$10', '$15', 'Other']} />
        {' '}
        <Button color='orange'>DONATE</Button>
    </div>
)


export default Footer;
