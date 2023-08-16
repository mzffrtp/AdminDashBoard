import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';
import product9 from '../../data/product9.jpg';
import Earnings from './ecommerce-components/Earnings';
import Reveneu from "./ecommerce-components/Reveneu"

function Ecommerce() {

  return (
    <div className='mt-24'>
      <Earnings />
      <Reveneu />

    </div>
  )
}

export default Ecommerce