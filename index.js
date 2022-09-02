const GitApp = () => {
  const autoMerge = (msg, title, author) => {
    console.log(`📢 ${author}: ${title}/${msg}`);
  };

  return {  autoMerge };
};

export default GitApp;
