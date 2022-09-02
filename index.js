const GitApp = () => {
  const printHeader = (message) => {
    console.log(`Header: ${message}`);
  };

  const printBody = (message) => {
    console.log(`Body: ${message}`);
  };

  const printFooter = (message) => {
    console.log(`Footer: ${message}`);
  };

  return { printHeader, printBody, printFooter };
};

export default GitApp;
