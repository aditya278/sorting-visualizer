import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { selectionSort } from "./algos";

const randomIntFromIntervals = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Sorting = () => {
  const [dataArray, setDataArray] = useState<number[]>([]);

  useEffect(() => {
    resetDataArray();
  }, []);

  const resetDataArray = () => {
    const arr: number[] = [];
    for (let i = 0; i < 10; i++) {
      arr.push(randomIntFromIntervals(5, 300));
    }
    setDataArray(arr);
  };

  const sortDataArray = (sortType: string) => {
    let sortedArray = dataArray;
    setDataArray(selectionSort(sortedArray));
  };

  return (
    <Styld.Container>
      <Styld.Button onClick={resetDataArray}>Randomize</Styld.Button>
      <Styld.BarsContainer maxValue={Math.max(...dataArray)}>
          {console.log(dataArray)}
        {dataArray.map((value, idx) => (
          <Styld.Bar color={"green"} height={value} key={idx * value}>
            {value}
          </Styld.Bar>
        ))}
      </Styld.BarsContainer>
      <div>
        <Styld.Button onClick={() => sortDataArray("selection")}>
          Selection Sort
        </Styld.Button>
        <Styld.Button onClick={() => sortDataArray("selection")}>
          Bubble Sort
        </Styld.Button>
        <Styld.Button onClick={() => sortDataArray("selection")}>
          Merge Sort
        </Styld.Button>
        <Styld.Button onClick={() => sortDataArray("selection")}>
          Quick Sort
        </Styld.Button>
      </div>
    </Styld.Container>
  );
};

const Styld = {
  Container: styled.div`
    text-align: center;
    width: ${10 * 40}px;
    margin: auto;
  `,
  BarsContainer: styled.div<{ maxValue: number }>`
    height: 400px};
    background: #e2e2e2;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
  `,
  Bar: styled.div<{ color: string; height: number }>`
    background: ${({ color }) => color};
    height: ${({ height }) => `${height}px`};
    width: 20px;
    font-size: 10px;
    color: white;
  `,
  Button: styled.button`
    margin: 10px;
    padding: 6px 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
    border-radius: 6px;
    border: none;

    color: #fff;
    background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);
    background-origin: border-box;
    box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
      inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);

    &:hover {
      background: linear-gradient(180deg, #407bce 0%, #2e6bd3 100%);
    }

    &:focus {
      box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2),
        0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
        0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
      outline: 0;
    }
  `,
};

export default Sorting;
