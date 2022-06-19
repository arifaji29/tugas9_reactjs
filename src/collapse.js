import React from 'react';
import { Collapse, Button } from 'react-bootstrap';

class Koleps extends React.Component {
  constructor(props){
      super(props);
      this.state={
          buka:true,
      }
  }

    render() {
        return (
            <div>
                <Button onClick={() => this.setState({buka:!this.state.buka})}>
                    Versi Website
                </Button>
                <Collapse in={this.state.buka} >
                 <p> Akses Sport v.1.0</p>
                </Collapse>
            </div>
        );
    }
}

export default Koleps;
