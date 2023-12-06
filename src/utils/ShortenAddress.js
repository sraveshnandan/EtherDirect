const SortenAddress = (address) => {
  return address.slice(0, 6) + "....." + address.slice(6, 12);
};

export default SortenAddress;
