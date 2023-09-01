const resume = () => {
  return (
    <div className="w-full h-full ">
      <iframe
        src="https://arthvhanesa.vercel.app/assets/files/ArthVhanesaResume.pdf"
        //   type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
  );
};

resume.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default resume;
