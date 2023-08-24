import Image from "next/image";

const EduCard = ({
  institution,
  logo,
  degree,
  percentage,
  startDate,
  endDate,
}) => {
  return (
    <div className="md:flex items-center gap-3 p-4 bg-sh-dark-500 border-2 border-sh-dark rounded-lg text-sh-white hover:shadow-lg transition-transform transform ease-in hover:scale-[1.02]">
      <div className="flex items-center gap-3">
        <div className="min-w-[70px] min-h-[70px] items-center overflow-hidden">
          <Image
            src={logo}
            alt={institution + " logo"}
            draggable="false"
            width={70}
            height={70}
            className="min-w-[70px] min-h-[70px] rounded-lg"
          />
        </div>
        <h3 className="md:hidden block text-lg md:text-xl font-bold">
          {institution}
        </h3>
      </div>
      <div className="mt-1">
        <div>
          <h3 className="hidden md:block text-lg md:text-xl font-bold">
            {institution}
          </h3>
          <p>{degree}</p>
          {percentage && <p>Score: {percentage}</p>}
          <p className="text-sm text-sh-white-500">
            <span>{startDate}</span> - <span>{endDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EduCard;
