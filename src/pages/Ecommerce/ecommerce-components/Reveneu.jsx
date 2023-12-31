import React from "react"
import { Button, SparkLine, Stacked } from "../../../components"
import { SparklineAreaData } from "../../../data/dummy"
import { useStateContext } from "../../../context/ContextProvider"

export default function Reveneu () {
    const {screenSize, currentColor, currentMode } = useStateContext() 
    return (
        <div className="flex gap-10 flex-wrap justify-center z-50">
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-70">
                {
                    screenSize<900 ? (
                        <div className="flex justify-center">
                            <p className="font-semibold text-xl">Revenue Updates</p>
                        </div>
                    ) : (
                            <div className="flex justify-between gap-3">
                                <p className="font-semibold text-xl">Revenue Updates</p>
                                <div className="flex items-center gap-4">
                                    <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                                        <span>.</span>
                                        <span>Expense</span>
                                    </p>
                                    <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                                        <span>.</span>
                                        <span>Budget</span>
                                    </p>
                                </div>
                            </div>)
                }
                
                <div className="mt-10 flex gap-10 flex-wrap justify-center">
                    <div className={`border-r-1 border-color m-4 pr-10 ${screenSize<900 && "border-e-0"}`}>
                        <div>
                            <p>
                            <span className="text-3xl font-semibold">$93,438</span>
                            <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">23%</span>
                            </p>
                            <p className="text-gray-500 mt-1">Budget</p>
                        </div>
                        <div className="mt-8">
                            <p className="text-3xl font-semibold">$48,487</p>
                            <p className="text-gray-500 mt-1">Expense</p>
                        </div>
                        <div className="mt-5">
                            <SparkLine 
                            id="line-sparkLine"
                            height="80px"
                            width="250px"
                            color= {currentColor}
                            data={SparklineAreaData}
                            type="Line"
                            currentColor={currentColor}
                            />
                        </div>
                        <div className="mt-10">
                            <Button 
                            color = "white"
                            bgColor={currentColor}
                            text="Download Report"
                            borderRadius="1rem"
                            />
                        </div>
                    </div>
                    <div className={`${screenSize<900 && "flex justify-center w-3/5"}`}>
                        <Stacked />
                    </div>
                </div>
            </div>
        </div>
    )
}