import React, { Component } from 'react';

import './index.css';

import {PLOT_LIST} from '../../constant';

class Serach extends Component {

    onSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        this.props.onSearch(data.get('key'), data.get('plot'));
    }

    render() {
        return (
            <form search='' className="row justify-content-center" onSubmit={(e) => this.onSubmit(e)}>
                <div className="form-group col-md-10 col-lg-7">

                    <div className="input-group mb-3">
                        <input type="text" name="key" className="form-control form-control-lg"
                            placeholder="Serach Movie..." />
                        <select className="form-control input-group-append form-control-lg plot-ddl" name="plot">
                            {PLOT_LIST.map(item => <option key={item.key} value={item.value}>{item.value}</option>)}
                        </select>
                    </div>
                </div>
                <div className="col-md-2">
                    <button type="submit" className="btn btn-danger btn-block btn-lg">Serach</button>
                </div>
            </form>
        );
    }
}

export default Serach;
