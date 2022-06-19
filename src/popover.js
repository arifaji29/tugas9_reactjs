import React from 'react';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';

class Popovert extends React.Component {
    render() {
        const munculPopover = 
        <Popover id="popover-basic">
        <Popover.Header as="h3">Informasi Website</Popover.Header>
        <Popover.Body>
          Website ini digunkana untuk memudahkan melihat informasi bursa transfer
        </Popover.Body>
      </Popover>
        return (
            <div>
                <OverlayTrigger trigger={'click'} placement="right" overlay={munculPopover}>
                    <Button>
                        Informasi
                    </Button>

                </OverlayTrigger>
            </div>
        );
    }
}

export default Popovert;





