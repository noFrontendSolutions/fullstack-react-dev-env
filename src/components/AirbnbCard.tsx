interface IProps {
  name: string;
  summary: string;
  beds: number;
  picture_url: string;
  government_area: string;
}

export const AirbnbCard = ({ name, summary, beds, picture_url, government_area }: IProps) => {
  return (
    <div className="text-gray-700 h-full w-full lg:w-2/3 xl:w-1/2 flex mt-8 mb-8 rounded-lg border-2 border-gray-300 hover:border-blue-400 overflow-auto relative">
      <img src={picture_url} className = "h-56 w-56 object-cover "/>
      <div className="h-full py-2 px-4">
        <h1 className="text-center font-bold text-xl">{name}</h1>
        <p className="pt-4 text-justify">{summary}</p>
        <span className="font-bold"><p className = "absolute bottom-2">Bedrooms: {beds}</p><p className="absolute bottom-2 right-4">Area: {government_area}</p></span>
      </div>
    </div>
  );
};
