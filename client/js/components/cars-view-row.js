import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import PropTypes from 'prop-types';

export class CarsViewRow extends React.Component {

    static propTypes = {
      car: PropTypes.object,
      onDeleteCar: PropTypes.func,
    };

    render() {
      return <tr>
        <td>{this.props.car.model}</td>
        <td>{this.props.car.make}</td>
        <td>{this.props.car.color}</td>
        <td>{this.props.car.price}</td>
        <td>{this.props.car.year}</td>
        <td><button type="button"
         onClick={() => this.props.onDeleteCar(this.props.car.id)}>
           Delete
       </button></td>
      </tr>;
    }

}

export const CarsViewRowContainer = createFragmentContainer(CarsViewRow, graphql`
fragment carsViewRow_car on Car {
        id
        model
        make
        color
        price
        year
  }
`);
