/**
 * COMENTARIO RAMA HEADER
 */

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

  const branchHeader = () => {
    console.log(`Branch HEADER`);
  };

  const autoMerge = (msg, title, author) => {
    console.log(`📢 ${author}: ${title}/${msg}`);
  };

  return { printHeader, printBody, printFooter, branchHeader, autoMerge };
};

export default GitApp;
