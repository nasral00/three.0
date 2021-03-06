import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../context/TransactionContext";
import { Loader } from "./";
import { shortenAddress } from "../utils/shortenAddress";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, handleChange, value }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="w-full p-2 my-2 text-sm text-black border-none rounded-sm outline-none white-glassmorphism"
  />
);

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault;

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-start px-4 py-12 mf:flex-row justift-between md:p-20">
        <div className="flex flex-col justify-start flex-1 mf:mr-10">
          <h1 className="py-1 text-3xl text-white sm:text-5xl ">
            Send Crypto <br /> across the world
          </h1>
          <p className="w-11/12 mt-5 text-base font-light text-left text-white md:w-9/12">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            three.0.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg[#2546bd]"
            >
              <AiFillPlayCircle className="mr-2 text-white" />
              <p className="text-base font-semibold text-white">
                Connect Wallet
              </p>
            </button>
          )}

          <div className="grid w-full grid-cols-2 mt-10 sm:grid-cols-3">
            <div className={`md:rounded-tl-2xl ${commonStyles}`}>
              Reliability
            </div>
            <div className={`md:${commonStyles} `}>Security</div>
            <div className={`md:rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`sm:rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={`${commonStyles} `}>Low fees</div>
            <div className={`md:rounded-br-2xl ${commonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start flex-1 w-full mt-10 mf:mt-0 ">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism">
            <div className="flex flex-col justify-between w-full h-full">
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-sm font-light text-white">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="mt-1 text-xl font-semibold text-white">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full p-5 sm:w-96 blue-glassmorphism">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount in ETH"
              name="amount"
              type="number"
              handleChange={handleChange}
            />{" "}
            <Input
              placeholder="Keyword (GIF)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />{" "}
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />
            <div className="h-[1px] w-full bg-[#dc26254d] my-2" />
            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#DC26254d] rounded-full cursor-pointer"
              >
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
