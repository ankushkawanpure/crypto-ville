import React, {
    Component
} from 'react';

import {fetchProduceDetail, fetchProduceFarmers} from 'api';

import {
    extractMoneyValue
} from 'utils';

import {currencySymbol} from 'variables';

import NavBar from 'components/NavBar';

import './index.css';

export default class BuyPage extends Component {

    static defaultProps = {
        currencySymbol: '$'
    };

    state = {
        moneyValueObj: {},
        produceData: {},
        items : 0
    }

    update() {
        const {name} = this.props.match.params;

        this.setState({
            produceData: fetchProduceDetail(name)
        });
    }

    componentWillUnmount() {
        clearInterval(this.updateInterval)
    }

    componentWillMount() {
        this.updateInterval = setInterval(() => {
            this.update();
        }, 450);
    }

    updateitems = (price) => {

        this.setState({items:parseInt(price)})
    }

    render() {
        const {name} = this.props.match.params;
        let cost = 0;

        const {produceData} = this.state;
        const moneyValueObj = extractMoneyValue(produceData.price);
        const {valueFormated, floatingPoint} = moneyValueObj;

        return(
            <div className="BuyPage">
                <NavBar title={`${name}`} secondaryTitle={`${name} - ${currencySymbol}${valueFormated}.${floatingPoint}`}
                        offsetThreshold='108'
                        showHome/>
                <div className="Level"> </div>

                <div>
                    <span className="BuyContainer">
						<span className="pulltoleft">
                            Quantity of {name}
                        </span>


                        <span className="pulltoright">
                                    <input onChange={this.updateitems} type="text" className="inverse"/>
                        </span>
        			</span>
                </div>

                <div>
                    <span className="BuyContainer">
						<span className="pulltoleft">
                            Marcket Price
                        </span>


                        <span className="pulltoright">
                                    {`${valueFormated}.${floatingPoint}`}
                        </span>
        			</span>
                </div>


                <div>
                    <span className="BuyContainer">
						<span className="pulltoleft">
                            EST Cost
                        </span>


                        <span className="pulltoright">
                            {parseInt(this.state.items) * parseInt(valueFormated)}
                        </span>
        			</span>
                </div>


                <div className="bottomContainer">
                    <div className="BuyButton" >
                        Order
                    </div>
                </div>


            </div>

        );
    }
}
