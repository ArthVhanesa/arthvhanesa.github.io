const resume = () => {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://docs.google.com/gview?url=https://arthvhanesa.vercel.app/assets/files/ArthVhanesaResume.pdf&embedded=true"
        style={{ width: "100%", height: "100%" }}
      ></iframe>
    </div>
  );
};

resume.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default resume;
